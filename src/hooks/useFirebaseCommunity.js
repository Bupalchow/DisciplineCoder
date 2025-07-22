/**
 * Firebase Community Hook
 * @module useFirebaseCommunity
 * @description Hook for managing community posts, comments, and interactions with Firebase backend
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuthContext } from '../contexts/useAuthContext';
import { postService, commentService, votingService, bookmarkService } from '../services/firebaseCommunity';
import { SORT_OPTIONS } from '../data/communityData';

export const useFirebaseCommunity = () => {
  // State
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [userVotes, setUserVotes] = useState({});
  const [userBookmarks, setUserBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState({});
  const [error, setError] = useState(null);
  
  // Filters and sorting
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.HOT);
  const [filterTopic, setFilterTopic] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  
  // Pagination
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);
  
  // Real-time subscriptions
  const unsubscribeRefs = useRef({});
  
  // Auth context
  const { user } = useAuthContext();

  /**
   * Load initial posts data
   */
  const loadInitialData = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const filters = {
        sortBy,
        category: filterCategory,
        topic: filterTopic,
        difficulty: filterDifficulty,
        limitCount: 20
      };
      
      const result = await postService.getPosts(filters);
      setPosts(result.posts);
      setLastDoc(result.lastDoc);
      setHasMore(result.hasMore);
      
      // Load user votes for these posts
      if (result.posts.length > 0) {
        const postIds = result.posts.map(post => post.id);
        const votes = await votingService.getUserVotes(user.uid, postIds);
        setUserVotes(votes);
        
        // Check bookmarks
        const bookmarks = await bookmarkService.checkBookmarks(user.uid, postIds);
        const bookmarkedIds = Object.keys(bookmarks).filter(id => bookmarks[id]);
        setUserBookmarks(prev => [...new Set([...prev, ...bookmarkedIds])]);
      }
    } catch (err) {
      console.error('Error loading initial data:', err);
      setError('Failed to load community posts');
    } finally {
      setLoading(false);
    }
  }, [user, sortBy, filterCategory, filterTopic, filterDifficulty]);

  /**
   * Load user bookmarks
   */
  const loadUserBookmarks = useCallback(async () => {
    if (!user) return;
    
    try {
      const userBookmarksData = await bookmarkService.getUserBookmarks(user.uid);
      setUserBookmarks(userBookmarksData);
    } catch (err) {
      console.error('Error loading user bookmarks:', err);
    }
  }, [user]);

  /**
   * Initialize and load initial data
   */
  useEffect(() => {
    const currentUnsubscribes = unsubscribeRefs.current;
    
    if (user) {
      loadInitialData();
      loadUserBookmarks();
    }
    
    return () => {
      // Cleanup subscriptions
      Object.values(currentUnsubscribes).forEach(unsubscribe => {
        if (typeof unsubscribe === 'function') {
          unsubscribe();
        }
      });
    };
  }, [user, loadInitialData, loadUserBookmarks]);

  /**
   * Reload posts when filters change
   */
  useEffect(() => {
    if (user) {
      loadInitialData();
    }
  }, [user, loadInitialData]);

  /**
   * Load more posts for pagination
   */
  const loadMorePosts = useCallback(async () => {
    if (!user || !hasMore || postsLoading) return;
    
    setPostsLoading(true);
    
    try {
      const filters = {
        sortBy,
        category: filterCategory,
        topic: filterTopic,
        difficulty: filterDifficulty,
        limitCount: 20,
        lastDoc
      };
      
      const result = await postService.getPosts(filters);
      setPosts(prev => [...prev, ...result.posts]);
      setLastDoc(result.lastDoc);
      setHasMore(result.hasMore);
      
      // Load user votes for new posts
      if (result.posts.length > 0) {
        const postIds = result.posts.map(post => post.id);
        const votes = await votingService.getUserVotes(user.uid, postIds);
        setUserVotes(prev => ({ ...prev, ...votes }));
        
        // Check bookmarks for new posts
        const bookmarks = await bookmarkService.checkBookmarks(user.uid, postIds);
        const bookmarkedIds = Object.keys(bookmarks).filter(id => bookmarks[id]);
        setUserBookmarks(prev => [...new Set([...prev, ...bookmarkedIds])]);
      }
    } catch (err) {
      console.error('Error loading more posts:', err);
      setError('Failed to load more posts');
    } finally {
      setPostsLoading(false);
    }
  }, [user, hasMore, postsLoading, sortBy, filterCategory, filterTopic, filterDifficulty, lastDoc]);

  /**
   * Create a new post
   */
  const createPost = useCallback(async (postData) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      // Add author information to the post data
      const postWithAuthor = {
        ...postData,
        author: {
          username: user.displayName || user.email?.split('@')[0] || 'Anonymous',
          reputation: 100, // Default reputation for new users
          avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email?.split('@')[0] || 'A')}&background=3b82f6&color=fff`
        }
      };
      
      const postId = await postService.createPost(postWithAuthor, user.uid);
      
      // Refresh posts to include the new one
      await loadInitialData();
      
      return postId;
    } catch (err) {
      console.error('Error creating post:', err);
      throw err;
    }
  }, [user, loadInitialData]);

  /**
   * Update a post
   */
  const updatePost = useCallback(async (postId, updateData) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      await postService.updatePost(postId, updateData, user.uid);
      
      // Update local state
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, ...updateData, isEdited: true, updatedAt: new Date() }
          : post
      ));
      
      return true;
    } catch (err) {
      console.error('Error updating post:', err);
      throw err;
    }
  }, [user]);

  /**
   * Delete a post
   */
  const deletePost = useCallback(async (postId) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      await postService.deletePost(postId, user.uid);
      
      // Remove from local state
      setPosts(prev => prev.filter(post => post.id !== postId));
      
      return true;
    } catch (err) {
      console.error('Error deleting post:', err);
      throw err;
    }
  }, [user]);

  /**
   * Vote on a post
   */
  const voteOnPost = useCallback(async (postId, voteType) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      const result = await votingService.vote(postId, 'post', voteType, user.uid);
      
      // Update local state
      setUserVotes(prev => ({
        ...prev,
        [postId]: result.voteType
      }));
      
      // Update post votes count
      setPosts(prev => prev.map(post => {
        if (post.id === postId) {
          let votesChange = 0;
          const currentVote = userVotes[postId];
          
          if (result.action === 'added') {
            votesChange = voteType === 'upvote' ? 1 : -1;
          } else if (result.action === 'removed') {
            votesChange = currentVote === 'upvote' ? -1 : 1;
          } else if (result.action === 'changed') {
            votesChange = voteType === 'upvote' ? 2 : -2;
          }
          
          return {
            ...post,
            votesCount: post.votesCount + votesChange
          };
        }
        return post;
      }));
      
      return result;
    } catch (err) {
      console.error('Error voting on post:', err);
      throw err;
    }
  }, [user, userVotes]);

  /**
   * Toggle post bookmark
   */
  const toggleBookmark = useCallback(async (postId) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      const result = await bookmarkService.toggleBookmark(postId, user.uid);
      
      // Update local state
      if (result.bookmarked) {
        setUserBookmarks(prev => [...prev, postId]);
      } else {
        setUserBookmarks(prev => prev.filter(id => id !== postId));
      }
      
      // Update post bookmarks count
      setPosts(prev => prev.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            bookmarksCount: post.bookmarksCount + (result.bookmarked ? 1 : -1)
          };
        }
        return post;
      }));
      
      return result;
    } catch (err) {
      console.error('Error toggling bookmark:', err);
      throw err;
    }
  }, [user]);

  /**
   * Load comments for a post
   */
  const loadComments = useCallback(async (postId) => {
    if (!user) return;
    
    setCommentsLoading(prev => ({ ...prev, [postId]: true }));
    
    try {
      const postComments = await commentService.getComments(postId);
      setComments(prev => ({
        ...prev,
        [postId]: postComments
      }));
      
      // Load user votes for comments
      if (postComments.length > 0) {
        const commentIds = postComments.map(comment => comment.id);
        const votes = await votingService.getUserVotes(user.uid, commentIds);
        setUserVotes(prev => ({ ...prev, ...votes }));
      }
    } catch (err) {
      console.error('Error loading comments:', err);
    } finally {
      setCommentsLoading(prev => ({ ...prev, [postId]: false }));
    }
  }, [user]);

  /**
   * Create a comment
   */
  const createComment = useCallback(async (commentData) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      // Add author information to the comment data
      const commentWithAuthor = {
        ...commentData,
        author: {
          username: user.displayName || user.email?.split('@')[0] || 'Anonymous',
          reputation: 100, // Default reputation for new users
          avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email?.split('@')[0] || 'A')}&background=3b82f6&color=fff`
        }
      };
      
      const commentId = await commentService.createComment(commentWithAuthor, user.uid);
      
      // Reload comments for the post
      await loadComments(commentData.postId);
      
      // Update post comments count
      setPosts(prev => prev.map(post => {
        if (post.id === commentData.postId) {
          return {
            ...post,
            commentsCount: post.commentsCount + 1
          };
        }
        return post;
      }));
      
      return commentId;
    } catch (err) {
      console.error('Error creating comment:', err);
      throw err;
    }
  }, [user, loadComments]);

  /**
   * Vote on a comment
   */
  const voteOnComment = useCallback(async (commentId, voteType, postId) => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      const result = await votingService.vote(commentId, 'comment', voteType, user.uid);
      
      // Update local state
      setUserVotes(prev => ({
        ...prev,
        [commentId]: result.voteType
      }));
      
      // Update comment votes count
      setComments(prev => ({
        ...prev,
        [postId]: prev[postId]?.map(comment => {
          if (comment.id === commentId) {
            let votesChange = 0;
            const currentVote = userVotes[commentId];
            
            if (result.action === 'added') {
              votesChange = voteType === 'upvote' ? 1 : -1;
            } else if (result.action === 'removed') {
              votesChange = currentVote === 'upvote' ? -1 : 1;
            } else if (result.action === 'changed') {
              votesChange = voteType === 'upvote' ? 2 : -2;
            }
            
            return {
              ...comment,
              votesCount: comment.votesCount + votesChange
            };
          }
          return comment;
        }) || []
      }));
      
      return result;
    } catch (err) {
      console.error('Error voting on comment:', err);
      throw err;
    }
  }, [user, userVotes]);

  /**
   * Get filtered and sorted posts
   */
  const getFilteredPosts = useCallback(() => {
    let filtered = [...posts];

    // Client-side filtering for additional criteria
    if (filterTopic !== 'all') {
      filtered = filtered.filter(post => post.topic === filterTopic);
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter(post => post.category === filterCategory);
    }

    if (filterDifficulty !== 'all') {
      filtered = filtered.filter(post => post.difficulty === filterDifficulty);
    }

    return filtered;
  }, [posts, filterTopic, filterCategory, filterDifficulty]);

  /**
   * Filter functions
   */
  const filterPosts = useCallback((filters) => {
    setSortBy(filters.sortBy || SORT_OPTIONS.HOT);
    setFilterTopic(filters.topic || 'all');
    setFilterCategory(filters.category || 'all');
    setFilterDifficulty(filters.difficulty || 'all');
  }, []);

  return {
    // State
    posts: getFilteredPosts(),
    comments,
    userVotes,
    userBookmarks,
    loading,
    postsLoading,
    commentsLoading,
    error,
    
    // Pagination
    hasMore,
    loadMorePosts,
    
    // Filters
    sortBy,
    filterTopic,
    filterCategory,
    filterDifficulty,
    filterPosts,
    
    // Actions
    createPost,
    updatePost,
    deletePost,
    voteOnPost,
    toggleBookmark,
    
    // Comments
    loadComments,
    createComment,
    voteOnComment,
    
    // Computed values
    hasPosts: posts.length > 0,
    isEmpty: !loading && posts.length === 0,
    isAuthenticated: !!user,
    user
  };
};
