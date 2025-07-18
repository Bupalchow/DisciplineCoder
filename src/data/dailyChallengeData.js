/**
 * Daily Challenge Data
 * @module dailyChallengeData
 * @description Smart daily coding challenges with adaptive difficulty and streak tracking
 */

export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
};

export const CHALLENGE_CATEGORIES = {
  ARRAYS: 'arrays',
  STRINGS: 'strings',
  DYNAMIC_PROGRAMMING: 'dynamic-programming',
  TREES: 'trees',
  GRAPHS: 'graphs',
  BACKTRACKING: 'backtracking',
  BINARY_SEARCH: 'binary-search',
  LINKED_LISTS: 'linked-lists',
  STACK_QUEUE: 'stack-queue',
  HASH_MAPS: 'hash-maps'
};

export const DAILY_CHALLENGES_POOL = {
  [DIFFICULTY_LEVELS.BEGINNER]: [
    {
      id: 'two-sum',
      title: 'Two Sum',
      leetcodeId: 1,
      url: 'https://leetcode.com/problems/two-sum/',
      category: CHALLENGE_CATEGORIES.ARRAYS,
      difficulty: 'Easy',
      estimatedTime: '15-20 min',
      concepts: ['Hash Maps', 'Array Traversal'],
      description: 'Find two numbers that add up to a target sum.',
      hints: [
        'Think about what you need to find for each number',
        'Can you use a hash map to store what you\'ve seen?',
        'What\'s the complement of each number?'
      ]
    },
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      leetcodeId: 20,
      url: 'https://leetcode.com/problems/valid-parentheses/',
      category: CHALLENGE_CATEGORIES.STACK_QUEUE,
      difficulty: 'Easy',
      estimatedTime: '15-20 min',
      concepts: ['Stack', 'String Processing'],
      description: 'Determine if parentheses are properly closed and nested.',
      hints: [
        'What data structure is good for tracking opening brackets?',
        'When you see a closing bracket, what should you check?',
        'What happens if the stack is empty when you see a closing bracket?'
      ]
    },
    {
      id: 'palindrome-number',
      title: 'Palindrome Number',
      leetcodeId: 9,
      url: 'https://leetcode.com/problems/palindrome-number/',
      category: CHALLENGE_CATEGORIES.STRINGS,
      difficulty: 'Easy',
      estimatedTime: '10-15 min',
      concepts: ['Number Manipulation', 'Two Pointers'],
      description: 'Check if an integer is a palindrome without converting to string.',
      hints: [
        'Can you reverse the number and compare?',
        'How do you extract digits from a number?',
        'Be careful with negative numbers and trailing zeros'
      ]
    }
  ],
  [DIFFICULTY_LEVELS.INTERMEDIATE]: [
    {
      id: 'longest-substring',
      title: 'Longest Substring Without Repeating Characters',
      leetcodeId: 3,
      url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
      category: CHALLENGE_CATEGORIES.STRINGS,
      difficulty: 'Medium',
      estimatedTime: '25-30 min',
      concepts: ['Sliding Window', 'Hash Set'],
      description: 'Find the length of the longest substring without repeating characters.',
      hints: [
        'Use a sliding window approach',
        'Keep track of characters you\'ve seen',
        'When do you need to shrink the window?'
      ]
    },
    {
      id: 'add-two-numbers',
      title: 'Add Two Numbers',
      leetcodeId: 2,
      url: 'https://leetcode.com/problems/add-two-numbers/',
      category: CHALLENGE_CATEGORIES.LINKED_LISTS,
      difficulty: 'Medium',
      estimatedTime: '20-25 min',
      concepts: ['Linked Lists', 'Math', 'Carry Handling'],
      description: 'Add two numbers represented as linked lists.',
      hints: [
        'Handle the carry between digits',
        'What if the linked lists have different lengths?',
        'Don\'t forget the final carry'
      ]
    },
    {
      id: 'container-with-most-water',
      title: 'Container With Most Water',
      leetcodeId: 11,
      url: 'https://leetcode.com/problems/container-with-most-water/',
      category: CHALLENGE_CATEGORIES.ARRAYS,
      difficulty: 'Medium',
      estimatedTime: '20-25 min',
      concepts: ['Two Pointers', 'Greedy'],
      description: 'Find two lines that form a container holding the most water.',
      hints: [
        'Use two pointers from both ends',
        'Which pointer should you move and why?',
        'The area is limited by the shorter line'
      ]
    }
  ],
  [DIFFICULTY_LEVELS.ADVANCED]: [
    {
      id: 'median-two-sorted-arrays',
      title: 'Median of Two Sorted Arrays',
      leetcodeId: 4,
      url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
      category: CHALLENGE_CATEGORIES.BINARY_SEARCH,
      difficulty: 'Hard',
      estimatedTime: '35-45 min',
      concepts: ['Binary Search', 'Divide and Conquer'],
      description: 'Find the median of two sorted arrays in O(log(m+n)) time.',
      hints: [
        'Think about partitioning both arrays',
        'Use binary search on the smaller array',
        'Ensure left partition ≤ right partition'
      ]
    },
    {
      id: 'trapping-rain-water',
      title: 'Trapping Rain Water',
      leetcodeId: 42,
      url: 'https://leetcode.com/problems/trapping-rain-water/',
      category: CHALLENGE_CATEGORIES.ARRAYS,
      difficulty: 'Hard',
      estimatedTime: '30-40 min',
      concepts: ['Two Pointers', 'Dynamic Programming'],
      description: 'Calculate how much rainwater can be trapped.',
      hints: [
        'Water level at each position depends on surrounding heights',
        'Use two pointers or precompute max heights',
        'Water trapped = min(left_max, right_max) - current_height'
      ]
    },
    {
      id: 'serialize-deserialize-binary-tree',
      title: 'Serialize and Deserialize Binary Tree',
      leetcodeId: 297,
      url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
      category: CHALLENGE_CATEGORIES.TREES,
      difficulty: 'Hard',
      estimatedTime: '40-50 min',
      concepts: ['Tree Traversal', 'String Processing', 'Recursion'],
      description: 'Design an algorithm to serialize and deserialize a binary tree.',
      hints: [
        'Choose a traversal method (preorder works well)',
        'Handle null nodes in your serialization',
        'Use a delimiter to separate values'
      ]
    }
  ]
};

export const STREAK_MILESTONES = [
  { days: 7, title: 'Week Warrior', emoji: '🔥', reward: 'Bronze Badge' },
  { days: 30, title: 'Monthly Master', emoji: '💪', reward: 'Silver Badge' },
  { days: 100, title: 'Century Coder', emoji: '🏆', reward: 'Gold Badge' },
  { days: 365, title: 'Year-long Achiever', emoji: '👑', reward: 'Diamond Badge' }
];

export default {
  DIFFICULTY_LEVELS,
  CHALLENGE_CATEGORIES,
  DAILY_CHALLENGES_POOL,
  STREAK_MILESTONES
};
