/**
 * Community Data and Types
 * @module communityData
 * @description Data structures and utilities for the community feature
 */

export const POST_CATEGORIES = {
  HELP: 'help',
  DISCUSSION: 'discussion',
  SOLUTION: 'solution',
  RESOURCE: 'resource',
  ACHIEVEMENT: 'achievement',
  INTERVIEW: 'interview'
};

export const POST_DIFFICULTIES = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
};

export const DSA_TOPICS = {
  ARRAYS: 'arrays',
  STRINGS: 'strings',
  LINKED_LISTS: 'linked-lists',
  TREES: 'trees',
  GRAPHS: 'graphs',
  DYNAMIC_PROGRAMMING: 'dynamic-programming',
  BACKTRACKING: 'backtracking',
  BINARY_SEARCH: 'binary-search',
  STACK_QUEUE: 'stack-queue',
  HASH_MAPS: 'hash-maps',
  SORTING: 'sorting',
  GREEDY: 'greedy',
  GENERAL: 'general'
};

export const SORT_OPTIONS = {
  HOT: 'hot',
  NEW: 'new',
  TOP: 'top',
  CONTROVERSIAL: 'controversial'
};

// Mock data for development
export const MOCK_POSTS = [
  {
    id: 'post-1',
    title: 'How to approach Two Pointer problems effectively?',
    content: 'I\'ve been struggling with two pointer problems lately. Can anyone share their approach or strategy for identifying when to use this technique? Any good practice problems to start with?',
    author: {
      id: 'user-1',
      username: 'coder_alice',
      avatar: null,
      reputation: 245
    },
    category: POST_CATEGORIES.HELP,
    topic: DSA_TOPICS.ARRAYS,
    difficulty: POST_DIFFICULTIES.BEGINNER,
    upvotes: 12,
    downvotes: 1,
    commentCount: 8,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    tags: ['two-pointers', 'arrays', 'beginner'],
    solved: false
  },
  {
    id: 'post-2',
    title: 'Optimized solution for LeetCode 42 - Trapping Rain Water',
    content: '```python\ndef trap(height):\n    if not height:\n        return 0\n    \n    left, right = 0, len(height) - 1\n    left_max = right_max = 0\n    water = 0\n    \n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max:\n                left_max = height[left]\n            else:\n                water += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max:\n                right_max = height[right]\n            else:\n                water += right_max - height[right]\n            right -= 1\n    \n    return water\n```\n\nThis uses O(1) space compared to the DP solution. Thought it might help others!',
    author: {
      id: 'user-2',
      username: 'algo_master',
      avatar: null,
      reputation: 892
    },
    category: POST_CATEGORIES.SOLUTION,
    topic: DSA_TOPICS.ARRAYS,
    difficulty: POST_DIFFICULTIES.ADVANCED,
    upvotes: 28,
    downvotes: 2,
    commentCount: 15,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    tags: ['leetcode', 'arrays', 'optimization', 'two-pointers'],
    solved: true,
    leetcodeId: 42
  },
  {
    id: 'post-3',
    title: 'Just solved my first Hard problem! 🎉',
    content: 'After 6 months of consistent practice, I finally solved my first Hard-level problem on LeetCode (Merge k Sorted Lists). The feeling is incredible! For anyone struggling, don\'t give up - consistency is key.',
    author: {
      id: 'user-3',
      username: 'persistent_dev',
      avatar: null,
      reputation: 156
    },
    category: POST_CATEGORIES.ACHIEVEMENT,
    topic: DSA_TOPICS.LINKED_LISTS,
    difficulty: POST_DIFFICULTIES.ADVANCED,
    upvotes: 45,
    downvotes: 0,
    commentCount: 22,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    tags: ['achievement', 'motivation', 'hard-problem'],
    solved: true,
    leetcodeId: 23
  },
  {
    id: 'post-4',
    title: 'Dynamic Programming patterns cheat sheet',
    content: 'I\'ve compiled a comprehensive cheat sheet of common DP patterns:\n\n**1. Linear DP**\n- House Robber pattern\n- Climbing Stairs pattern\n\n**2. Grid DP**\n- Unique Paths pattern\n- Minimum Path Sum pattern\n\n**3. Knapsack DP**\n- 0/1 Knapsack\n- Unbounded Knapsack\n\n**4. Subsequence DP**\n- LIS pattern\n- LCS pattern\n\nWould love to add more patterns if anyone has suggestions!',
    author: {
      id: 'user-4',
      username: 'dp_enthusiast',
      avatar: null,
      reputation: 634
    },
    category: POST_CATEGORIES.RESOURCE,
    topic: DSA_TOPICS.DYNAMIC_PROGRAMMING,
    difficulty: POST_DIFFICULTIES.INTERMEDIATE,
    upvotes: 67,
    downvotes: 3,
    commentCount: 31,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    tags: ['dynamic-programming', 'patterns', 'cheat-sheet', 'resource'],
    solved: false
  }
];

export const MOCK_COMMENTS = {
  'post-1': [
    {
      id: 'comment-1',
      postId: 'post-1',
      content: 'Great question! I usually look for these patterns:\n1. Array/string problems where you need to find pairs\n2. Problems asking for closest/farthest elements\n3. When you need to shrink/expand a window\n\nStart with "Container With Most Water" - it\'s a classic!',
      author: {
        id: 'user-5',
        username: 'helpful_coder',
        avatar: null,
        reputation: 423
      },
      upvotes: 8,
      downvotes: 0,
      createdAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
      parentId: null,
      replies: []
    },
    {
      id: 'comment-2',
      postId: 'post-1',
      content: 'Thanks! That\'s really helpful. I\'ll try that problem next.',
      author: {
        id: 'user-1',
        username: 'coder_alice',
        avatar: null,
        reputation: 245
      },
      upvotes: 2,
      downvotes: 0,
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      parentId: 'comment-1',
      replies: []
    }
  ]
};

export default {
  POST_CATEGORIES,
  POST_DIFFICULTIES,
  DSA_TOPICS,
  SORT_OPTIONS,
  MOCK_POSTS,
  MOCK_COMMENTS
};
