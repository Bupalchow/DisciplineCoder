/**
 * DSA Roadmap Data - Trees Topic
 * Comprehensive learning path for Tree algorithms and patterns
 */

export const TREES_ROADMAP = {
  id: 'trees',
  title: 'Trees - Zero to Hero',
  description: 'Master tree data structures and algorithms essential for coding interviews',
  estimatedTime: '4-5 weeks',
  totalQuestions: 42,
  
  sections: [
    {
      id: 'tree-basics',
      title: '1. Tree Fundamentals',
      description: 'Learn basic tree concepts and binary tree operations',
      difficulty: 'Beginner',
      estimatedTime: '4-5 days',
      concepts: [
        'Tree terminology (root, leaf, height, depth)',
        'Binary tree properties',
        'Tree traversal (preorder, inorder, postorder)',
        'Level-order traversal'
      ],
      questions: [
        {
          id: 'binary-tree-inorder-traversal',
          title: 'Binary Tree Inorder Traversal',
          leetcodeId: 94,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
          pattern: 'Tree Traversal',
          concepts: ['Inorder traversal', 'Recursion', 'Stack'],
          hint: 'Use recursion or stack to traverse left subtree, process node, then right subtree',
          solution: 'Recursive: traverse left, visit node, traverse right. Iterative: use stack',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h) where h is height'
        },
        {
          id: 'binary-tree-preorder-traversal',
          title: 'Binary Tree Preorder Traversal',
          leetcodeId: 144,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
          pattern: 'Tree Traversal',
          concepts: ['Preorder traversal', 'Recursion', 'Stack'],
          hint: 'Process node first, then traverse left and right subtrees',
          solution: 'Recursive: visit node, traverse left, traverse right',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'binary-tree-postorder-traversal',
          title: 'Binary Tree Postorder Traversal',
          leetcodeId: 145,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
          pattern: 'Tree Traversal',
          concepts: ['Postorder traversal', 'Recursion', 'Stack'],
          hint: 'Traverse left and right subtrees first, then process node',
          solution: 'Recursive: traverse left, traverse right, visit node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'binary-tree-level-order-traversal',
          title: 'Binary Tree Level Order Traversal',
          leetcodeId: 102,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
          pattern: 'Level-Order BFS',
          concepts: ['Level-order traversal', 'Queue', 'BFS'],
          hint: 'Use queue to process nodes level by level',
          solution: 'BFS with queue, track level size for grouping',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(w) where w is max width'
        },
        {
          id: 'maximum-depth-of-binary-tree',
          title: 'Maximum Depth of Binary Tree',
          leetcodeId: 104,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
          pattern: 'Tree Height',
          concepts: ['Tree depth', 'Recursion', 'DFS'],
          hint: 'Recursively find maximum depth of left and right subtrees',
          solution: 'max(depth(left), depth(right)) + 1',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'same-tree',
          title: 'Same Tree',
          leetcodeId: 100,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/same-tree/',
          pattern: 'Tree Comparison',
          concepts: ['Tree comparison', 'Recursion'],
          hint: 'Recursively compare nodes and their subtrees',
          solution: 'Check if current nodes are equal and subtrees are same',
          timeComplexity: 'O(min(m,n))',
          spaceComplexity: 'O(min(m,n))'
        }
      ]
    },
    {
      id: 'tree-properties',
      title: '2. Tree Properties & Validation',
      description: 'Learn to validate tree properties and handle edge cases',
      difficulty: 'Medium',
      estimatedTime: '5-6 days',
      concepts: [
        'Binary Search Tree properties',
        'Tree validation',
        'Balanced tree concepts',
        'Tree symmetry and structure'
      ],
      questions: [
        {
          id: 'validate-binary-search-tree',
          title: 'Validate Binary Search Tree',
          leetcodeId: 98,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/validate-binary-search-tree/',
          pattern: 'BST Validation',
          concepts: ['BST properties', 'Tree validation', 'Bounds checking'],
          hint: 'Use bounds (min, max) to validate each node recursively',
          solution: 'Pass min/max bounds down recursively, check node value within bounds',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'symmetric-tree',
          title: 'Symmetric Tree',
          leetcodeId: 101,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/symmetric-tree/',
          pattern: 'Tree Symmetry',
          concepts: ['Tree symmetry', 'Mirror comparison'],
          hint: 'Compare left subtree with right subtree in mirror fashion',
          solution: 'Recursively check if left.left == right.right and left.right == right.left',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'balanced-binary-tree',
          title: 'Balanced Binary Tree',
          leetcodeId: 110,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/balanced-binary-tree/',
          pattern: 'Tree Balance',
          concepts: ['Balanced tree', 'Height calculation'],
          hint: 'Check if height difference between subtrees is at most 1',
          solution: 'Calculate height and check balance condition for each node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'minimum-depth-of-binary-tree',
          title: 'Minimum Depth of Binary Tree',
          leetcodeId: 111,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/',
          pattern: 'Tree Depth',
          concepts: ['Minimum depth', 'Leaf nodes'],
          hint: 'Find shortest path from root to any leaf node',
          solution: 'BFS for optimal or DFS with min tracking',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'path-sum',
          title: 'Path Sum',
          leetcodeId: 112,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/path-sum/',
          pattern: 'Root-to-Leaf Path',
          concepts: ['Path sum', 'Root-to-leaf paths'],
          hint: 'Track remaining sum as you traverse down the tree',
          solution: 'DFS with remaining sum, check at leaf nodes',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        }
      ]
    },
    {
      id: 'tree-construction',
      title: '3. Tree Construction & Modification',
      description: 'Learn to construct and modify trees from various inputs',
      difficulty: 'Medium',
      estimatedTime: '6-7 days',
      concepts: [
        'Tree construction from traversals',
        'Tree modification patterns',
        'Tree serialization/deserialization',
        'Tree cloning and copying'
      ],
      questions: [
        {
          id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
          title: 'Construct Binary Tree from Preorder and Inorder Traversal',
          leetcodeId: 105,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
          pattern: 'Tree Construction',
          concepts: ['Tree construction', 'Preorder/inorder relationship'],
          hint: 'Use preorder for root, inorder to split left/right subtrees',
          solution: 'Recursively build tree using preorder root and inorder partitioning',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'construct-binary-tree-from-inorder-and-postorder-traversal',
          title: 'Construct Binary Tree from Inorder and Postorder Traversal',
          leetcodeId: 106,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/',
          pattern: 'Tree Construction',
          concepts: ['Tree construction', 'Inorder/postorder relationship'],
          hint: 'Use postorder for root (from end), inorder to split subtrees',
          solution: 'Similar to preorder approach but process postorder from right to left',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'flatten-binary-tree-to-linked-list',
          title: 'Flatten Binary Tree to Linked List',
          leetcodeId: 114,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
          pattern: 'Tree Modification',
          concepts: ['Tree flattening', 'In-place modification'],
          hint: 'Flatten right subtree, then left subtree, connect them',
          solution: 'Post-order traversal to flatten subtrees then connect',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'invert-binary-tree',
          title: 'Invert Binary Tree',
          leetcodeId: 226,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/invert-binary-tree/',
          pattern: 'Tree Modification',
          concepts: ['Tree inversion', 'Subtree swapping'],
          hint: 'Recursively swap left and right subtrees',
          solution: 'Swap left and right children, then recursively invert subtrees',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'serialize-and-deserialize-binary-tree',
          title: 'Serialize and Deserialize Binary Tree',
          leetcodeId: 297,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
          pattern: 'Tree Serialization',
          concepts: ['Tree serialization', 'String encoding/decoding'],
          hint: 'Use preorder traversal for serialization, reconstruct with queue',
          solution: 'Preorder for serialize, queue-based reconstruction for deserialize',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'binary-search-trees',
      title: '4. Binary Search Trees',
      description: 'Master BST operations and properties',
      difficulty: 'Medium',
      estimatedTime: '5-6 days',
      concepts: [
        'BST search, insert, delete operations',
        'BST traversal properties',
        'BST to other structure conversions',
        'BST optimization techniques'
      ],
      questions: [
        {
          id: 'search-in-a-binary-search-tree',
          title: 'Search in a Binary Search Tree',
          leetcodeId: 700,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
          pattern: 'BST Search',
          concepts: ['BST search', 'Binary search property'],
          hint: 'Use BST property to decide left or right subtree',
          solution: 'Compare with current node, go left if smaller, right if larger',
          timeComplexity: 'O(h)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'insert-into-a-binary-search-tree',
          title: 'Insert into a Binary Search Tree',
          leetcodeId: 701,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
          pattern: 'BST Insert',
          concepts: ['BST insertion', 'Tree modification'],
          hint: 'Find correct position using BST property, insert as leaf',
          solution: 'Recursively find position, create new node at correct leaf position',
          timeComplexity: 'O(h)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'delete-node-in-a-bst',
          title: 'Delete Node in a BST',
          leetcodeId: 450,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/delete-node-in-a-bst/',
          pattern: 'BST Delete',
          concepts: ['BST deletion', 'Node replacement strategies'],
          hint: 'Handle 3 cases: leaf, one child, two children',
          solution: 'For two children: replace with inorder successor/predecessor',
          timeComplexity: 'O(h)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'kth-smallest-element-in-a-bst',
          title: 'Kth Smallest Element in a BST',
          leetcodeId: 230,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
          pattern: 'BST Kth Element',
          concepts: ['Inorder traversal', 'Kth element'],
          hint: 'Inorder traversal gives sorted order, count to find kth',
          solution: 'Inorder traversal with counter, stop at kth element',
          timeComplexity: 'O(h + k)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'convert-bst-to-greater-tree',
          title: 'Convert BST to Greater Tree',
          leetcodeId: 538,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/convert-bst-to-greater-tree/',
          pattern: 'BST Transformation',
          concepts: ['Reverse inorder', 'Running sum'],
          hint: 'Reverse inorder traversal (right, node, left) with running sum',
          solution: 'Traverse right subtree, update node, traverse left subtree',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        }
      ]
    },
    {
      id: 'tree-paths',
      title: '5. Tree Paths & Sums',
      description: 'Master path-based problems and tree sum calculations',
      difficulty: 'Medium',
      estimatedTime: '5-6 days',
      concepts: [
        'Root-to-leaf paths',
        'Path sum variations',
        'Tree diameter calculations',
        'Path with maximum sum'
      ],
      questions: [
        {
          id: 'path-sum-ii',
          title: 'Path Sum II',
          leetcodeId: 113,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/path-sum-ii/',
          pattern: 'Root-to-Leaf Paths',
          concepts: ['Path collection', 'Backtracking'],
          hint: 'DFS with path tracking, backtrack when returning',
          solution: 'DFS with current path, add to result at valid leaf',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'sum-root-to-leaf-numbers',
          title: 'Sum Root to Leaf Numbers',
          leetcodeId: 129,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/',
          pattern: 'Root-to-Leaf Sum',
          concepts: ['Number formation', 'Path sum'],
          hint: 'Build number while traversing, add to sum at leaf',
          solution: 'DFS with current number, multiply by 10 and add digit',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'binary-tree-maximum-path-sum',
          title: 'Binary Tree Maximum Path Sum',
          leetcodeId: 124,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
          pattern: 'Maximum Path Sum',
          concepts: ['Path sum optimization', 'Tree diameter'],
          hint: 'For each node, consider path through it vs path from it',
          solution: 'Return max path from node, update global max with path through node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'diameter-of-binary-tree',
          title: 'Diameter of Binary Tree',
          leetcodeId: 543,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
          pattern: 'Tree Diameter',
          concepts: ['Tree diameter', 'Path length'],
          hint: 'For each node, diameter = left_height + right_height',
          solution: 'Calculate height and update diameter for each node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'path-sum-iii',
          title: 'Path Sum III',
          leetcodeId: 437,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/path-sum-iii/',
          pattern: 'Path Sum Variations',
          concepts: ['Prefix sum', 'Path counting'],
          hint: 'Use prefix sum map to find paths with target sum',
          solution: 'DFS with prefix sum map, count paths ending at current node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'advanced-trees',
      title: '6. Advanced Tree Algorithms',
      description: 'Master complex tree algorithms and optimizations',
      difficulty: 'Hard',
      estimatedTime: '6-7 days',
      concepts: [
        'Lowest Common Ancestor (LCA)',
        'Tree isomorphism',
        'Morris traversal',
        'Tree DP and optimization'
      ],
      questions: [
        {
          id: 'lowest-common-ancestor-of-a-binary-tree',
          title: 'Lowest Common Ancestor of a Binary Tree',
          leetcodeId: 236,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
          pattern: 'LCA',
          concepts: ['Lowest common ancestor', 'Tree traversal'],
          hint: 'If both nodes found in different subtrees, current node is LCA',
          solution: 'Post-order traversal, return LCA when both subtrees contain targets',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'lowest-common-ancestor-of-a-binary-search-tree',
          title: 'Lowest Common Ancestor of a Binary Search Tree',
          leetcodeId: 235,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
          pattern: 'BST LCA',
          concepts: ['BST LCA', 'Binary search property'],
          hint: 'Use BST property: if both nodes on same side, go that direction',
          solution: 'Compare node values with current, go left/right or return current',
          timeComplexity: 'O(h)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'binary-tree-right-side-view',
          title: 'Binary Tree Right Side View',
          leetcodeId: 199,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/binary-tree-right-side-view/',
          pattern: 'Level-Order Traversal',
          concepts: ['Right side view', 'Level processing'],
          hint: 'Level-order traversal, capture rightmost node of each level',
          solution: 'BFS with level tracking, record last node of each level',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(w)'
        },
        {
          id: 'house-robber-iii',
          title: 'House Robber III',
          leetcodeId: 337,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/house-robber-iii/',
          pattern: 'Tree DP',
          concepts: ['Dynamic programming on trees', 'Optimization'],
          hint: 'For each node, calculate max if robbed vs not robbed',
          solution: 'Return pair (rob_current, not_rob_current) for each node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'binary-tree-cameras',
          title: 'Binary Tree Cameras',
          leetcodeId: 968,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/binary-tree-cameras/',
          pattern: 'Tree DP',
          concepts: ['Greedy on trees', 'State management'],
          hint: 'Use 3 states: has camera, monitored, not monitored',
          solution: 'Post-order traversal with state tracking and greedy placement',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)'
        },
        {
          id: 'vertical-order-traversal-of-a-binary-tree',
          title: 'Vertical Order Traversal of a Binary Tree',
          leetcodeId: 987,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
          pattern: 'Tree Coordinate System',
          concepts: ['Coordinate mapping', 'Sorting'],
          hint: 'Assign (x, y) coordinates to each node, group by x',
          solution: 'DFS with coordinate tracking, sort by x, then y, then value',
          timeComplexity: 'O(n log n)',
          spaceComplexity: 'O(n)'
        }
      ]
    }
  ]
};

export default TREES_ROADMAP;
