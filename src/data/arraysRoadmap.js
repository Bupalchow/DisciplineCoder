/**
 * DSA Roadmap Data - Arrays Topic
 * Comprehensive learning path from Zero to Hero
 */

export const ARRAYS_ROADMAP = {
  id: 'arrays',
  title: 'Arrays - Zero to Hero',
  description: 'Master array algorithms and patterns essential for coding interviews',
  estimatedTime: '2-3 weeks',
  totalQuestions: 45,
  
  sections: [
    {
      id: 'array-basics',
      title: '1. Array Basics & Fundamentals',
      description: 'Learn basic array operations and simple traversals',
      difficulty: 'Beginner',
      estimatedTime: '2-3 days',
      concepts: [
        'Array traversal',
        'Basic operations (insert, delete, search)',
        'Time complexity analysis',
        'Space complexity basics'
      ],
      questions: [
        {
          id: 'build-array-from-permutation',
          title: 'Build Array from Permutation',
          leetcodeId: 1920,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/build-array-from-permutation/',
          pattern: 'Basic Traversal',
          concepts: ['Array indexing', 'Basic iteration'],
          hint: 'Use the array elements as indices to build the new array',
          solution: 'For each index i, result[i] = nums[nums[i]]',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'concatenation-of-array',
          title: 'Concatenation of Array',
          leetcodeId: 1929,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/concatenation-of-array/',
          pattern: 'Basic Traversal',
          concepts: ['Array manipulation', 'Basic operations'],
          hint: 'Create array of double size and copy elements twice',
          solution: 'ans[i] = nums[i] and ans[i + n] = nums[i]',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'running-sum-1d-array',
          title: 'Running Sum of 1d Array',
          leetcodeId: 1480,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/running-sum-of-1d-array/',
          pattern: 'Prefix Sum',
          concepts: ['Cumulative sum', 'In-place modification'],
          hint: 'Each element becomes sum of all previous elements including itself',
          solution: 'nums[i] = nums[i] + nums[i-1] for i > 0',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'richest-customer-wealth',
          title: 'Richest Customer Wealth',
          leetcodeId: 1672,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/richest-customer-wealth/',
          pattern: '2D Array Traversal',
          concepts: ['2D arrays', 'Row sum calculation'],
          hint: 'Calculate sum of each row and find maximum',
          solution: 'Iterate through each row, calculate sum, track maximum',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    
    {
      id: 'searching-sorting',
      title: '2. Searching & Sorting Basics',
      description: 'Master fundamental searching and sorting techniques',
      difficulty: 'Beginner',
      estimatedTime: '3-4 days',
      concepts: [
        'Linear search',
        'Binary search basics',
        'Simple sorting algorithms',
        'Searching in sorted arrays'
      ],
      questions: [
        {
          id: 'binary-search',
          title: 'Binary Search',
          leetcodeId: 704,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/binary-search/',
          pattern: 'Binary Search',
          concepts: ['Binary search', 'Divide and conquer'],
          hint: 'Compare target with middle element, eliminate half of array',
          solution: 'Standard binary search with left and right pointers',
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'search-insert-position',
          title: 'Search Insert Position',
          leetcodeId: 35,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/search-insert-position/',
          pattern: 'Binary Search',
          concepts: ['Binary search', 'Insert position'],
          hint: 'Use binary search, return left pointer when not found',
          solution: 'Binary search variant that returns insertion position',
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'first-bad-version',
          title: 'First Bad Version',
          leetcodeId: 278,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/first-bad-version/',
          pattern: 'Binary Search',
          concepts: ['Binary search', 'API calls optimization'],
          hint: 'Find first true in boolean array using binary search',
          solution: 'Binary search to find first bad version',
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'squares-sorted-array',
          title: 'Squares of a Sorted Array',
          leetcodeId: 977,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/squares-of-a-sorted-array/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'Sorting', 'Negative numbers'],
          hint: 'Use two pointers from both ends, largest square is at ends',
          solution: 'Two pointers approach, fill result array from right to left',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },

    {
      id: 'two-pointers',
      title: '3. Two Pointers Technique',
      description: 'Learn the powerful two pointers pattern for array problems',
      difficulty: 'Beginner-Intermediate',
      estimatedTime: '4-5 days',
      concepts: [
        'Two pointers from ends',
        'Fast and slow pointers',
        'Meeting in the middle',
        'Palindrome checking'
      ],
      questions: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          leetcodeId: 1,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/two-sum/',
          pattern: 'Hash Map',
          concepts: ['Hash map', 'Complement search'],
          hint: 'Store numbers in hash map, look for complement',
          solution: 'Use hash map to store value->index mapping',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'two-sum-ii',
          title: 'Two Sum II - Input Array Is Sorted',
          leetcodeId: 167,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'Sorted array properties'],
          hint: 'Use two pointers from start and end, move based on sum',
          solution: 'Two pointers: move left if sum < target, right if sum > target',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'reverse-string',
          title: 'Reverse String',
          leetcodeId: 344,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-string/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'In-place reversal'],
          hint: 'Use two pointers from both ends, swap characters',
          solution: 'Two pointers approach with character swapping',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'valid-palindrome',
          title: 'Valid Palindrome',
          leetcodeId: 125,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-palindrome/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'String preprocessing', 'Palindrome'],
          hint: 'Clean string first, then use two pointers to check palindrome',
          solution: 'Two pointers from ends, skip non-alphanumeric characters',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'container-most-water',
          title: 'Container With Most Water',
          leetcodeId: 11,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/container-with-most-water/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'Greedy approach', 'Area calculation'],
          hint: 'Move the pointer with smaller height to potentially find larger area',
          solution: 'Two pointers: always move the pointer with smaller height',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },

    {
      id: 'sliding-window',
      title: '4. Sliding Window Technique',
      description: 'Master sliding window pattern for subarray problems',
      difficulty: 'Intermediate',
      estimatedTime: '5-6 days',
      concepts: [
        'Fixed size sliding window',
        'Variable size sliding window',
        'Maximum/minimum in window',
        'Subarray problems'
      ],
      questions: [
        {
          id: 'best-time-buy-sell-stock',
          title: 'Best Time to Buy and Sell Stock',
          leetcodeId: 121,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
          pattern: 'Sliding Window / Dynamic Programming',
          concepts: ['Single pass', 'Track minimum', 'Maximum profit'],
          hint: 'Track minimum price so far and maximum profit',
          solution: 'Keep track of minimum price and update maximum profit',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'maximum-subarray',
          title: 'Maximum Subarray',
          leetcodeId: 53,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/maximum-subarray/',
          pattern: 'Kadane\'s Algorithm',
          concepts: ['Kadane\'s algorithm', 'Dynamic programming', 'Subarray sum'],
          hint: 'Reset current sum to 0 when it becomes negative',
          solution: 'Kadane\'s algorithm: track current and maximum sum',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'maximum-average-subarray',
          title: 'Maximum Average Subarray I',
          leetcodeId: 643,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/maximum-average-subarray-i/',
          pattern: 'Sliding Window',
          concepts: ['Fixed window sliding', 'Average calculation'],
          hint: 'Use sliding window of size k, track maximum sum',
          solution: 'Sliding window: calculate initial sum, then slide and update',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'longest-subarray-1s-deleting-one',
          title: 'Longest Subarray of 1\'s After Deleting One Element',
          leetcodeId: 1493,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
          pattern: 'Sliding Window',
          concepts: ['Variable window', 'At most k zeros', 'Deletion simulation'],
          hint: 'Use sliding window allowing at most 1 zero',
          solution: 'Sliding window with at most 1 zero, subtract 1 from result',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },

    {
      id: 'prefix-suffix',
      title: '5. Prefix Sum & Suffix Techniques',
      description: 'Learn prefix and suffix sum patterns for range queries',
      difficulty: 'Intermediate',
      estimatedTime: '4-5 days',
      concepts: [
        'Prefix sum arrays',
        'Range sum queries',
        'Subarray sum problems',
        'Cumulative operations'
      ],
      questions: [
        {
          id: 'range-sum-query-immutable',
          title: 'Range Sum Query - Immutable',
          leetcodeId: 303,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/range-sum-query-immutable/',
          pattern: 'Prefix Sum',
          concepts: ['Prefix sum', 'Range queries', 'Preprocessing'],
          hint: 'Precompute prefix sums, use prefixSum[j+1] - prefixSum[i]',
          solution: 'Build prefix sum array, query in O(1) time',
          timeComplexity: 'O(1) query, O(n) preprocessing',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'subarray-sum-equals-k',
          title: 'Subarray Sum Equals K',
          leetcodeId: 560,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/subarray-sum-equals-k/',
          pattern: 'Prefix Sum + Hash Map',
          concepts: ['Prefix sum', 'Hash map', 'Cumulative sum'],
          hint: 'Use hash map to store prefix sums, look for (currentSum - k)',
          solution: 'Track prefix sums in hash map, count occurrences',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'product-array-except-self',
          title: 'Product of Array Except Self',
          leetcodeId: 238,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/product-of-array-except-self/',
          pattern: 'Prefix/Suffix Product',
          concepts: ['Prefix product', 'Suffix product', 'Space optimization'],
          hint: 'Calculate left products, then right products in second pass',
          solution: 'Two passes: left products then right products',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'find-pivot-index',
          title: 'Find Pivot Index',
          leetcodeId: 724,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/find-pivot-index/',
          pattern: 'Prefix Sum',
          concepts: ['Prefix sum', 'Balance point', 'Left-right equality'],
          hint: 'Check if left sum equals right sum at each index',
          solution: 'Calculate total sum, track left sum, check balance',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },

    {
      id: 'array-manipulation',
      title: '6. Advanced Array Manipulation',
      description: 'Master complex array operations and transformations',
      difficulty: 'Intermediate-Advanced',
      estimatedTime: '6-7 days',
      concepts: [
        'Array rotation',
        'Matrix operations',
        'In-place algorithms',
        'Cyclic replacements'
      ],
      questions: [
        {
          id: 'rotate-array',
          title: 'Rotate Array',
          leetcodeId: 189,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/rotate-array/',
          pattern: 'Array Rotation',
          concepts: ['Array rotation', 'Reversal algorithm', 'Cyclic replacement'],
          hint: 'Reverse entire array, then reverse first k and last n-k elements',
          solution: 'Three reversals: whole array, first k, last n-k',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'rotate-image',
          title: 'Rotate Image',
          leetcodeId: 48,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/rotate-image/',
          pattern: 'Matrix Manipulation',
          concepts: ['Matrix rotation', 'Transpose', 'Row reversal'],
          hint: 'Transpose matrix then reverse each row',
          solution: 'Transpose + reverse rows OR layer-by-layer rotation',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'spiral-matrix',
          title: 'Spiral Matrix',
          leetcodeId: 54,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/spiral-matrix/',
          pattern: 'Matrix Traversal',
          concepts: ['Matrix traversal', 'Boundary management', 'Direction control'],
          hint: 'Traverse right→down→left→up, shrink boundaries after each direction',
          solution: 'Track boundaries and direction, shrink after each complete side',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'set-matrix-zeroes',
          title: 'Set Matrix Zeroes',
          leetcodeId: 73,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/set-matrix-zeroes/',
          pattern: 'Matrix Manipulation',
          concepts: ['In-place modification', 'Space optimization', 'Flag usage'],
          hint: 'Use first row and column as flags to mark zeros',
          solution: 'Use matrix itself as storage for zero positions',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },

    {
      id: 'advanced-patterns',
      title: '7. Advanced Array Patterns',
      description: 'Master challenging patterns for competitive programming',
      difficulty: 'Advanced',
      estimatedTime: '7-8 days',
      concepts: [
        'Dutch National Flag',
        'Merge operations',
        'Advanced two pointers',
        'Cycle detection'
      ],
      questions: [
        {
          id: 'sort-colors',
          title: 'Sort Colors',
          leetcodeId: 75,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/sort-colors/',
          pattern: 'Dutch National Flag',
          concepts: ['Three-way partitioning', 'Dutch flag algorithm', 'In-place sorting'],
          hint: 'Use three pointers: low, mid, high for 0s, 1s, and 2s',
          solution: 'Dutch National Flag algorithm with three pointers',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'merge-sorted-array',
          title: 'Merge Sorted Array',
          leetcodeId: 88,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/merge-sorted-array/',
          pattern: 'Two Pointers',
          concepts: ['Merge technique', 'Backward iteration', 'In-place merge'],
          hint: 'Start from the end of arrays to avoid overwriting',
          solution: 'Three pointers starting from end, merge backwards',
          timeComplexity: 'O(m+n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'find-duplicate-number',
          title: 'Find the Duplicate Number',
          leetcodeId: 287,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/find-the-duplicate-number/',
          pattern: 'Floyd\'s Cycle Detection',
          concepts: ['Cycle detection', 'Linked list in array', 'Fast-slow pointers'],
          hint: 'Treat array as linked list, use Floyd\'s cycle detection',
          solution: 'Floyd\'s algorithm: find cycle, then find cycle start',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'first-missing-positive',
          title: 'First Missing Positive',
          leetcodeId: 41,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/first-missing-positive/',
          pattern: 'Array as Hash Set',
          concepts: ['Cyclic sort', 'Array indexing', 'Missing number'],
          hint: 'Place each number at its correct position (nums[i] = i+1)',
          solution: 'Cyclic sort to place numbers at correct positions',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'next-permutation',
          title: 'Next Permutation',
          leetcodeId: 31,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/next-permutation/',
          pattern: 'Next Permutation Algorithm',
          concepts: ['Permutation generation', 'Lexicographic order', 'Array manipulation'],
          hint: 'Find rightmost ascending pair, swap with next larger, reverse suffix',
          solution: 'Find pivot, find successor, swap, reverse suffix',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    }
  ]
};

/**
 * Question completion status tracking
 */
export const QUESTION_STATUS = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  REVIEWED: 'reviewed'
};

/**
 * Difficulty levels with colors
 */
export const DIFFICULTY_CONFIG = {
  Easy: {
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-200'
  },
  Medium: {
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-200'
  },
  Hard: {
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-200'
  }
};
