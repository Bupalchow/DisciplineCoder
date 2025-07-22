/**
 * Firebase Community Services
 * @module firebaseCommunity
 * @description Firebase backend services for community features
 */

import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  serverTimestamp,
  increment,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Collection names
const COLLECTIONS = {
  POSTS: 'community_posts',
  COMMENTS: 'community_comments',
  VOTES: 'community_votes',
  BOOKMARKS: 'community_bookmarks',
  USER_ACTIVITY: 'user_activity'
};

/**
 * Post Services
 */
export const postService = {
  /**
   * Create a new post
   */
  async createPost(postData, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const post = {
        ...postData,
        authorId: userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        votesCount: 0,
        commentsCount: 0,
        bookmarksCount: 0,
        views: 0,
        isEdited: false
      };

      const docRef = await addDoc(collection(db, COLLECTIONS.POSTS), post);
      
      // Log user activity
      await this.logUserActivity(userId, 'post_created', docRef.id);
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  /**
   * Get posts with filtering and sorting
   */
  async getPosts(filters = {}) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      let q = collection(db, COLLECTIONS.POSTS);
      
      // Apply filters
      if (filters.category && filters.category !== 'all') {
        q = query(q, where('category', '==', filters.category));
      }
      
      if (filters.topic && filters.topic !== 'all') {
        q = query(q, where('topic', '==', filters.topic));
      }
      
      if (filters.difficulty && filters.difficulty !== 'all') {
        q = query(q, where('difficulty', '==', filters.difficulty));
      }
      
      // Apply sorting (simplified to avoid index requirements)
      switch (filters.sortBy) {
        case 'hot':
          // Use single field sorting to avoid index requirement
          q = query(q, orderBy('votesCount', 'desc'));
          break;
        case 'new':
          q = query(q, orderBy('createdAt', 'desc'));
          break;
        case 'top':
          q = query(q, orderBy('votesCount', 'desc'));
          break;
        case 'comments':
          q = query(q, orderBy('commentsCount', 'desc'));
          break;
        default:
          q = query(q, orderBy('createdAt', 'desc'));
      }
      
      // Add pagination limit
      if (filters.limitCount) {
        q = query(q, limit(filters.limitCount));
      }
      
      if (filters.lastDoc) {
        q = query(q, startAfter(filters.lastDoc));
      }
      
      const snapshot = await getDocs(q);
      const posts = [];
      
      snapshot.forEach(doc => {
        posts.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || new Date(),
          updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
        });
      });
      
      return {
        posts,
        lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
        hasMore: snapshot.docs.length === (filters.limitCount || 20)
      };
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;
    }
  },

  /**
   * Get a single post by ID
   */
  async getPost(postId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const docRef = doc(db, COLLECTIONS.POSTS, postId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // Increment view count
        await updateDoc(docRef, {
          views: increment(1)
        });
        
        return {
          id: docSnap.id,
          ...docSnap.data(),
          createdAt: docSnap.data().createdAt?.toDate?.() || new Date(),
          updatedAt: docSnap.data().updatedAt?.toDate?.() || new Date()
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error getting post:', error);
      throw error;
    }
  },

  /**
   * Update a post
   */
  async updatePost(postId, updateData, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const postRef = doc(db, COLLECTIONS.POSTS, postId);
      const postSnap = await getDoc(postRef);
      
      if (!postSnap.exists()) {
        throw new Error('Post not found');
      }
      
      const postData = postSnap.data();
      if (postData.authorId !== userId) {
        throw new Error('Unauthorized to update this post');
      }
      
      await updateDoc(postRef, {
        ...updateData,
        updatedAt: serverTimestamp(),
        isEdited: true
      });
      
      return true;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  /**
   * Delete a post
   */
  async deletePost(postId, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const postRef = doc(db, COLLECTIONS.POSTS, postId);
      const postSnap = await getDoc(postRef);
      
      if (!postSnap.exists()) {
        throw new Error('Post not found');
      }
      
      const postData = postSnap.data();
      if (postData.authorId !== userId) {
        throw new Error('Unauthorized to delete this post');
      }
      
      await deleteDoc(postRef);
      
      // Also delete associated comments, votes, and bookmarks
      await Promise.all([
        this.deletePostComments(postId),
        this.deletePostVotes(postId),
        this.deletePostBookmarks(postId)
      ]);
      
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },

  /**
   * Subscribe to posts real-time updates
   */
  subscribeToPosts(filters = {}, callback) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      let q = collection(db, COLLECTIONS.POSTS);
      
      // Apply filters (similar to getPosts)
      if (filters.category && filters.category !== 'all') {
        q = query(q, where('category', '==', filters.category));
      }
      
      if (filters.topic && filters.topic !== 'all') {
        q = query(q, where('topic', '==', filters.topic));
      }
      
      // Apply sorting
      switch (filters.sortBy) {
        case 'hot':
          q = query(q, orderBy('votesCount', 'desc'), orderBy('createdAt', 'desc'), limit(20));
          break;
        case 'new':
          q = query(q, orderBy('createdAt', 'desc'), limit(20));
          break;
        case 'top':
          q = query(q, orderBy('votesCount', 'desc'), limit(20));
          break;
        case 'comments':
          q = query(q, orderBy('commentsCount', 'desc'), limit(20));
          break;
        default:
          q = query(q, orderBy('createdAt', 'desc'), limit(20));
      }
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const posts = [];
        snapshot.forEach(doc => {
          posts.push({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.() || new Date(),
            updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
          });
        });
        
        callback(posts);
      }, (error) => {
        console.error('Error in posts subscription:', error);
        callback(null, error);
      });
      
      return unsubscribe;
    } catch (error) {
      console.error('Error subscribing to posts:', error);
      throw error;
    }
  },

  /**
   * Helper methods for cleanup
   */
  async deletePostComments(postId) {
    const commentsQuery = query(
      collection(db, COLLECTIONS.COMMENTS),
      where('postId', '==', postId)
    );
    const snapshot = await getDocs(commentsQuery);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  },

  async deletePostVotes(postId) {
    const votesQuery = query(
      collection(db, COLLECTIONS.VOTES),
      where('postId', '==', postId)
    );
    const snapshot = await getDocs(votesQuery);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  },

  async deletePostBookmarks(postId) {
    const bookmarksQuery = query(
      collection(db, COLLECTIONS.BOOKMARKS),
      where('postId', '==', postId)
    );
    const snapshot = await getDocs(bookmarksQuery);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  },

  async logUserActivity(userId, action, postId) {
    if (!db) return;
    
    try {
      await addDoc(collection(db, COLLECTIONS.USER_ACTIVITY), {
        userId,
        action,
        postId,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error('Error logging user activity:', error);
    }
  }
};

/**
 * Comment Services
 */
export const commentService = {
  /**
   * Create a new comment
   */
  async createComment(commentData, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const comment = {
        ...commentData,
        authorId: userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        votesCount: 0,
        isEdited: false
      };

      const docRef = await addDoc(collection(db, COLLECTIONS.COMMENTS), comment);
      
      // Increment comment count on the post
      const postRef = doc(db, COLLECTIONS.POSTS, commentData.postId);
      await updateDoc(postRef, {
        commentsCount: increment(1)
      });
      
      // Log user activity
      await postService.logUserActivity(userId, 'comment_created', commentData.postId);
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  },

  /**
   * Get comments for a post
   */
  async getComments(postId, orderByField = 'createdAt', orderDirection = 'asc') {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const q = query(
        collection(db, COLLECTIONS.COMMENTS),
        where('postId', '==', postId),
        orderBy(orderByField, orderDirection)
      );
      
      const snapshot = await getDocs(q);
      const comments = [];
      
      snapshot.forEach(doc => {
        comments.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || new Date(),
          updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
        });
      });
      
      return comments;
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  },

  /**
   * Update a comment
   */
  async updateComment(commentId, updateData, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const commentRef = doc(db, COLLECTIONS.COMMENTS, commentId);
      const commentSnap = await getDoc(commentRef);
      
      if (!commentSnap.exists()) {
        throw new Error('Comment not found');
      }
      
      const commentData = commentSnap.data();
      if (commentData.authorId !== userId) {
        throw new Error('Unauthorized to update this comment');
      }
      
      await updateDoc(commentRef, {
        ...updateData,
        updatedAt: serverTimestamp(),
        isEdited: true
      });
      
      return true;
    } catch (error) {
      console.error('Error updating comment:', error);
      throw error;
    }
  },

  /**
   * Delete a comment
   */
  async deleteComment(commentId, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const commentRef = doc(db, COLLECTIONS.COMMENTS, commentId);
      const commentSnap = await getDoc(commentRef);
      
      if (!commentSnap.exists()) {
        throw new Error('Comment not found');
      }
      
      const commentData = commentSnap.data();
      if (commentData.authorId !== userId) {
        throw new Error('Unauthorized to delete this comment');
      }
      
      await deleteDoc(commentRef);
      
      // Decrement comment count on the post
      const postRef = doc(db, COLLECTIONS.POSTS, commentData.postId);
      await updateDoc(postRef, {
        commentsCount: increment(-1)
      });
      
      return true;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  },

  /**
   * Subscribe to comments for a post
   */
  subscribeToComments(postId, callback) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const q = query(
        collection(db, COLLECTIONS.COMMENTS),
        where('postId', '==', postId),
        orderBy('createdAt', 'asc')
      );
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const comments = [];
        snapshot.forEach(doc => {
          comments.push({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.() || new Date(),
            updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
          });
        });
        
        callback(comments);
      }, (error) => {
        console.error('Error in comments subscription:', error);
        callback(null, error);
      });
      
      return unsubscribe;
    } catch (error) {
      console.error('Error subscribing to comments:', error);
      throw error;
    }
  }
};

/**
 * Voting Services
 */
export const votingService = {
  /**
   * Vote on a post or comment
   */
  async vote(targetId, targetType, voteType, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const voteId = `${userId}_${targetId}`;
      const voteRef = doc(db, COLLECTIONS.VOTES, voteId);
      const voteSnap = await getDoc(voteRef);
      
      const targetCollection = targetType === 'post' ? COLLECTIONS.POSTS : COLLECTIONS.COMMENTS;
      const targetRef = doc(db, targetCollection, targetId);
      
      if (voteSnap.exists()) {
        const existingVote = voteSnap.data();
        
        if (existingVote.voteType === voteType) {
          // Remove vote
          await deleteDoc(voteRef);
          
          const increment_value = voteType === 'upvote' ? -1 : 1;
          await updateDoc(targetRef, {
            votesCount: increment(increment_value)
          });
          
          return { action: 'removed', voteType: null };
        } else {
          // Change vote
          await updateDoc(voteRef, {
            voteType,
            updatedAt: serverTimestamp()
          });
          
          const increment_value = voteType === 'upvote' ? 2 : -2;
          await updateDoc(targetRef, {
            votesCount: increment(increment_value)
          });
          
          return { action: 'changed', voteType };
        }
      } else {
        // New vote
        await addDoc(collection(db, COLLECTIONS.VOTES), {
          id: voteId,
          userId,
          targetId,
          targetType,
          voteType,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        
        const increment_value = voteType === 'upvote' ? 1 : -1;
        await updateDoc(targetRef, {
          votesCount: increment(increment_value)
        });
        
        return { action: 'added', voteType };
      }
    } catch (error) {
      console.error('Error voting:', error);
      throw error;
    }
  },

  /**
   * Get user votes for multiple items
   */
  async getUserVotes(userId, targetIds) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const votes = {};
      
      if (targetIds.length === 0) return votes;
      
      const voteIds = targetIds.map(id => `${userId}_${id}`);
      const voteRefs = voteIds.map(id => doc(db, COLLECTIONS.VOTES, id));
      
      const voteSnaps = await Promise.all(voteRefs.map(ref => getDoc(ref)));
      
      voteSnaps.forEach((snap, index) => {
        if (snap.exists()) {
          const targetId = targetIds[index];
          votes[targetId] = snap.data().voteType;
        }
      });
      
      return votes;
    } catch (error) {
      console.error('Error getting user votes:', error);
      throw error;
    }
  }
};

/**
 * Bookmark Services
 */
export const bookmarkService = {
  /**
   * Toggle bookmark for a post
   */
  async toggleBookmark(postId, userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const bookmarkId = `${userId}_${postId}`;
      const bookmarkRef = doc(db, COLLECTIONS.BOOKMARKS, bookmarkId);
      const bookmarkSnap = await getDoc(bookmarkRef);
      
      const postRef = doc(db, COLLECTIONS.POSTS, postId);
      
      if (bookmarkSnap.exists()) {
        // Remove bookmark
        await deleteDoc(bookmarkRef);
        await updateDoc(postRef, {
          bookmarksCount: increment(-1)
        });
        
        return { bookmarked: false };
      } else {
        // Add bookmark
        await addDoc(collection(db, COLLECTIONS.BOOKMARKS), {
          id: bookmarkId,
          userId,
          postId,
          createdAt: serverTimestamp()
        });
        
        await updateDoc(postRef, {
          bookmarksCount: increment(1)
        });
        
        return { bookmarked: true };
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      throw error;
    }
  },

  /**
   * Get user bookmarks
   */
  async getUserBookmarks(userId) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      // Simplified query to avoid index requirement
      const q = query(
        collection(db, COLLECTIONS.BOOKMARKS),
        where('userId', '==', userId)
      );
      
      const snapshot = await getDocs(q);
      const bookmarks = [];
      
      snapshot.forEach(doc => {
        bookmarks.push(doc.data().postId);
      });

      // Sort on client side to avoid compound index
      return bookmarks;
    } catch (error) {
      console.error('Error getting user bookmarks:', error);
      throw error;
    }
  },

  /**
   * Check if posts are bookmarked by user
   */
  async checkBookmarks(userId, postIds) {
    if (!db) throw new Error('Firebase not initialized');
    
    try {
      const bookmarks = {};
      
      if (postIds.length === 0) return bookmarks;
      
      const bookmarkIds = postIds.map(id => `${userId}_${id}`);
      const bookmarkRefs = bookmarkIds.map(id => doc(db, COLLECTIONS.BOOKMARKS, id));
      
      const bookmarkSnaps = await Promise.all(bookmarkRefs.map(ref => getDoc(ref)));
      
      bookmarkSnaps.forEach((snap, index) => {
        const postId = postIds[index];
        bookmarks[postId] = snap.exists();
      });
      
      return bookmarks;
    } catch (error) {
      console.error('Error checking bookmarks:', error);
      throw error;
    }
  }
};
