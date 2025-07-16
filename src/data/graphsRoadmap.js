/**
 * Graphs Roadmap Data
 * @module graphsRoadmap
 * @description Curated roadmap for mastering Graphs in DSA, including key concepts and LeetCode questions.
 */

const graphsRoadmap = {
  id: 'graphs',
  title: 'Graphs',
  colorTheme: 'from-cyan-500 to-blue-700',
  sections: [
    {
      title: 'Introduction to Graphs',
      concepts: [
        'What is a Graph?',
        'Types of Graphs (Directed, Undirected, Weighted, Unweighted)',
        'Graph Representations (Adjacency List, Adjacency Matrix)',
        'Graph Terminology (Vertex, Edge, Degree, Path, Cycle)'
      ],
      questions: [
        {
          title: 'Find if Path Exists in Graph',
          url: 'https://leetcode.com/problems/find-if-path-exists-in-graph/',
          difficulty: 'Easy',
          id: 1971
        },
        {
          title: 'Number of Connected Components in an Undirected Graph',
          url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
          difficulty: 'Medium',
          id: 323
        }
      ]
    },
    {
      title: 'Graph Traversal',
      concepts: [
        'Breadth-First Search (BFS)',
        'Depth-First Search (DFS)',
        'Recursive vs Iterative Traversal',
        'Visited Set/Array'
      ],
      questions: [
        {
          title: 'Clone Graph',
          url: 'https://leetcode.com/problems/clone-graph/',
          difficulty: 'Medium',
          id: 133
        },
        {
          title: 'Number of Islands',
          url: 'https://leetcode.com/problems/number-of-islands/',
          difficulty: 'Medium',
          id: 200
        },
        {
          title: 'Course Schedule',
          url: 'https://leetcode.com/problems/course-schedule/',
          difficulty: 'Medium',
          id: 207
        }
      ]
    },
    {
      title: 'Topological Sort & Cycles',
      concepts: [
        'Topological Sorting',
        'Detecting Cycles in Directed Graphs',
        'Kahn’s Algorithm',
        'DFS Cycle Detection'
      ],
      questions: [
        {
          title: 'Course Schedule II',
          url: 'https://leetcode.com/problems/course-schedule-ii/',
          difficulty: 'Medium',
          id: 210
        },
        {
          title: 'Course Schedule',
          url: 'https://leetcode.com/problems/course-schedule/',
          difficulty: 'Medium',
          id: 207
        }
      ]
    },
    {
      title: 'Shortest Path Algorithms',
      concepts: [
        'Dijkstra’s Algorithm',
        'Bellman-Ford Algorithm',
        'BFS for Unweighted Shortest Path',
        'Edge Weights'
      ],
      questions: [
        {
          title: 'Network Delay Time',
          url: 'https://leetcode.com/problems/network-delay-time/',
          difficulty: 'Medium',
          id: 743
        },
        {
          title: 'Cheapest Flights Within K Stops',
          url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
          difficulty: 'Medium',
          id: 787
        }
      ]
    },
    {
      title: 'Minimum Spanning Tree',
      concepts: [
        'Kruskal’s Algorithm',
        'Prim’s Algorithm',
        'Union Find (Disjoint Set Union, DSU)'
      ],
      questions: [
        {
          title: 'Min Cost to Connect All Points',
          url: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
          difficulty: 'Medium',
          id: 1584
        },
        {
          title: 'Connecting Cities With Minimum Cost',
          url: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost/',
          difficulty: 'Medium',
          id: 1135
        }
      ]
    },
    {
      title: 'Advanced Graph Problems',
      concepts: [
        'Strongly Connected Components',
        'Bridges and Articulation Points',
        'Bipartite Graphs',
        'Graph Coloring',
        'Union Find Applications'
      ],
      questions: [
        {
          title: 'Is Graph Bipartite?',
          url: 'https://leetcode.com/problems/is-graph-bipartite/',
          difficulty: 'Medium',
          id: 785
        },
        {
          title: 'Redundant Connection',
          url: 'https://leetcode.com/problems/redundant-connection/',
          difficulty: 'Medium',
          id: 684
        }
      ]
    }
  ]
};

export default graphsRoadmap;
