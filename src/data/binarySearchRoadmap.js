/**
 * Binary Search Roadmap Data
 * @module binarySearchRoadmap
 * @description Curated roadmap for mastering Binary Search in DSA, including key concepts and LeetCode questions.
 */

export const BINARY_SEARCH_ROADMAP = {
  id: 'binary-search',
  title: 'Binary Search',
  description: 'Master the divide-and-conquer search algorithm to efficiently find elements in sorted data.',
  estimatedTime: '2-3 weeks',
  totalQuestions: 22,
  sections: [
    {
      id: 'basic-binary-search',
      title: '1. Basic Binary Search',
      concepts: [
        'Binary Search Algorithm',
        'Search Space and Invariants',
        'Left and Right Boundaries',
        'Template and Implementation',
        'Time and Space Complexity'
      ],
      questions: [
        {
          id: 704,
          title: 'Binary Search',
          url: 'https://leetcode.com/problems/binary-search/',
          difficulty: 'Easy'
        },
        {
          id: 278,
          title: 'First Bad Version',
          url: 'https://leetcode.com/problems/first-bad-version/',
          difficulty: 'Easy'
        },
        {
          id: 35,
          title: 'Search Insert Position',
          url: 'https://leetcode.com/problems/search-insert-position/',
          difficulty: 'Easy'
        },
        {
          id: 69,
          title: 'Sqrt(x)',
          url: 'https://leetcode.com/problems/sqrtx/',
          difficulty: 'Easy'
        }
      ]
    },
    {
      id: 'search-range',
      title: '2. Search for Range',
      concepts: [
        'Finding First Occurrence',
        'Finding Last Occurrence',
        'Search Range Problems',
        'Duplicate Elements',
        'Lower and Upper Bounds'
      ],
      questions: [
        {
          id: 34,
          title: 'Find First and Last Position of Element in Sorted Array',
          url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
          difficulty: 'Medium'
        },
        {
          id: 374,
          title: 'Guess Number Higher or Lower',
          url: 'https://leetcode.com/problems/guess-number-higher-or-lower/',
          difficulty: 'Easy'
        },
        {
          id: 367,
          title: 'Valid Perfect Square',
          url: 'https://leetcode.com/problems/valid-perfect-square/',
          difficulty: 'Easy'
        }
      ]
    },
    {
      id: 'rotated-sorted-arrays',
      title: '3. Rotated Sorted Arrays',
      concepts: [
        'Rotation Point Finding',
        'Search in Rotated Array',
        'Handling Duplicates',
        'Minimum in Rotated Array',
        'Peak Element Finding'
      ],
      questions: [
        {
          id: 33,
          title: 'Search in Rotated Sorted Array',
          url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
          difficulty: 'Medium'
        },
        {
          id: 81,
          title: 'Search in Rotated Sorted Array II',
          url: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/',
          difficulty: 'Medium'
        },
        {
          id: 153,
          title: 'Find Minimum in Rotated Sorted Array',
          url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
          difficulty: 'Medium'
        },
        {
          id: 154,
          title: 'Find Minimum in Rotated Sorted Array II',
          url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/',
          difficulty: 'Hard'
        },
        {
          id: 162,
          title: 'Find Peak Element',
          url: 'https://leetcode.com/problems/find-peak-element/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'search-2d-arrays',
      title: '4. Search in 2D Arrays',
      concepts: [
        'Matrix Binary Search',
        'Search Sorted Matrix',
        'Row-wise and Column-wise Sorted',
        'Coordinate Transformation',
        '2D to 1D Mapping'
      ],
      questions: [
        {
          id: 74,
          title: 'Search a 2D Matrix',
          url: 'https://leetcode.com/problems/search-a-2d-matrix/',
          difficulty: 'Medium'
        },
        {
          id: 240,
          title: 'Search a 2D Matrix II',
          url: 'https://leetcode.com/problems/search-a-2d-matrix-ii/',
          difficulty: 'Medium'
        }
      ]
    },
    {
      id: 'advanced-applications',
      title: '5. Advanced Applications',
      concepts: [
        'Binary Search on Answer',
        'Capacity/Speed Problems',
        'Optimization Problems',
        'Custom Comparators',
        'Abstract Search Spaces'
      ],
      questions: [
        {
          id: 875,
          title: 'Koko Eating Bananas',
          url: 'https://leetcode.com/problems/koko-eating-bananas/',
          difficulty: 'Medium'
        },
        {
          id: 1011,
          title: 'Capacity To Ship Packages Within D Days',
          url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
          difficulty: 'Medium'
        },
        {
          id: 410,
          title: 'Split Array Largest Sum',
          url: 'https://leetcode.com/problems/split-array-largest-sum/',
          difficulty: 'Hard'
        },
        {
          id: 4,
          title: 'Median of Two Sorted Arrays',
          url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
          difficulty: 'Hard'
        },
        {
          id: 668,
          title: 'Kth Smallest Number in Multiplication Table',
          url: 'https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/',
          difficulty: 'Hard'
        }
      ]
    }
  ]
};

export default BINARY_SEARCH_ROADMAP;
