/**
 * DSA Roadmap Data - Stack Topic
 * Comprehensive learning path for Stack algorithms and patterns
 */

export const STACK_ROADMAP = {
  id: 'stack',
  title: 'Stack - Zero to Hero',
  description: 'Master stack data structure and patterns essential for coding interviews',
  estimatedTime: '2-3 weeks',
  totalQuestions: 32,
  
  sections: [
    {
      id: 'stack-basics',
      title: '1. Stack Fundamentals',
      description: 'Learn basic stack operations and understanding of LIFO principle',
      difficulty: 'Beginner',
      estimatedTime: '2-3 days',
      concepts: [
        'Stack operations (push, pop, peek, isEmpty)',
        'LIFO (Last In, First Out) principle',
        'Stack implementation using arrays/linked lists',
        'Time complexity understanding'
      ],
      questions: [
        {
          id: 'valid-parentheses',
          title: 'Valid Parentheses',
          leetcodeId: 20,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-parentheses/',
          pattern: 'Stack for Matching',
          concepts: ['Bracket matching', 'Stack operations'],
          hint: 'Use stack to keep track of opening brackets, pop when you find closing bracket',
          solution: 'Push opening brackets to stack, pop and check match for closing brackets',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'implement-stack-using-queues',
          title: 'Implement Stack using Queues',
          leetcodeId: 225,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/implement-stack-using-queues/',
          pattern: 'Stack Implementation',
          concepts: ['Stack design', 'Queue operations'],
          hint: 'Use one or two queues to simulate stack behavior',
          solution: 'Use two queues or one queue with rotation to implement stack',
          timeComplexity: 'O(n) for pop, O(1) for others',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'min-stack',
          title: 'Min Stack',
          leetcodeId: 155,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/min-stack/',
          pattern: 'Auxiliary Stack',
          concepts: ['Stack design', 'Minimum tracking'],
          hint: 'Use auxiliary stack to track minimum values',
          solution: 'Maintain two stacks: one for values, one for minimums',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'stack-expressions',
      title: '2. Expression Evaluation',
      description: 'Master stack-based expression evaluation and parsing',
      difficulty: 'Medium',
      estimatedTime: '3-4 days',
      concepts: [
        'Infix to postfix conversion',
        'Postfix expression evaluation',
        'Operator precedence',
        'Expression parsing'
      ],
      questions: [
        {
          id: 'evaluate-reverse-polish-notation',
          title: 'Evaluate Reverse Polish Notation',
          leetcodeId: 150,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
          pattern: 'Postfix Evaluation',
          concepts: ['Postfix notation', 'Stack operations'],
          hint: 'Use stack to store operands, pop two operands when you see operator',
          solution: 'Push numbers to stack, pop two for operators and push result',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'basic-calculator',
          title: 'Basic Calculator',
          leetcodeId: 224,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/basic-calculator/',
          pattern: 'Expression Parsing',
          concepts: ['Expression evaluation', 'Parentheses handling'],
          hint: 'Use stack to handle parentheses and signs',
          solution: 'Track current number, sign, and use stack for nested expressions',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'basic-calculator-ii',
          title: 'Basic Calculator II',
          leetcodeId: 227,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/basic-calculator-ii/',
          pattern: 'Operator Precedence',
          concepts: ['Operator precedence', 'Expression parsing'],
          hint: 'Use stack to handle multiplication and division first',
          solution: 'Process operators by precedence, use stack for intermediate results',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'monotonic-stack',
      title: '3. Monotonic Stack',
      description: 'Learn monotonic stack patterns for optimization problems',
      difficulty: 'Medium',
      estimatedTime: '4-5 days',
      concepts: [
        'Monotonic increasing stack',
        'Monotonic decreasing stack',
        'Next greater/smaller element',
        'Stack-based optimization'
      ],
      questions: [
        {
          id: 'next-greater-element-i',
          title: 'Next Greater Element I',
          leetcodeId: 496,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/next-greater-element-i/',
          pattern: 'Monotonic Stack',
          concepts: ['Next greater element', 'Stack traversal'],
          hint: 'Use stack to find next greater element for each element',
          solution: 'Use monotonic decreasing stack, pop when current is greater',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'next-greater-element-ii',
          title: 'Next Greater Element II',
          leetcodeId: 503,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/next-greater-element-ii/',
          pattern: 'Circular Array + Stack',
          concepts: ['Circular array', 'Next greater element'],
          hint: 'Process array twice to handle circular nature',
          solution: 'Use stack with circular array traversal (2 passes)',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'daily-temperatures',
          title: 'Daily Temperatures',
          leetcodeId: 739,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/daily-temperatures/',
          pattern: 'Monotonic Stack',
          concepts: ['Next greater element', 'Index tracking'],
          hint: 'Use stack to store indices, find next warmer temperature',
          solution: 'Monotonic stack with indices, calculate distances',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'largest-rectangle-in-histogram',
          title: 'Largest Rectangle in Histogram',
          leetcodeId: 84,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
          pattern: 'Monotonic Stack',
          concepts: ['Area calculation', 'Stack optimization'],
          hint: 'Use stack to find left and right boundaries for each bar',
          solution: 'Monotonic increasing stack to find boundaries efficiently',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'stack-advanced',
      title: '4. Advanced Stack Patterns',
      description: 'Master complex stack-based algorithms and optimizations',
      difficulty: 'Hard',
      estimatedTime: '5-6 days',
      concepts: [
        'Stack with multiple data structures',
        'Stack-based tree traversal',
        'Stack in dynamic programming',
        'Complex stack applications'
      ],
      questions: [
        {
          id: 'trapping-rain-water',
          title: 'Trapping Rain Water',
          leetcodeId: 42,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/trapping-rain-water/',
          pattern: 'Stack + Two Pointers',
          concepts: ['Water trapping', 'Stack optimization'],
          hint: 'Use stack to track potential water boundaries',
          solution: 'Stack to find left boundaries, calculate trapped water',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'remove-k-digits',
          title: 'Remove K Digits',
          leetcodeId: 402,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/remove-k-digits/',
          pattern: 'Monotonic Stack',
          concepts: ['Digit removal', 'Lexicographical order'],
          hint: 'Use monotonic increasing stack to build smallest number',
          solution: 'Greedy approach with stack to maintain increasing order',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'online-stock-span',
          title: 'Online Stock Span',
          leetcodeId: 901,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/online-stock-span/',
          pattern: 'Monotonic Stack',
          concepts: ['Stock span', 'Online algorithm'],
          hint: 'Use stack to track previous greater prices',
          solution: 'Monotonic decreasing stack with price-span pairs',
          timeComplexity: 'O(1) amortized',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'maximal-rectangle',
          title: 'Maximal Rectangle',
          leetcodeId: 85,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/maximal-rectangle/',
          pattern: 'Stack + Dynamic Programming',
          concepts: ['Rectangle area', 'Histogram pattern'],
          hint: 'Convert to histogram problem for each row',
          solution: 'Use largest rectangle in histogram for each row',
          timeComplexity: 'O(m*n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'sum-of-subarray-minimums',
          title: 'Sum of Subarray Minimums',
          leetcodeId: 907,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/sum-of-subarray-minimums/',
          pattern: 'Monotonic Stack',
          concepts: ['Subarray contribution', 'Stack optimization'],
          hint: 'Use stack to find contribution of each element as minimum',
          solution: 'Calculate left and right boundaries for each element',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'stack-design',
      title: '5. Stack Design & Implementation',
      description: 'Design custom stack data structures and solve implementation problems',
      difficulty: 'Medium',
      estimatedTime: '3-4 days',
      concepts: [
        'Custom stack design',
        'Stack with additional operations',
        'Space optimization',
        'Stack variants'
      ],
      questions: [
        {
          id: 'design-a-stack-with-increment-operation',
          title: 'Design a Stack With Increment Operation',
          leetcodeId: 1381,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/design-a-stack-with-increment-operation/',
          pattern: 'Stack Design',
          concepts: ['Custom stack', 'Increment operation'],
          hint: 'Use lazy propagation for efficient increment',
          solution: 'Array-based stack with lazy increment tracking',
          timeComplexity: 'O(1) for all operations',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'flatten-nested-list-iterator',
          title: 'Flatten Nested List Iterator',
          leetcodeId: 341,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/flatten-nested-list-iterator/',
          pattern: 'Stack + Iterator',
          concepts: ['Nested structure', 'Iterator design'],
          hint: 'Use stack to track nested levels and current position',
          solution: 'Stack-based iterator with lazy evaluation',
          timeComplexity: 'O(1) amortized',
          spaceComplexity: 'O(d) where d is depth'
        },
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
          id: 'asteroid-collision',
          title: 'Asteroid Collision',
          leetcodeId: 735,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/asteroid-collision/',
          pattern: 'Stack Simulation',
          concepts: ['Collision detection', 'Stack operations'],
          hint: 'Use stack to track asteroids, handle collisions',
          solution: 'Stack to simulate asteroid movements and collisions',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    }
  ]
};

export default STACK_ROADMAP;
