/**
 * Dynamic Programming Roadmap Data
 * @module dynamicProgrammingRoadmap
 * @description Curated roadmap for mastering Dynamic Programming in DSA, including key concepts and LeetCode questions.
 */

export const DYNAMIC_PROGRAMMING_ROADMAP = {
  id: 'dynamic-programming',
  title: 'Dynamic Programming',
  description: 'Master the optimization technique of dynamic programming to solve complex problems efficiently.',
  estimatedTime: '4-6 weeks',
  totalQuestions: 28,
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction to Dynamic Programming',
      concepts: [
        'What is Dynamic Programming?',
        'Overlapping Subproblems',
        'Optimal Substructure',
        'Memoization vs Tabulation',
        'Top-down vs Bottom-up'
      ],
      questions: [
        {
          id: 509,
          title: 'Fibonacci Number',
          url: 'https://leetcode.com/problems/fibonacci-number/',
          difficulty: 'Easy'
        },
        {
          id: 70,
          title: 'Climbing Stairs',
          url: 'https://leetcode.com/problems/climbing-stairs/',
          difficulty: 'Easy'
        },
        {
          id: 746,
          title: 'Min Cost Climbing Stairs',
          url: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
          difficulty: 'Easy'
        }
      ]
    },
    {
      id: 'one-dimensional-dp',
      title: '2. One Dimensional DP',
      concepts: [
        'Linear DP Problems',
        'House Robber Pattern',
        'Jump Game Pattern',
        'Decode Ways Pattern',
        'Palindrome Problems'
      ],
      questions: [
        {
          id: 198,
          title: 'House Robber',
          url: 'https://leetcode.com/problems/house-robber/',
          difficulty: 'Medium'
        },
        {
          id: 213,
          title: 'House Robber II',
          url: 'https://leetcode.com/problems/house-robber-ii/',
          difficulty: 'Medium'
        },
        {
          id: 91,
          title: 'Decode Ways',
          url: 'https://leetcode.com/problems/decode-ways/',
          difficulty: 'Medium'
        },
        {
          id: 55,
          title: 'Jump Game',
          url: 'https://leetcode.com/problems/jump-game/',
          difficulty: 'Medium'
        },
        {
          id: 45,
          title: 'Jump Game II',
          url: 'https://leetcode.com/problems/jump-game-ii/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'two-dimensional-dp',
      title: '3. Two Dimensional DP',
      concepts: [
        'Grid DP Problems',
        'Unique Paths Pattern',
        'Minimum Path Sum',
        'Edit Distance',
        'Longest Common Subsequence'
      ],
      questions: [
        {
          id: 62,
          title: 'Unique Paths',
          url: 'https://leetcode.com/problems/unique-paths/',
          difficulty: 'Medium'
        },
        {
          id: 63,
          title: 'Unique Paths II',
          url: 'https://leetcode.com/problems/unique-paths-ii/',
          difficulty: 'Medium'
        },
        {
          id: 64,
          title: 'Minimum Path Sum',
          url: 'https://leetcode.com/problems/minimum-path-sum/',
          difficulty: 'Medium'
        },
        {
          id: 1143,
          title: 'Longest Common Subsequence',
          url: 'https://leetcode.com/problems/longest-common-subsequence/',
          difficulty: 'Medium'
        },
        {
          id: 72,
          title: 'Edit Distance',
          url: 'https://leetcode.com/problems/edit-distance/',
          difficulty: 'Hard'
        }
      ]
    },
    {
      id: 'knapsack-patterns',
      title: '4. Knapsack Patterns',
      concepts: [
        '0/1 Knapsack',
        'Unbounded Knapsack',
        'Subset Sum Problem',
        'Partition Equal Subset Sum',
        'Target Sum Problems'
      ],
      questions: [
        {
          id: 416,
          title: 'Partition Equal Subset Sum',
          url: 'https://leetcode.com/problems/partition-equal-subset-sum/',
          difficulty: 'Medium'
        },
        {
          id: 494,
          title: 'Target Sum',
          url: 'https://leetcode.com/problems/target-sum/',
          difficulty: 'Medium'
        },
        {
          id: 322,
          title: 'Coin Change',
          url: 'https://leetcode.com/problems/coin-change/',
          difficulty: 'Medium'
        },
        {
          id: 518,
          title: 'Coin Change 2',
          url: 'https://leetcode.com/problems/coin-change-2/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'subsequence-patterns',
      title: '5. Subsequence Patterns',
      concepts: [
        'Longest Increasing Subsequence',
        'Longest Palindromic Subsequence',
        'Palindromic Substrings',
        'Distinct Subsequences',
        'Interleaving String'
      ],
      questions: [
        {
          id: 300,
          title: 'Longest Increasing Subsequence',
          url: 'https://leetcode.com/problems/longest-increasing-subsequence/',
          difficulty: 'Medium'
        },
        {
          id: 516,
          title: 'Longest Palindromic Subsequence',
          url: 'https://leetcode.com/problems/longest-palindromic-subsequence/',
          difficulty: 'Medium'
        },
        {
          id: 647,
          title: 'Palindromic Substrings',
          url: 'https://leetcode.com/problems/palindromic-substrings/',
          difficulty: 'Medium'
        },
        {
          id: 115,
          title: 'Distinct Subsequences',
          url: 'https://leetcode.com/problems/distinct-subsequences/',
          difficulty: 'Hard'
        }
      ]
    },
    {
      id: 'advanced-dp',
      title: '6. Advanced DP Patterns',
      concepts: [
        'State Machine DP',
        'Interval DP',
        'Tree DP',
        'Bitmask DP',
        'Digit DP'
      ],
      questions: [
        {
          id: 121,
          title: 'Best Time to Buy and Sell Stock',
          url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
          difficulty: 'Easy'
        },
        {
          id: 122,
          title: 'Best Time to Buy and Sell Stock II',
          url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/',
          difficulty: 'Medium'
        },
        {
          id: 123,
          title: 'Best Time to Buy and Sell Stock III',
          url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
          difficulty: 'Hard'
        },
        {
          id: 312,
          title: 'Burst Balloons',
          url: 'https://leetcode.com/problems/burst-balloons/',
          difficulty: 'Hard'
        },
        {
          id: 1531,
          title: 'String Compression II',
          url: 'https://leetcode.com/problems/string-compression-ii/',
          difficulty: 'Hard'
        }
      ]
    }
  ]
};

export default DYNAMIC_PROGRAMMING_ROADMAP;
