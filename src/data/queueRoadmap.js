/**
 * DSA Roadmap Data - Queue Topic
 * Comprehensive learning path for Queue algorithms and patterns
 */

export const QUEUE_ROADMAP = {
  id: 'queue',
  title: 'Queue - Zero to Hero',
  description: 'Master queue data structure and patterns essential for coding interviews',
  estimatedTime: '2-3 weeks',
  totalQuestions: 28,
  
  sections: [
    {
      id: 'queue-basics',
      title: '1. Queue Fundamentals',
      description: 'Learn basic queue operations and understanding of FIFO principle',
      difficulty: 'Beginner',
      estimatedTime: '2-3 days',
      concepts: [
        'Queue operations (enqueue, dequeue, front, isEmpty)',
        'FIFO (First In, First Out) principle',
        'Queue implementation using arrays/linked lists',
        'Circular queue concepts'
      ],
      questions: [
        {
          id: 'implement-queue-using-stacks',
          title: 'Implement Queue using Stacks',
          leetcodeId: 232,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/implement-queue-using-stacks/',
          pattern: 'Queue Implementation',
          concepts: ['Queue simulation', 'Stack operations'],
          hint: 'Use two stacks to simulate queue behavior',
          solution: 'Input stack for enqueue, output stack for dequeue',
          timeComplexity: 'O(1) amortized',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'implement-stack-using-queues',
          title: 'Implement Stack using Queues',
          leetcodeId: 225,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/implement-stack-using-queues/',
          pattern: 'Stack Implementation',
          concepts: ['Stack simulation', 'Queue operations'],
          hint: 'Use one or two queues to simulate stack behavior',
          solution: 'Use rotation technique with single queue or two queues',
          timeComplexity: 'O(n) for pop, O(1) for others',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'design-circular-queue',
          title: 'Design Circular Queue',
          leetcodeId: 622,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/design-circular-queue/',
          pattern: 'Circular Queue',
          concepts: ['Circular buffer', 'Queue design'],
          hint: 'Use array with head and tail pointers, handle wrap-around',
          solution: 'Array-based implementation with modular arithmetic',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(k)'
        },
        {
          id: 'number-of-recent-calls',
          title: 'Number of Recent Calls',
          leetcodeId: 933,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/number-of-recent-calls/',
          pattern: 'Sliding Window Queue',
          concepts: ['Time window', 'Queue operations'],
          hint: 'Use queue to maintain calls within time window',
          solution: 'Queue with removal of outdated calls',
          timeComplexity: 'O(1) amortized',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'bfs-traversal',
      title: '2. BFS & Level-Order Traversal',
      description: 'Master breadth-first search and level-order patterns using queues',
      difficulty: 'Medium',
      estimatedTime: '4-5 days',
      concepts: [
        'Breadth-First Search (BFS)',
        'Level-order traversal',
        'Queue in graph/tree algorithms',
        'Multi-source BFS'
      ],
      questions: [
        {
          id: 'binary-tree-level-order-traversal',
          title: 'Binary Tree Level Order Traversal',
          leetcodeId: 102,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
          pattern: 'Level-Order BFS',
          concepts: ['Tree traversal', 'Level processing'],
          hint: 'Use queue to process nodes level by level',
          solution: 'Queue-based BFS with level size tracking',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(w) where w is max width'
        },
        {
          id: 'binary-tree-right-side-view',
          title: 'Binary Tree Right Side View',
          leetcodeId: 199,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/binary-tree-right-side-view/',
          pattern: 'Level-Order BFS',
          concepts: ['Tree traversal', 'Rightmost node'],
          hint: 'Use level-order traversal, capture last node of each level',
          solution: 'BFS with level tracking, record rightmost node',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(w)'
        },
        {
          id: 'binary-tree-zigzag-level-order-traversal',
          title: 'Binary Tree Zigzag Level Order Traversal',
          leetcodeId: 103,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
          pattern: 'Level-Order BFS',
          concepts: ['Tree traversal', 'Alternating direction'],
          hint: 'Use BFS with alternating reverse for odd levels',
          solution: 'Queue-based BFS with level direction flag',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(w)'
        },
        {
          id: 'populating-next-right-pointers-in-each-node',
          title: 'Populating Next Right Pointers in Each Node',
          leetcodeId: 116,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
          pattern: 'Level-Order BFS',
          concepts: ['Tree modification', 'Next pointers'],
          hint: 'Use level-order traversal to connect nodes at same level',
          solution: 'BFS to connect adjacent nodes in each level',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1) with optimized approach'
        }
      ]
    },
    {
      id: 'shortest-path',
      title: '3. Shortest Path & Distance',
      description: 'Learn shortest path algorithms and distance calculations using BFS',
      difficulty: 'Medium',
      estimatedTime: '4-5 days',
      concepts: [
        'Shortest path in unweighted graphs',
        'Multi-source BFS',
        'Distance calculation',
        'Grid traversal patterns'
      ],
      questions: [
        {
          id: 'shortest-path-in-binary-matrix',
          title: 'Shortest Path in Binary Matrix',
          leetcodeId: 1091,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
          pattern: 'Grid BFS',
          concepts: ['Grid traversal', 'Shortest path'],
          hint: 'Use BFS to find shortest path, consider 8 directions',
          solution: 'BFS with distance tracking in grid',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n²)'
        },
        {
          id: 'rotting-oranges',
          title: 'Rotting Oranges',
          leetcodeId: 994,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/rotting-oranges/',
          pattern: 'Multi-source BFS',
          concepts: ['Simultaneous spreading', 'Time simulation'],
          hint: 'Start BFS from all rotten oranges simultaneously',
          solution: 'Multi-source BFS with time tracking',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)'
        },
        {
          id: 'walls-and-gates',
          title: 'Walls and Gates',
          leetcodeId: 286,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/walls-and-gates/',
          pattern: 'Multi-source BFS',
          concepts: ['Distance filling', 'Multi-source'],
          hint: 'Start BFS from all gates simultaneously',
          solution: 'Multi-source BFS to fill distances',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(m*n)'
        },
        {
          id: 'as-far-from-land-as-possible',
          title: 'As Far from Land as Possible',
          leetcodeId: 1162,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/as-far-from-land-as-possible/',
          pattern: 'Multi-source BFS',
          concepts: ['Maximum distance', 'Multi-source'],
          hint: 'Start BFS from all land cells, find maximum distance to water',
          solution: 'Multi-source BFS with distance tracking',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(n²)'
        }
      ]
    },
    {
      id: 'graph-algorithms',
      title: '4. Graph Algorithms with Queue',
      description: 'Advanced graph algorithms and patterns using queue-based approaches',
      difficulty: 'Hard',
      estimatedTime: '5-6 days',
      concepts: [
        'Topological sorting',
        'Bipartite graph detection',
        'Graph coloring',
        'Cycle detection in graphs'
      ],
      questions: [
        {
          id: 'course-schedule',
          title: 'Course Schedule',
          leetcodeId: 207,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/course-schedule/',
          pattern: 'Topological Sort',
          concepts: ['Cycle detection', 'Dependency resolution'],
          hint: 'Use BFS with in-degree counting for topological sort',
          solution: 'Kahns algorithm with queue for topological ordering',
          timeComplexity: 'O(V + E)',
          spaceComplexity: 'O(V + E)'
        },
        {
          id: 'course-schedule-ii',
          title: 'Course Schedule II',
          leetcodeId: 210,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/course-schedule-ii/',
          pattern: 'Topological Sort',
          concepts: ['Ordering', 'Dependency resolution'],
          hint: 'Build topological order using BFS',
          solution: 'Kahns algorithm to generate valid ordering',
          timeComplexity: 'O(V + E)',
          spaceComplexity: 'O(V + E)'
        },
        {
          id: 'is-graph-bipartite',
          title: 'Is Graph Bipartite?',
          leetcodeId: 785,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/is-graph-bipartite/',
          pattern: 'Graph Coloring BFS',
          concepts: ['Bipartite detection', 'Graph coloring'],
          hint: 'Use BFS to color graph with two colors',
          solution: 'BFS-based 2-coloring algorithm',
          timeComplexity: 'O(V + E)',
          spaceComplexity: 'O(V)'
        },
        {
          id: 'minimum-height-trees',
          title: 'Minimum Height Trees',
          leetcodeId: 310,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/minimum-height-trees/',
          pattern: 'Topological Sort',
          concepts: ['Tree center', 'Leaf removal'],
          hint: 'Remove leaves iteratively until 1-2 nodes remain',
          solution: 'BFS-based leaf removal to find tree centers',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'sliding-window-queue',
      title: '5. Sliding Window with Queue',
      description: 'Master sliding window patterns using queue and deque structures',
      difficulty: 'Hard',
      estimatedTime: '4-5 days',
      concepts: [
        'Sliding window maximum/minimum',
        'Deque (double-ended queue)',
        'Monotonic deque',
        'Window optimization'
      ],
      questions: [
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          leetcodeId: 239,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/sliding-window-maximum/',
          pattern: 'Monotonic Deque',
          concepts: ['Window maximum', 'Deque optimization'],
          hint: 'Use deque to maintain potential maximums in decreasing order',
          solution: 'Monotonic decreasing deque for window maximum',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(k)'
        },
        {
          id: 'shortest-subarray-with-sum-at-least-k',
          title: 'Shortest Subarray with Sum at Least K',
          leetcodeId: 862,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
          pattern: 'Monotonic Deque',
          concepts: ['Prefix sum', 'Deque optimization'],
          hint: 'Use deque with prefix sums to find shortest valid subarray',
          solution: 'Monotonic deque with prefix sum optimization',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'constrained-subsequence-sum',
          title: 'Constrained Subsequence Sum',
          leetcodeId: 1425,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/constrained-subsequence-sum/',
          pattern: 'DP + Monotonic Deque',
          concepts: ['Dynamic programming', 'Window optimization'],
          hint: 'Use DP with deque to optimize window maximum queries',
          solution: 'DP with monotonic deque for range maximum',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'jump-game-vi',
          title: 'Jump Game VI',
          leetcodeId: 1696,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/jump-game-vi/',
          pattern: 'DP + Monotonic Deque',
          concepts: ['Dynamic programming', 'Jump optimization'],
          hint: 'Use DP with deque to find maximum score in previous k positions',
          solution: 'DP with sliding window maximum using deque',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'advanced-queue',
      title: '6. Advanced Queue Applications',
      description: 'Complex queue-based algorithms and system design patterns',
      difficulty: 'Hard',
      estimatedTime: '3-4 days',
      concepts: [
        'Priority queue simulation',
        'Queue-based system design',
        'Stream processing',
        'Buffer management'
      ],
      questions: [
        {
          id: 'design-hit-counter',
          title: 'Design Hit Counter',
          leetcodeId: 362,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/design-hit-counter/',
          pattern: 'Time-based Queue',
          concepts: ['Time window', 'Hit counting'],
          hint: 'Use queue to maintain hits within time window',
          solution: 'Queue with timestamp-based cleanup',
          timeComplexity: 'O(1) amortized',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'moving-average-from-data-stream',
          title: 'Moving Average from Data Stream',
          leetcodeId: 346,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/moving-average-from-data-stream/',
          pattern: 'Fixed-size Queue',
          concepts: ['Rolling average', 'Fixed window'],
          hint: 'Use queue with fixed size to maintain window',
          solution: 'Circular buffer or queue with size limit',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'task-scheduler',
          title: 'Task Scheduler',
          leetcodeId: 621,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/task-scheduler/',
          pattern: 'Queue + Priority Queue',
          concepts: ['Task scheduling', 'Cooldown management'],
          hint: 'Use priority queue for task frequency and queue for cooldown',
          solution: 'Priority queue with cooldown queue simulation',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'perfect-squares',
          title: 'Perfect Squares',
          leetcodeId: 279,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/perfect-squares/',
          pattern: 'BFS for Minimum Steps',
          concepts: ['Minimum steps', 'Mathematical BFS'],
          hint: 'Use BFS to find minimum number of perfect squares',
          solution: 'BFS with level tracking for minimum squares',
          timeComplexity: 'O(n * sqrt(n))',
          spaceComplexity: 'O(n)'
        }
      ]
    }
  ]
};

export default QUEUE_ROADMAP;
