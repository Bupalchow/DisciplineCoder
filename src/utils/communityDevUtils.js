/**
 * Community Development Utilities
 * @module communityDevUtils
 * @description Utilities for testing and developing the community features
 */

import { postService, commentService } from '../services/firebaseCommunity';

/**
 * Sample post data for testing
 */
const SAMPLE_POSTS = [
  {
    title: "How to solve Two Sum efficiently?",
    content: "I'm struggling with the Two Sum problem on LeetCode. I know the brute force approach but can someone explain the optimal solution using hash maps?",
    category: "help",
    topic: "arrays",
    difficulty: "beginner",
    tags: ["leetcode", "arrays", "hash-map"],
    author: {
      username: "coding_newbie",
      reputation: 150,
      avatar: "https://ui-avatars.com/api/?name=CN&background=3b82f6&color=fff"
    }
  },
  {
    title: "Dynamic Programming: A Complete Guide",
    content: "After solving 100+ DP problems, here's my comprehensive guide to mastering dynamic programming. This covers patterns, common techniques, and practice problems.\n\n## Key Patterns:\n1. Fibonacci sequence\n2. Climbing stairs\n3. Coin change\n4. Longest subsequences\n\nFeel free to ask questions!",
    category: "resource",
    topic: "dynamic-programming",
    difficulty: "advanced",
    tags: ["dynamic-programming", "guide", "patterns"],
    author: {
      username: "dp_master",
      reputation: 2500,
      avatar: "https://ui-avatars.com/api/?name=DM&background=10b981&color=fff"
    }
  },
  {
    title: "Just got my first FAANG offer! 🎉",
    content: "After 6 months of consistent practice on LeetCode and following the DisciplineCoder roadmap, I finally landed my dream job at Google! \n\nHere's what helped me the most:\n- Consistent daily practice (2-3 problems)\n- Mock interviews\n- System design study\n- This amazing community\n\nThank you everyone for the support!",
    category: "achievement",
    topic: "career",
    difficulty: "intermediate",
    tags: ["success-story", "faang", "interview"],
    author: {
      username: "dream_achiever",
      reputation: 850,
      avatar: "https://ui-avatars.com/api/?name=DA&background=f59e0b&color=fff"
    }
  },
  {
    title: "Binary Tree Traversal - All Methods Explained",
    content: "Comprehensive guide covering all binary tree traversal methods with code examples and visual representations.",
    category: "solution",
    topic: "trees",
    difficulty: "intermediate",
    tags: ["binary-tree", "traversal", "algorithms"],
    solved: true,
    author: {
      username: "tree_expert",
      reputation: 1200,
      avatar: "https://ui-avatars.com/api/?name=TE&background=8b5cf6&color=fff"
    }
  }
];

/**
 * Sample comments for testing
 */
const SAMPLE_COMMENTS = [
  {
    content: "Great question! The hash map approach works by storing the complement of each number as you iterate through the array.",
    author: {
      username: "helpful_coder",
      reputation: 500,
      avatar: "https://ui-avatars.com/api/?name=HC&background=ef4444&color=fff"
    }
  },
  {
    content: "This is exactly what I needed! The DP guide is incredibly detailed. Thank you for sharing!",
    author: {
      username: "grateful_learner",
      reputation: 300,
      avatar: "https://ui-avatars.com/api/?name=GL&background=06b6d4&color=fff"
    }
  }
];

/**
 * Development utilities class
 */
export class CommunityDevUtils {
  /**
   * Create sample posts for testing
   */
  static async createSamplePosts(userId) {
    if (!userId) {
      throw new Error('User ID required to create sample posts');
    }

    console.log('Creating sample posts...');
    const createdPosts = [];

    for (const postData of SAMPLE_POSTS) {
      try {
        const postId = await postService.createPost(postData, userId);
        createdPosts.push({ id: postId, ...postData });
        console.log(`Created post: ${postData.title}`);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }

    return createdPosts;
  }

  /**
   * Create sample comments for a post
   */
  static async createSampleComments(postId, userId) {
    if (!postId || !userId) {
      throw new Error('Post ID and User ID required to create sample comments');
    }

    console.log('Creating sample comments...');
    const createdComments = [];

    for (const commentData of SAMPLE_COMMENTS) {
      try {
        const commentId = await commentService.createComment({
          ...commentData,
          postId
        }, userId);
        createdComments.push({ id: commentId, ...commentData });
        console.log(`Created comment: ${commentData.content.substring(0, 50)}...`);
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    }

    return createdComments;
  }

  /**
   * Clear all community data (use with caution!)
   */
  static async clearAllData() {
    console.warn('This will clear all community data! Use only in development.');
    // Implementation would require admin SDK for bulk operations
    // For development, manually delete from Firebase console
  }

  /**
   * Test Firebase connection
   */
  static async testConnection() {
    try {
      console.log('Testing Firebase connection...');
      const result = await postService.getPosts({ limitCount: 1 });
      console.log('✅ Firebase connection successful');
      console.log('Current posts count:', result.posts.length);
      return true;
    } catch (error) {
      console.error('❌ Firebase connection failed:', error);
      return false;
    }
  }
}

/**
 * Quick setup function for development
 */
export const setupCommunityDemo = async (userId) => {
  try {
    console.log('🚀 Setting up community demo...');
    
    // Test connection
    const connected = await CommunityDevUtils.testConnection();
    if (!connected) {
      throw new Error('Firebase connection failed');
    }

    // Create sample posts
    const posts = await CommunityDevUtils.createSamplePosts(userId);
    
    // Create comments for the first post if it exists
    if (posts.length > 0) {
      await CommunityDevUtils.createSampleComments(posts[0].id, userId);
    }

    console.log('✅ Community demo setup complete!');
    console.log(`Created ${posts.length} sample posts`);
    
    return { success: true, postsCreated: posts.length };
  } catch (error) {
    console.error('❌ Failed to setup community demo:', error);
    return { success: false, error: error.message };
  }
};

// Export for global access in development
if (typeof window !== 'undefined') {
  window.CommunityDevUtils = CommunityDevUtils;
  window.setupCommunityDemo = setupCommunityDemo;
}
