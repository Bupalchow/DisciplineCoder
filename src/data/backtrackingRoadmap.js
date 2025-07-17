/**
 * Backtracking Roadmap Data
 * @module backtrackingRoadmap
 * @description Curated roadmap for mastering Backtracking in DSA, including key concepts and LeetCode questions.
 */

export const BACKTRACKING_ROADMAP = {
  id: 'backtracking',
  title: 'Backtracking',
  description: 'Master the art of backtracking to solve complex combinatorial problems through systematic trial and error.',
  estimatedTime: '3-4 weeks',
  totalQuestions: 24,
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction to Backtracking',
      concepts: [
        'What is Backtracking?',
        'When to use Backtracking',
        'Backtracking vs Brute Force',
        'Basic Backtracking Template',
        'Decision Tree Representation'
      ],
      questions: [
        {
          id: 77,
          title: 'Combinations',
          url: 'https://leetcode.com/problems/combinations/',
          difficulty: 'Medium'
        },
        {
          id: 78,
          title: 'Subsets',
          url: 'https://leetcode.com/problems/subsets/',
          difficulty: 'Medium'
        },
        {
          id: 46,
          title: 'Permutations',
          url: 'https://leetcode.com/problems/permutations/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'array-backtracking',
      title: '2. Array Backtracking',
      concepts: [
        'Generating Combinations',
        'Generating Permutations',
        'Subset Generation',
        'Handling Duplicates',
        'Optimization Techniques'
      ],
      questions: [
        {
          id: 90,
          title: 'Subsets II',
          url: 'https://leetcode.com/problems/subsets-ii/',
          difficulty: 'Medium'
        },
        {
          id: 47,
          title: 'Permutations II',
          url: 'https://leetcode.com/problems/permutations-ii/',
          difficulty: 'Medium'
        },
        {
          id: 39,
          title: 'Combination Sum',
          url: 'https://leetcode.com/problems/combination-sum/',
          difficulty: 'Medium'
        },
        {
          id: 40,
          title: 'Combination Sum II',
          url: 'https://leetcode.com/problems/combination-sum-ii/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'string-backtracking',
      title: '3. String Backtracking',
      concepts: [
        'Letter Combinations',
        'Palindrome Partitioning',
        'Word Break Problems',
        'IP Address Restoration',
        'Pattern Matching'
      ],
      questions: [
        {
          id: 17,
          title: 'Letter Combinations of a Phone Number',
          url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
          difficulty: 'Medium'
        },
        {
          id: 131,
          title: 'Palindrome Partitioning',
          url: 'https://leetcode.com/problems/palindrome-partitioning/',
          difficulty: 'Medium'
        },
        {
          id: 93,
          title: 'Restore IP Addresses',
          url: 'https://leetcode.com/problems/restore-ip-addresses/',
          difficulty: 'Medium'
        },
        {
          id: 22,
          title: 'Generate Parentheses',
          url: 'https://leetcode.com/problems/generate-parentheses/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'grid-backtracking',
      title: '4. Grid and Board Problems',
      concepts: [
        'N-Queens Problem',
        'Sudoku Solver',
        'Word Search in Grid',
        'Path Finding with Constraints',
        'Knight\'s Tour Problem'
      ],
      questions: [
        {
          id: 79,
          title: 'Word Search',
          url: 'https://leetcode.com/problems/word-search/',
          difficulty: 'Medium'
        },
        {
          id: 51,
          title: 'N-Queens',
          url: 'https://leetcode.com/problems/n-queens/',
          difficulty: 'Hard'
        },
        {
          id: 37,
          title: 'Sudoku Solver',
          url: 'https://leetcode.com/problems/sudoku-solver/',
          difficulty: 'Hard'
        },
        {
          id: 212,
          title: 'Word Search II',
          url: 'https://leetcode.com/problems/word-search-ii/',
          difficulty: 'Hard'
        }
      ]
    },
    {
      id: 'advanced-backtracking',
      title: '5. Advanced Backtracking',
      concepts: [
        'Backtracking with Memoization',
        'Constraint Satisfaction Problems',
        'Branch and Bound',
        'Pruning Techniques',
        'Time Complexity Analysis'
      ],
      questions: [
        {
          id: 52,
          title: 'N-Queens II',
          url: 'https://leetcode.com/problems/n-queens-ii/',
          difficulty: 'Hard'
        },
        {
          id: 216,
          title: 'Combination Sum III',
          url: 'https://leetcode.com/problems/combination-sum-iii/',
          difficulty: 'Medium'
        },
        {
          id: 401,
          title: 'Binary Watch',
          url: 'https://leetcode.com/problems/binary-watch/',
          difficulty: 'Easy'
        },
        {
          id: 489,
          title: 'Robot Room Cleaner',
          url: 'https://leetcode.com/problems/robot-room-cleaner/',
          difficulty: 'Hard'
        }
      ]
    },
    {
      id: 'optimization',
      title: '6. Optimization & Best Practices',
      concepts: [
        'Early Termination',
        'Pruning Strategies',
        'Memory Optimization',
        'Iterative vs Recursive',
        'Common Pitfalls'
      ],
      questions: [
        {
          id: 526,
          title: 'Beautiful Arrangement',
          url: 'https://leetcode.com/problems/beautiful-arrangement/',
          difficulty: 'Medium'
        },
        {
          id: 691,
          title: 'Stickers to Spell Word',
          url: 'https://leetcode.com/problems/stickers-to-spell-word/',
          difficulty: 'Hard'
        },
        {
          id: 10,
          title: 'Regular Expression Matching',
          url: 'https://leetcode.com/problems/regular-expression-matching/',
          difficulty: 'Hard'
        }
      ]
    }
  ]
};

export default BACKTRACKING_ROADMAP;
