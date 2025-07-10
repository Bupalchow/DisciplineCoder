/**
 * DSA Roadmap Data - HashMaps & Sets Topic
 * Comprehensive learning path for HashMap and Set algorithms and patterns
 */

export const HASHMAPS_SETS_ROADMAP = {
  id: 'hashmaps-sets',
  title: 'HashMaps & Sets - Zero to Hero',
  description: 'Master hash-based data structures and patterns essential for coding interviews',
  estimatedTime: '3-4 weeks',
  totalQuestions: 48,
  
  sections: [
    {
      id: 'hashmap-basics',
      title: '1. HashMap & Set Fundamentals',
      description: 'Learn basic operations and understanding of hash-based data structures',
      difficulty: 'Beginner',
      estimatedTime: '3-4 days',
      concepts: [
        'HashMap operations (get, put, remove)',
        'Set operations (add, contains, remove)',
        'Hash function basics',
        'Time complexity understanding'
      ],
      questions: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          leetcodeId: 1,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/two-sum/',
          pattern: 'HashMap Lookup',
          concepts: ['Complement lookup', 'HashMap storage'],
          hint: 'Store each number and its index, look for complement (target - current)',
          solution: 'Use HashMap to store number->index, check if complement exists',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'contains-duplicate',
          title: 'Contains Duplicate',
          leetcodeId: 217,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/contains-duplicate/',
          pattern: 'Set for Uniqueness',
          concepts: ['Duplicate detection', 'Set operations'],
          hint: 'Use Set to track seen elements, return true if element already exists',
          solution: 'Iterate array, add to set, return true if already present',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'valid-anagram',
          title: 'Valid Anagram',
          leetcodeId: 242,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-anagram/',
          pattern: 'Character Frequency',
          concepts: ['Character counting', 'HashMap for frequency'],
          hint: 'Count character frequencies in both strings using HashMap',
          solution: 'Count chars in first string, decrement for second, check all zero',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'ransom-note',
          title: 'Ransom Note',
          leetcodeId: 383,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/ransom-note/',
          pattern: 'Character Frequency',
          concepts: ['Character availability', 'HashMap counting'],
          hint: 'Count characters in magazine, check if ransom note can be formed',
          solution: 'Count magazine chars, decrement for ransom note chars',
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'frequency-counting',
      title: '2. Frequency Counting Patterns',
      description: 'Master frequency counting techniques using HashMaps',
      difficulty: 'Beginner to Intermediate',
      estimatedTime: '3-4 days',
      concepts: [
        'Element frequency counting',
        'Most/least frequent elements',
        'Frequency-based operations',
        'Counter data structure usage'
      ],
      questions: [
        {
          id: 'majority-element',
          title: 'Majority Element',
          leetcodeId: 169,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/majority-element/',
          pattern: 'Frequency Counting',
          concepts: ['Majority element detection', 'Frequency tracking'],
          hint: 'Count frequencies, find element appearing more than n/2 times',
          solution: 'Use HashMap to count, return element with count > n/2',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'first-unique-character',
          title: 'First Unique Character in a String',
          leetcodeId: 387,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
          pattern: 'Frequency Counting',
          concepts: ['Character frequency', 'First unique element'],
          hint: 'Count character frequencies, find first character with count 1',
          solution: 'Two passes: count frequencies, find first with count 1',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'top-k-frequent-elements',
          title: 'Top K Frequent Elements',
          leetcodeId: 347,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/top-k-frequent-elements/',
          pattern: 'Frequency + Heap',
          concepts: ['Top K elements', 'Frequency counting', 'Heap usage'],
          hint: 'Count frequencies, use min-heap of size k to find top k elements',
          solution: 'Count frequencies, use heap to get top k frequent elements',
          timeComplexity: 'O(n log k)',
          spaceComplexity: 'O(n + k)'
        },
        {
          id: 'sort-characters-by-frequency',
          title: 'Sort Characters By Frequency',
          leetcodeId: 451,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/sort-characters-by-frequency/',
          pattern: 'Frequency Sorting',
          concepts: ['Custom sorting', 'Frequency-based ordering'],
          hint: 'Count character frequencies, sort by frequency descending',
          solution: 'Count frequencies, sort chars by frequency, build result',
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'find-all-anagrams',
          title: 'Find All Anagrams in a String',
          leetcodeId: 438,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
          pattern: 'Sliding Window + Frequency',
          concepts: ['Sliding window', 'Character frequency matching'],
          hint: 'Use sliding window with character frequency map comparison',
          solution: 'Sliding window of pattern length, compare frequency maps',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'set-operations',
      title: '3. Set Operations & Intersections',
      description: 'Learn set operations, intersections, and unique element handling',
      difficulty: 'Intermediate',
      estimatedTime: '3-4 days',
      concepts: [
        'Set intersections and unions',
        'Unique element operations',
        'Set-based algorithms',
        'Multiple set interactions'
      ],
      questions: [
        {
          id: 'intersection-of-two-arrays',
          title: 'Intersection of Two Arrays',
          leetcodeId: 349,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/intersection-of-two-arrays/',
          pattern: 'Set Intersection',
          concepts: ['Set intersection', 'Unique elements'],
          hint: 'Convert arrays to sets, find intersection of the two sets',
          solution: 'Convert to sets, return intersection as array',
          timeComplexity: 'O(n + m)',
          spaceComplexity: 'O(min(n, m))'
        },
        {
          id: 'intersection-of-two-arrays-ii',
          title: 'Intersection of Two Arrays II',
          leetcodeId: 350,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
          pattern: 'Frequency-based Intersection',
          concepts: ['Frequency intersection', 'Element counting'],
          hint: 'Count frequencies in one array, decrement while checking other',
          solution: 'Count frequencies in nums1, iterate nums2 and collect common',
          timeComplexity: 'O(n + m)',
          spaceComplexity: 'O(min(n, m))'
        },
        {
          id: 'happy-number',
          title: 'Happy Number',
          leetcodeId: 202,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/happy-number/',
          pattern: 'Cycle Detection with Set',
          concepts: ['Cycle detection', 'Set for seen states'],
          hint: 'Use set to detect if we\'ve seen a sum before (cycle detection)',
          solution: 'Track seen sums in set, detect cycle or reach 1',
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(log n)'
        },
        {
          id: 'longest-consecutive-sequence',
          title: 'Longest Consecutive Sequence',
          leetcodeId: 128,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/longest-consecutive-sequence/',
          pattern: 'Set for O(1) Lookup',
          concepts: ['Consecutive sequences', 'Set optimization'],
          hint: 'Use set for O(1) lookup, only start counting from sequence beginnings',
          solution: 'Put all in set, for each number check if it starts a sequence',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'contains-duplicate-ii',
          title: 'Contains Duplicate II',
          leetcodeId: 219,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/contains-duplicate-ii/',
          pattern: 'HashMap with Index Tracking',
          concepts: ['Index distance', 'HashMap for position tracking'],
          hint: 'Store number -> latest index, check distance when duplicate found',
          solution: 'HashMap of number->index, check if current distance <= k',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(n, k))'
        }
      ]
    },
    {
      id: 'grouping-patterns',
      title: '4. Grouping & Classification Patterns',
      description: 'Master grouping elements using HashMap keys',
      difficulty: 'Intermediate',
      estimatedTime: '4-5 days',
      concepts: [
        'Grouping by properties',
        'Custom key generation',
        'Classification algorithms',
        'HashMap as grouping tool'
      ],
      questions: [
        {
          id: 'group-anagrams',
          title: 'Group Anagrams',
          leetcodeId: 49,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/group-anagrams/',
          pattern: 'Grouping by Sorted Key',
          concepts: ['Anagram grouping', 'Sorted string as key'],
          hint: 'Use sorted string as key to group anagrams together',
          solution: 'Sort each string as key, group strings with same sorted key',
          timeComplexity: 'O(n * m log m)',
          spaceComplexity: 'O(n * m)'
        },
        {
          id: 'isomorphic-strings',
          title: 'Isomorphic Strings',
          leetcodeId: 205,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/isomorphic-strings/',
          pattern: 'Bidirectional Mapping',
          concepts: ['Character mapping', 'Bijection verification'],
          hint: 'Maintain two maps: s->t and t->s, ensure consistent mapping',
          solution: 'Two HashMaps for bidirectional mapping validation',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'word-pattern',
          title: 'Word Pattern',
          leetcodeId: 290,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/word-pattern/',
          pattern: 'Pattern Matching',
          concepts: ['Pattern mapping', 'Bijective mapping'],
          hint: 'Map each character to word and vice versa, ensure consistency',
          solution: 'Two maps: char->word and word->char, check bijection',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'grouping-the-strings',
          title: 'Groups of Special-Equivalent Strings',
          leetcodeId: 893,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/groups-of-special-equivalent-strings/',
          pattern: 'Custom Grouping Key',
          concepts: ['Custom equivalence', 'Grouping by properties'],
          hint: 'Create key by sorting even and odd positioned characters separately',
          solution: 'Group by (sorted_even_chars, sorted_odd_chars) as key',
          timeComplexity: 'O(n * m log m)',
          spaceComplexity: 'O(n * m)'
        },
        {
          id: 'number-of-distinct-islands',
          title: 'Number of Distinct Islands',
          leetcodeId: 694,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/number-of-distinct-islands/',
          pattern: 'Shape Normalization',
          concepts: ['Shape representation', 'Set for uniqueness'],
          hint: 'Normalize island shapes by recording relative positions from starting point',
          solution: 'DFS to get island shape, normalize coordinates, use set for uniqueness',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        }
      ]
    },
    {
      id: 'subarray-patterns',
      title: '5. Subarray & Substring Patterns',
      description: 'HashMap-based subarray and substring problem solving',
      difficulty: 'Intermediate to Advanced',
      estimatedTime: '4-5 days',
      concepts: [
        'Prefix sum with HashMap',
        'Subarray sum problems',
        'Sliding window with HashMap',
        'Cumulative frequency'
      ],
      questions: [
        {
          id: 'subarray-sum-equals-k',
          title: 'Subarray Sum Equals K',
          leetcodeId: 560,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/subarray-sum-equals-k/',
          pattern: 'Prefix Sum + HashMap',
          concepts: ['Prefix sum', 'Subarray sum counting'],
          hint: 'Use prefix sum and HashMap to count subarrays with sum k',
          solution: 'Track prefix sums, count how many times (prefixSum - k) seen',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'continuous-subarray-sum',
          title: 'Continuous Subarray Sum',
          leetcodeId: 523,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/continuous-subarray-sum/',
          pattern: 'Modular Arithmetic + HashMap',
          concepts: ['Modular arithmetic', 'Remainder tracking'],
          hint: 'Track remainder of prefix sum, if same remainder seen before at distance > 1',
          solution: 'HashMap of remainder->index, check if subarray length >= 2',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(n, k))'
        },
        {
          id: 'longest-substring-without-repeating',
          title: 'Longest Substring Without Repeating Characters',
          leetcodeId: 3,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
          pattern: 'Sliding Window + HashMap',
          concepts: ['Sliding window', 'Character position tracking'],
          hint: 'Use sliding window with HashMap to track character positions',
          solution: 'Sliding window: expand right, contract left when duplicate found',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(min(m, n))'
        },
        {
          id: 'minimum-window-substring',
          title: 'Minimum Window Substring',
          leetcodeId: 76,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/minimum-window-substring/',
          pattern: 'Sliding Window + Character Counting',
          concepts: ['Variable sliding window', 'Character requirement tracking'],
          hint: 'Expand window until all characters covered, then contract to minimize',
          solution: 'Two pointers with character count maps for requirement tracking',
          timeComplexity: 'O(|s| + |t|)',
          spaceComplexity: 'O(|s| + |t|)'
        }
      ]
    },
    {
      id: 'advanced-hashmap-techniques',
      title: '6. Advanced HashMap Techniques',
      description: 'Complex HashMap applications and optimization techniques',
      difficulty: 'Advanced',
      estimatedTime: '5-6 days',
      concepts: [
        'LRU Cache implementation',
        'Design patterns with HashMap',
        'Time-based data structures',
        'Advanced data structure design'
      ],
      questions: [
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          leetcodeId: 146,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/lru-cache/',
          pattern: 'HashMap + Doubly Linked List',
          concepts: ['LRU implementation', 'HashMap for O(1) access'],
          hint: 'Combine HashMap with doubly linked list for O(1) operations',
          solution: 'HashMap for key->node, doubly linked list for LRU ordering',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(capacity)'
        },
        {
          id: 'time-based-key-value-store',
          title: 'Time Based Key-Value Store',
          leetcodeId: 981,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/time-based-key-value-store/',
          pattern: 'HashMap + Binary Search',
          concepts: ['Time-based storage', 'Binary search on timestamps'],
          hint: 'HashMap of key -> list of (timestamp, value), binary search for get',
          solution: 'HashMap + sorted list per key, binary search for timestamp',
          timeComplexity: 'O(log n) for get',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'design-hashmap',
          title: 'Design HashMap',
          leetcodeId: 706,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/design-hashmap/',
          pattern: 'Hash Function Design',
          concepts: ['Hash function', 'Collision handling'],
          hint: 'Use array with chaining or open addressing for collision resolution',
          solution: 'Array of buckets with linked lists for collision handling',
          timeComplexity: 'O(1) average',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'design-hashset',
          title: 'Design HashSet',
          leetcodeId: 705,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/design-hashset/',
          pattern: 'Hash Function Design',
          concepts: ['Hash function', 'Set implementation'],
          hint: 'Similar to HashMap but only store keys, not key-value pairs',
          solution: 'Array of buckets with boolean flags or linked lists',
          timeComplexity: 'O(1) average',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'insert-delete-getrandom-o1',
          title: 'Insert Delete GetRandom O(1)',
          leetcodeId: 380,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/',
          pattern: 'HashMap + Dynamic Array',
          concepts: ['Random access', 'O(1) operations'],
          hint: 'Combine HashMap (value->index) with dynamic array for random access',
          solution: 'HashMap for O(1) lookup, array for O(1) random access',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'all-oone-data-structure',
          title: 'All O`one Data Structure',
          leetcodeId: 432,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/all-oone-data-structure/',
          pattern: 'Complex Data Structure Design',
          concepts: ['Multiple data structures', 'Count-based ordering'],
          hint: 'HashMap + doubly linked list of count buckets',
          solution: 'HashMap for key->count, linked list of count buckets',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(n)'
        }
      ]
    }
  ]
};

/**
 * Question status constants
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
