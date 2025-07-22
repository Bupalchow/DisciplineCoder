/**
 * Firebase Data Migration Utility
 * @module firebaseDataMigration
 * @description Utilities to fix existing data in Firebase that might be missing author information
 */

import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTIONS = {
  POSTS: 'community_posts',
  COMMENTS: 'community_comments'
};

/**
 * Fix posts that are missing author information
 * This should be run once to fix existing data
 */
export const fixPostsWithoutAuthor = async () => {
  if (!db) {
    console.error('Firebase not initialized');
    return;
  }

  try {
    console.log('🔧 Starting migration to fix posts without author information...');
    
    const postsRef = collection(db, COLLECTIONS.POSTS);
    const snapshot = await getDocs(postsRef);
    
    let fixedCount = 0;
    let totalCount = 0;
    
    for (const docSnapshot of snapshot.docs) {
      totalCount++;
      const postData = docSnapshot.data();
      
      // Check if post is missing author information
      if (!postData.author || !postData.author.username) {
        console.log(`Fixing post: ${postData.title || 'Untitled'}`);
        
        // Create a default author object
        const defaultAuthor = {
          username: 'Anonymous User',
          reputation: 100,
          avatar: 'https://ui-avatars.com/api/?name=AU&background=6b7280&color=fff'
        };
        
        // Update the post with author information
        await updateDoc(doc(db, COLLECTIONS.POSTS, docSnapshot.id), {
          author: defaultAuthor
        });
        
        fixedCount++;
      }
    }
    
    console.log(`✅ Migration complete! Fixed ${fixedCount} out of ${totalCount} posts.`);
    
    return {
      success: true,
      totalPosts: totalCount,
      fixedPosts: fixedCount,
      message: `Fixed ${fixedCount} posts out of ${totalCount} total posts`
    };
    
  } catch (error) {
    console.error('❌ Error during migration:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Fix comments that are missing author information
 * This should be run once to fix existing data
 */
export const fixCommentsWithoutAuthor = async () => {
  if (!db) {
    console.error('Firebase not initialized');
    return;
  }

  try {
    console.log('🔧 Starting migration to fix comments without author information...');
    
    const commentsRef = collection(db, COLLECTIONS.COMMENTS);
    const snapshot = await getDocs(commentsRef);
    
    let fixedCount = 0;
    let totalCount = 0;
    
    for (const docSnapshot of snapshot.docs) {
      totalCount++;
      const commentData = docSnapshot.data();
      
      // Check if comment is missing author information
      if (!commentData.author || !commentData.author.username) {
        console.log(`Fixing comment: ${commentData.content?.substring(0, 50) || 'No content'}...`);
        
        // Create a default author object
        const defaultAuthor = {
          username: 'Anonymous User',
          reputation: 100,
          avatar: 'https://ui-avatars.com/api/?name=AU&background=6b7280&color=fff'
        };
        
        // Update the comment with author information
        await updateDoc(doc(db, COLLECTIONS.COMMENTS, docSnapshot.id), {
          author: defaultAuthor
        });
        
        fixedCount++;
      }
    }
    
    console.log(`✅ Migration complete! Fixed ${fixedCount} out of ${totalCount} comments.`);
    
    return {
      success: true,
      totalComments: totalCount,
      fixedComments: fixedCount,
      message: `Fixed ${fixedCount} comments out of ${totalCount} total comments`
    };
    
  } catch (error) {
    console.error('❌ Error during migration:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Run complete data migration
 * Fixes both posts and comments that are missing author information
 */
export const runCompleteMigration = async () => {
  console.log('🚀 Starting complete data migration...');
  
  try {
    // Fix posts first
    const postsResult = await fixPostsWithoutAuthor();
    
    // Then fix comments
    const commentsResult = await fixCommentsWithoutAuthor();
    
    const summary = {
      success: postsResult.success && commentsResult.success,
      posts: postsResult,
      comments: commentsResult,
      totalFixed: (postsResult.fixedPosts || 0) + (commentsResult.fixedComments || 0)
    };
    
    console.log('🎉 Complete migration finished!');
    console.log(`Total items fixed: ${summary.totalFixed}`);
    
    return summary;
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Export functions for browser console access (development only)
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  window.fixPostsWithoutAuthor = fixPostsWithoutAuthor;
  window.fixCommentsWithoutAuthor = fixCommentsWithoutAuthor;
  window.runCompleteMigration = runCompleteMigration;
}
