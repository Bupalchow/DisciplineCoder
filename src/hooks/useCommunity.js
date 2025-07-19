/**
 * Community Hook
 * @module useCommunity
 * @description Hook for managing community posts, comments, and interactions
 */

import { useState, useEffect, useCallback } from 'react';
import { MOCK_POSTS, MOCK_COMMENTS, SORT_OPTIONS } from '../data/communityData';

const STORAGE_KEYS = {
  POSTS: 'community_posts',
  COMMENTS: 'community_comments',
  USER_VOTES: 'community_user_votes',
  USER_BOOKMARKS: 'community_user_bookmarks'
};

export const useCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [userVotes, setUserVotes] = useState({});
  const [userBookmarks, setUserBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.HOT);
  const [filterTopic, setFilterTopic] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Initialize data
  useEffect(() => {
    const loadData = () => {
      try {
        const storedPosts = localStorage.getItem(STORAGE_KEYS.POSTS);
        const storedComments = localStorage.getItem(STORAGE_KEYS.COMMENTS);
        const storedUserVotes = localStorage.getItem(STORAGE_KEYS.USER_VOTES);
        const storedBookmarks = localStorage.getItem(STORAGE_KEYS.USER_BOOKMARKS);

        setPosts(storedPosts ? JSON.parse(storedPosts) : MOCK_POSTS);
        setComments(storedComments ? JSON.parse(storedComments) : MOCK_COMMENTS);
        setUserVotes(storedUserVotes ? JSON.parse(storedUserVotes) : {});
        setUserBookmarks(storedBookmarks ? JSON.parse(storedBookmarks) : []);
      } catch (error) {
        console.error('Error loading community data:', error);
        setPosts(MOCK_POSTS);
        setComments(MOCK_COMMENTS);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Save data to localStorage
  const saveData = useCallback((newPosts, newComments, newVotes, newBookmarks) => {
    try {
      if (newPosts) {
        localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(newPosts));
        setPosts(newPosts);
      }
      if (newComments) {
        localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(newComments));
        setComments(newComments);
      }
      if (newVotes) {
        localStorage.setItem(STORAGE_KEYS.USER_VOTES, JSON.stringify(newVotes));
        setUserVotes(newVotes);
      }
      if (newBookmarks) {
        localStorage.setItem(STORAGE_KEYS.USER_BOOKMARKS, JSON.stringify(newBookmarks));
        setUserBookmarks(newBookmarks);
      }
    } catch (error) {
      console.error('Error saving community data:', error);
    }
  }, []);

  // Vote on a post
  const votePost = useCallback((postId, voteType) => {
    const currentVote = userVotes[postId];
    let newVoteType = voteType;
    
    // If clicking the same vote type, remove the vote
    if (currentVote === voteType) {
      newVoteType = null;
    }

    const newUserVotes = { ...userVotes, [postId]: newVoteType };
    const newPosts = posts.map(post => {
      if (post.id === postId) {
        let upvotes = post.upvotes;
        let downvotes = post.downvotes;

        // Remove previous vote
        if (currentVote === 'upvote') upvotes--;
        if (currentVote === 'downvote') downvotes--;

        // Add new vote
        if (newVoteType === 'upvote') upvotes++;
        if (newVoteType === 'downvote') downvotes++;

        return { ...post, upvotes, downvotes };
      }
      return post;
    });

    saveData(newPosts, null, newUserVotes, null);
  }, [posts, userVotes, saveData]);

  // Create a new post
  const createPost = useCallback((postData) => {
    const newPost = {
      id: `post-${Date.now()}`,
      ...postData,
      author: {
        id: 'current-user',
        username: 'you',
        avatar: null,
        reputation: 100
      },
      upvotes: 0,
      downvotes: 0,
      commentCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      solved: false
    };

    const newPosts = [newPost, ...posts];
    saveData(newPosts, null, null, null);
    return newPost;
  }, [posts, saveData]);

  // Add a comment
  const addComment = useCallback((postId, content, parentId = null) => {
    const newComment = {
      id: `comment-${Date.now()}`,
      postId,
      content,
      author: {
        id: 'current-user',
        username: 'you',
        avatar: null,
        reputation: 100
      },
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date(),
      parentId,
      replies: []
    };

    const newComments = { ...comments };
    if (!newComments[postId]) {
      newComments[postId] = [];
    }
    newComments[postId].push(newComment);

    // Update comment count on post
    const newPosts = posts.map(post => 
      post.id === postId 
        ? { ...post, commentCount: post.commentCount + 1 }
        : post
    );

    saveData(newPosts, newComments, null, null);
    return newComment;
  }, [posts, comments, saveData]);

  // Toggle bookmark
  const toggleBookmark = useCallback((postId) => {
    const newBookmarks = userBookmarks.includes(postId)
      ? userBookmarks.filter(id => id !== postId)
      : [...userBookmarks, postId];
    
    saveData(null, null, null, newBookmarks);
  }, [userBookmarks, saveData]);

  // Get filtered and sorted posts
  const getFilteredPosts = useCallback(() => {
    let filteredPosts = [...posts];

    // Apply topic filter
    if (filterTopic !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.topic === filterTopic);
    }

    // Apply category filter
    if (filterCategory !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === filterCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case SORT_OPTIONS.NEW:
        filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case SORT_OPTIONS.TOP:
        filteredPosts.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
        break;
      case SORT_OPTIONS.CONTROVERSIAL:
        filteredPosts.sort((a, b) => {
          const aRatio = a.downvotes / (a.upvotes + a.downvotes + 1);
          const bRatio = b.downvotes / (b.upvotes + b.downvotes + 1);
          return bRatio - aRatio;
        });
        break;
      case SORT_OPTIONS.HOT:
      default:
        // Hot algorithm: (upvotes - downvotes) / age_in_hours
        filteredPosts.sort((a, b) => {
          const aScore = (a.upvotes - a.downvotes) / Math.max(1, (Date.now() - new Date(a.createdAt)) / (1000 * 60 * 60));
          const bScore = (b.upvotes - b.downvotes) / Math.max(1, (Date.now() - new Date(b.createdAt)) / (1000 * 60 * 60));
          return bScore - aScore;
        });
        break;
    }

    return filteredPosts;
  }, [posts, sortBy, filterTopic, filterCategory]);

  // Get comments for a post
  const getPostComments = useCallback((postId) => {
    return comments[postId] || [];
  }, [comments]);

  return {
    // State
    posts: getFilteredPosts(),
    comments,
    userVotes,
    userBookmarks,
    loading,
    sortBy,
    filterTopic,
    filterCategory,

    // Actions
    votePost,
    createPost,
    addComment,
    toggleBookmark,
    setSortBy,
    setFilterTopic,
    setFilterCategory,
    getPostComments,

    // Utilities
    isBookmarked: (postId) => userBookmarks.includes(postId),
    getUserVote: (postId) => userVotes[postId] || null
  };
};

export default useCommunity;
