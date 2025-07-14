/**
 * DSA Roadmap Data - Linked Lists Topic
 * Comprehensive learning path for Linked List algorithms and patterns
 */

export const LINKED_LISTS_ROADMAP = {
  id: 'linked-lists',
  title: 'Linked Lists - Zero to Hero',
  description: 'Master linked list data structure and patterns essential for coding interviews',
  estimatedTime: '3-4 weeks',
  totalQuestions: 35,
  
  sections: [
    {
      id: 'linked-list-basics',
      title: '1. Linked List Fundamentals',
      description: 'Learn basic linked list operations and node manipulation',
      difficulty: 'Beginner',
      estimatedTime: '3-4 days',
      concepts: [
        'Node structure and pointers',
        'Traversal and insertion',
        'Deletion operations',
        'Singly vs doubly linked lists'
      ],
      questions: [
        {
          id: 'reverse-linked-list',
          title: 'Reverse Linked List',
          leetcodeId: 206,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-linked-list/',
          pattern: 'Pointer Manipulation',
          concepts: ['Pointer reversal', 'Iterative approach'],
          hint: 'Use three pointers: prev, current, next to reverse links',
          solution: 'Iterate through list, reverse each link using temp variables',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'middle-of-the-linked-list',
          title: 'Middle of the Linked List',
          leetcodeId: 876,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/middle-of-the-linked-list/',
          pattern: 'Two Pointers',
          concepts: ['Slow-fast pointers', 'Finding middle'],
          hint: 'Use slow and fast pointers, when fast reaches end, slow is at middle',
          solution: 'Two pointers: slow moves 1 step, fast moves 2 steps',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'delete-node-in-a-linked-list',
          title: 'Delete Node in a Linked List',
          leetcodeId: 237,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/delete-node-in-a-linked-list/',
          pattern: 'Node Manipulation',
          concepts: ['Value copying', 'Node deletion'],
          hint: 'Copy next nodes value to current, then delete next node',
          solution: 'Replace current nodes value with next, skip next node',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'linked-list-cycle',
          title: 'Linked List Cycle',
          leetcodeId: 141,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/linked-list-cycle/',
          pattern: 'Floyd\'s Cycle Detection',
          concepts: ['Cycle detection', 'Two pointers'],
          hint: 'Use slow and fast pointers, if they meet there is a cycle',
          solution: 'Floyds tortoise and hare algorithm',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'two-pointer-techniques',
      title: '2. Two Pointer Techniques',
      description: 'Master two-pointer patterns for linked list problems',
      difficulty: 'Medium',
      estimatedTime: '4-5 days',
      concepts: [
        'Slow and fast pointers',
        'Finding nth node from end',
        'Palindrome detection',
        'Intersection finding'
      ],
      questions: [
        {
          id: 'remove-nth-node-from-end-of-list',
          title: 'Remove Nth Node From End of List',
          leetcodeId: 19,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
          pattern: 'Two Pointers',
          concepts: ['Nth from end', 'Gap maintenance'],
          hint: 'Use two pointers with n+1 gap between them',
          solution: 'Fast pointer moves n steps ahead, then both move together',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'palindrome-linked-list',
          title: 'Palindrome Linked List',
          leetcodeId: 234,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/palindrome-linked-list/',
          pattern: 'Two Pointers + Reversal',
          concepts: ['Palindrome check', 'List reversal'],
          hint: 'Find middle, reverse second half, compare with first half',
          solution: 'Split list at middle, reverse second half, compare',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'linked-list-cycle-ii',
          title: 'Linked List Cycle II',
          leetcodeId: 142,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/linked-list-cycle-ii/',
          pattern: 'Floyd\'s Cycle Detection',
          concepts: ['Cycle start detection', 'Mathematical approach'],
          hint: 'After detecting cycle, reset one pointer to head and move both one step',
          solution: 'Use Floyds algorithm, then find cycle start',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'intersection-of-two-linked-lists',
          title: 'Intersection of Two Linked Lists',
          leetcodeId: 160,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
          pattern: 'Two Pointers',
          concepts: ['List intersection', 'Length equalization'],
          hint: 'Use two pointers, when one reaches end, start from other list',
          solution: 'Switch pointers to other list when reaching end',
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'list-manipulation',
      title: '3. List Manipulation & Merging',
      description: 'Learn advanced list manipulation and merging techniques',
      difficulty: 'Medium',
      estimatedTime: '5-6 days',
      concepts: [
        'List merging algorithms',
        'Sorting linked lists',
        'Node swapping',
        'List partitioning'
      ],
      questions: [
        {
          id: 'merge-two-sorted-lists',
          title: 'Merge Two Sorted Lists',
          leetcodeId: 21,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
          pattern: 'Two Pointers',
          concepts: ['List merging', 'Sorted order'],
          hint: 'Use dummy node, compare values and link smaller node',
          solution: 'Iterative merge with dummy head',
          timeComplexity: 'O(m + n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'sort-list',
          title: 'Sort List',
          leetcodeId: 148,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/sort-list/',
          pattern: 'Merge Sort',
          concepts: ['Linked list sorting', 'Divide and conquer'],
          hint: 'Use merge sort: split list in half, sort recursively, merge',
          solution: 'Bottom-up merge sort with O(1) space',
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'swap-nodes-in-pairs',
          title: 'Swap Nodes in Pairs',
          leetcodeId: 24,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
          pattern: 'Node Manipulation',
          concepts: ['Node swapping', 'Pointer management'],
          hint: 'Use dummy node, swap adjacent pairs iteratively',
          solution: 'Careful pointer manipulation to swap adjacent nodes',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'partition-list',
          title: 'Partition List',
          leetcodeId: 86,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/partition-list/',
          pattern: 'List Partitioning',
          concepts: ['List splitting', 'Value-based partitioning'],
          hint: 'Create two separate lists for smaller and larger values',
          solution: 'Two lists: one for < x, one for >= x, then connect',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'remove-duplicates-from-sorted-list',
          title: 'Remove Duplicates from Sorted List',
          leetcodeId: 83,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/',
          pattern: 'Duplicate Removal',
          concepts: ['Duplicate detection', 'Node removal'],
          hint: 'Compare adjacent nodes, skip duplicates',
          solution: 'Single pass comparison and node skipping',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'advanced-manipulation',
      title: '4. Advanced List Operations',
      description: 'Master complex linked list manipulation patterns',
      difficulty: 'Hard',
      estimatedTime: '6-7 days',
      concepts: [
        'K-group reversals',
        'Advanced node rotations',
        'Complex duplicate removal',
        'Multi-list operations'
      ],
      questions: [
        {
          id: 'reverse-nodes-in-k-group',
          title: 'Reverse Nodes in k-Group',
          leetcodeId: 25,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          pattern: 'K-Group Reversal',
          concepts: ['Group reversal', 'Recursive approach'],
          hint: 'Reverse k nodes at a time, connect with previous group',
          solution: 'Iterative k-group reversal with careful pointer management',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'rotate-list',
          title: 'Rotate List',
          leetcodeId: 61,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/rotate-list/',
          pattern: 'List Rotation',
          concepts: ['Circular list', 'Rotation optimization'],
          hint: 'Make list circular, find new head position, break circle',
          solution: 'Convert to circular, calculate break point, split',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'remove-duplicates-from-sorted-list-ii',
          title: 'Remove Duplicates from Sorted List II',
          leetcodeId: 82,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/',
          pattern: 'Duplicate Removal',
          concepts: ['Complete duplicate removal', 'Dummy head'],
          hint: 'Use dummy head, skip all nodes with duplicate values',
          solution: 'Track previous node, skip entire duplicate sequences',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'add-two-numbers',
          title: 'Add Two Numbers',
          leetcodeId: 2,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/add-two-numbers/',
          pattern: 'Arithmetic Operations',
          concepts: ['Digit addition', 'Carry handling'],
          hint: 'Add digits with carry, create new list for result',
          solution: 'Simulate addition with carry propagation',
          timeComplexity: 'O(max(m, n))',
          spaceComplexity: 'O(max(m, n))'
        },
        {
          id: 'add-two-numbers-ii',
          title: 'Add Two Numbers II',
          leetcodeId: 445,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/add-two-numbers-ii/',
          pattern: 'Reverse + Arithmetic',
          concepts: ['Reverse addition', 'Stack simulation'],
          hint: 'Reverse both lists, add, then reverse result',
          solution: 'Use stacks or reverse lists for right-to-left addition',
          timeComplexity: 'O(max(m, n))',
          spaceComplexity: 'O(max(m, n))'
        }
      ]
    },
    {
      id: 'complex-structures',
      title: '5. Complex Data Structures',
      description: 'Design and implement complex linked list based structures',
      difficulty: 'Hard',
      estimatedTime: '5-6 days',
      concepts: [
        'LRU Cache implementation',
        'Skip list concepts',
        'Multi-level list flattening',
        'Random pointer handling'
      ],
      questions: [
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          leetcodeId: 146,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/lru-cache/',
          pattern: 'Hash + Doubly Linked List',
          concepts: ['Cache design', 'O(1) operations'],
          hint: 'Use hashmap + doubly linked list for O(1) operations',
          solution: 'HashMap for lookup, DLL for order maintenance',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(capacity)'
        },
        {
          id: 'copy-list-with-random-pointer',
          title: 'Copy List with Random Pointer',
          leetcodeId: 138,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
          pattern: 'Deep Copy',
          concepts: ['Node cloning', 'Random pointer handling'],
          hint: 'Create cloned nodes interleaved, then separate lists',
          solution: 'Three-pass algorithm: clone, set random, separate',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'flatten-a-multilevel-doubly-linked-list',
          title: 'Flatten a Multilevel Doubly Linked List',
          leetcodeId: 430,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
          pattern: 'DFS Flattening',
          concepts: ['Multi-level traversal', 'Stack usage'],
          hint: 'Use stack to track child branches, flatten depth-first',
          solution: 'DFS with stack to handle child pointers',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(d) where d is depth'
        },
        {
          id: 'insert-into-a-sorted-circular-linked-list',
          title: 'Insert into a Sorted Circular Linked List',
          leetcodeId: 708,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/',
          pattern: 'Circular List',
          concepts: ['Circular insertion', 'Edge case handling'],
          hint: 'Find insertion point in circular sorted list',
          solution: 'Handle cases: between nodes, at min/max, single node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'advanced-algorithms',
      title: '6. Advanced Algorithms & Patterns',
      description: 'Master the most challenging linked list algorithms',
      difficulty: 'Hard',
      estimatedTime: '4-5 days',
      concepts: [
        'Advanced merging techniques',
        'Optimization patterns',
        'Mathematical approaches',
        'Multi-list coordination'
      ],
      questions: [
        {
          id: 'merge-k-sorted-lists',
          title: 'Merge k Sorted Lists',
          leetcodeId: 23,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          pattern: 'Divide and Conquer',
          concepts: ['Multi-list merging', 'Priority queue'],
          hint: 'Use divide and conquer: merge pairs of lists recursively',
          solution: 'Divide and conquer merge or min-heap approach',
          timeComplexity: 'O(n log k)',
          spaceComplexity: 'O(log k)'
        },
        {
          id: 'reverse-linked-list-ii',
          title: 'Reverse Linked List II',
          leetcodeId: 92,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/reverse-linked-list-ii/',
          pattern: 'Partial Reversal',
          concepts: ['Range reversal', 'Boundary handling'],
          hint: 'Find start position, reverse m to n nodes, reconnect',
          solution: 'One-pass reversal with careful boundary management',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'reorder-list',
          title: 'Reorder List',
          leetcodeId: 143,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/reorder-list/',
          pattern: 'List Restructuring',
          concepts: ['List splitting', 'Interleaving'],
          hint: 'Find middle, reverse second half, merge alternately',
          solution: 'Split, reverse, merge in three phases',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'odd-even-linked-list',
          title: 'Odd Even Linked List',
          leetcodeId: 328,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/odd-even-linked-list/',
          pattern: 'List Partitioning',
          concepts: ['Position-based grouping', 'List reconstruction'],
          hint: 'Separate odd and even positioned nodes, then connect',
          solution: 'Two pointers to build odd and even lists separately',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'split-linked-list-in-parts',
          title: 'Split Linked List in Parts',
          leetcodeId: 725,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/split-linked-list-in-parts/',
          pattern: 'List Splitting',
          concepts: ['Equal partitioning', 'Remainder distribution'],
          hint: 'Calculate part sizes, distribute remainder among first parts',
          solution: 'Calculate sizes, split list maintaining order',
          timeComplexity: 'O(n + k)',
          spaceComplexity: 'O(k)'
        }
      ]
    }
  ]
};

export default LINKED_LISTS_ROADMAP;
