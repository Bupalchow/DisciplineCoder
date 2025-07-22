/**
 * Firebase Community Integration Test
 * @description Basic integration test to verify Firebase community features
 */

import { postService, commentService, votingService, bookmarkService } from '../services/firebaseCommunity';

/**
 * Integration test suite for Firebase Community
 */
export class CommunityIntegrationTest {
  constructor(userId) {
    this.userId = userId;
    this.testResults = [];
  }

  /**
   * Log test result
   */
  log(testName, success, message = '') {
    const result = { testName, success, message, timestamp: new Date() };
    this.testResults.push(result);
    console.log(`${success ? '✅' : '❌'} ${testName}: ${message}`);
    return result;
  }

  /**
   * Test Firebase connection
   */
  async testConnection() {
    try {
      const result = await postService.getPosts({ limitCount: 1 });
      return this.log('Firebase Connection', true, `Connected successfully. Found ${result.posts.length} posts.`);
    } catch (error) {
      return this.log('Firebase Connection', false, error.message);
    }
  }

  /**
   * Test post creation
   */
  async testPostCreation() {
    try {
      const testPost = {
        title: "Test Post - " + Date.now(),
        content: "This is a test post created by the integration test.",
        category: "discussion",
        topic: "testing",
        difficulty: "beginner",
        tags: ["test"],
        author: {
          username: "test_user",
          reputation: 100,
          avatar: "https://ui-avatars.com/api/?name=TU&background=3b82f6&color=fff"
        }
      };

      const postId = await postService.createPost(testPost, this.userId);
      this.testPostId = postId; // Store for other tests
      return this.log('Post Creation', true, `Created post with ID: ${postId}`);
    } catch (error) {
      return this.log('Post Creation', false, error.message);
    }
  }

  /**
   * Test voting system
   */
  async testVoting() {
    if (!this.testPostId) {
      return this.log('Voting Test', false, 'No test post available');
    }

    try {
      // Test upvote
      await votingService.voteOnPost(this.testPostId, this.userId, 'upvote');
      
      // Verify vote was recorded
      const votes = await votingService.getUserVotes(this.userId, [this.testPostId]);
      const userVote = votes[this.testPostId];
      
      if (userVote === 'upvote') {
        return this.log('Voting Test', true, 'Upvote recorded successfully');
      } else {
        return this.log('Voting Test', false, 'Vote not recorded correctly');
      }
    } catch (error) {
      return this.log('Voting Test', false, error.message);
    }
  }

  /**
   * Test bookmarking
   */
  async testBookmarking() {
    if (!this.testPostId) {
      return this.log('Bookmark Test', false, 'No test post available');
    }

    try {
      // Test bookmark
      await bookmarkService.toggleBookmark(this.userId, this.testPostId);
      
      // Verify bookmark was recorded
      const bookmarks = await bookmarkService.checkBookmarks(this.userId, [this.testPostId]);
      const isBookmarked = bookmarks[this.testPostId];
      
      if (isBookmarked) {
        return this.log('Bookmark Test', true, 'Bookmark recorded successfully');
      } else {
        return this.log('Bookmark Test', false, 'Bookmark not recorded correctly');
      }
    } catch (error) {
      return this.log('Bookmark Test', false, error.message);
    }
  }

  /**
   * Test comment creation
   */
  async testCommentCreation() {
    if (!this.testPostId) {
      return this.log('Comment Test', false, 'No test post available');
    }

    try {
      const testComment = {
        postId: this.testPostId,
        content: "This is a test comment.",
        author: {
          username: "test_commenter",
          reputation: 50,
          avatar: "https://ui-avatars.com/api/?name=TC&background=10b981&color=fff"
        }
      };

      const commentId = await commentService.createComment(testComment, this.userId);
      this.testCommentId = commentId; // Store for cleanup
      return this.log('Comment Test', true, `Created comment with ID: ${commentId}`);
    } catch (error) {
      return this.log('Comment Test', false, error.message);
    }
  }

  /**
   * Test filtering and sorting
   */
  async testFiltering() {
    try {
      // Test basic filter
      const filtered = await postService.getPosts({
        category: 'discussion',
        limitCount: 5
      });

      // Test sorting
      const sorted = await postService.getPosts({
        sortBy: 'new',
        limitCount: 5
      });

      const success = filtered.posts !== undefined && sorted.posts !== undefined;
      return this.log('Filtering Test', success, 
        `Filtered: ${filtered.posts.length} posts, Sorted: ${sorted.posts.length} posts`);
    } catch (error) {
      return this.log('Filtering Test', false, error.message);
    }
  }

  /**
   * Cleanup test data
   */
  async cleanup() {
    const cleanupResults = [];

    // Clean up test post
    if (this.testPostId) {
      try {
        await postService.deletePost(this.testPostId, this.userId);
        cleanupResults.push(this.log('Cleanup - Post', true, 'Test post deleted'));
      } catch (error) {
        cleanupResults.push(this.log('Cleanup - Post', false, error.message));
      }
    }

    // Clean up test comment (if post deletion didn't cascade)
    if (this.testCommentId) {
      try {
        await commentService.deleteComment(this.testCommentId, this.userId);
        cleanupResults.push(this.log('Cleanup - Comment', true, 'Test comment deleted'));
      } catch (error) {
        cleanupResults.push(this.log('Cleanup - Comment', false, error.message));
      }
    }

    return cleanupResults;
  }

  /**
   * Run all tests
   */
  async runAllTests() {
    console.log('🧪 Starting Firebase Community Integration Tests...');
    
    const tests = [
      () => this.testConnection(),
      () => this.testPostCreation(),
      () => this.testVoting(),
      () => this.testBookmarking(),
      () => this.testCommentCreation(),
      () => this.testFiltering()
    ];

    // Run tests sequentially
    for (const test of tests) {
      await test();
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Cleanup
    await this.cleanup();

    // Summary
    const successful = this.testResults.filter(r => r.success).length;
    const total = this.testResults.length;
    
    console.log(`\n📊 Test Summary: ${successful}/${total} tests passed`);
    
    if (successful === total) {
      console.log('🎉 All tests passed! Firebase Community integration is working correctly.');
    } else {
      console.log('⚠️ Some tests failed. Check the results above for details.');
    }

    return {
      success: successful === total,
      results: this.testResults,
      summary: { successful, total, passed: successful === total }
    };
  }
}

/**
 * Quick test runner for console use
 */
export const runCommunityTests = async (userId) => {
  if (!userId) {
    console.error('❌ User ID required to run tests');
    return { success: false, error: 'User ID required' };
  }

  const tester = new CommunityIntegrationTest(userId);
  return await tester.runAllTests();
};

// Export for global access in development
if (typeof window !== 'undefined') {
  window.runCommunityTests = runCommunityTests;
  window.CommunityIntegrationTest = CommunityIntegrationTest;
}
