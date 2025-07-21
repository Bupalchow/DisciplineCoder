/**
 * Mock data for AI Code Review & Optimization Studio
 * Simulates AI analysis responses and review suggestions
 */

export const PROGRAMMING_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'cpp', name: 'C++', icon: '⚡' },
  { id: 'go', name: 'Go', icon: '🔵' },
  { id: 'rust', name: 'Rust', icon: '🦀' },
  { id: 'typescript', name: 'TypeScript', icon: '💙' },
];

export const ANALYSIS_CATEGORIES = {
  TIME_COMPLEXITY: 'Time Complexity',
  SPACE_COMPLEXITY: 'Space Complexity',
  CODE_QUALITY: 'Code Quality',
  BEST_PRACTICES: 'Best Practices',
  OPTIMIZATION: 'Optimization',
  READABILITY: 'Readability',
};

export const SAMPLE_PROBLEMS = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.',
  },
  {
    id: 'word-ladder',
    title: 'Word Ladder',
    difficulty: 'Hard',
    description: 'A transformation sequence from word beginWord to word endWord using a dictionary wordList.',
  },
];

export const MOCK_REVIEWS = [
  {
    id: 'review-1',
    userId: 'user-1',
    problemId: 'two-sum',
    language: 'javascript',
    code: `function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`,
    submittedAt: '2024-01-15T10:30:00Z',
    status: 'completed',
    analysis: {
      timeComplexity: {
        current: 'O(n²)',
        optimal: 'O(n)',
        score: 6,
        explanation: 'Your solution uses nested loops, resulting in quadratic time complexity. Consider using a hash map for O(n) solution.',
      },
      spaceComplexity: {
        current: 'O(1)',
        optimal: 'O(n)',
        score: 8,
        explanation: 'Good space usage for this approach, though the optimal solution requires O(n) space for the hash map.',
      },
      codeQuality: {
        score: 7,
        issues: [
          'Consider using more descriptive variable names',
          'Add input validation for edge cases',
          'Missing JSDoc comments',
        ],
        strengths: [
          'Clean and readable code structure',
          'Proper use of early return',
        ],
      },
      bestPractices: {
        score: 8,
        suggestions: [
          'Use const/let appropriately',
          'Add error handling for invalid inputs',
          'Consider edge cases like empty arrays',
        ],
      },
    },
    optimizedSolution: {
      code: `/**
 * Two Sum - Optimized Solution
 * Time: O(n), Space: O(n)
 */
function twoSum(nums, target) {
    if (!nums || nums.length < 2) {
        throw new Error('Array must contain at least 2 elements');
    }
    
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
}`,
      improvements: [
        'Reduced time complexity from O(n²) to O(n)',
        'Added input validation',
        'Better variable naming (complement)',
        'Added comprehensive documentation',
        'Proper error handling',
      ],
    },
    alternativeSolutions: [
      {
        approach: 'Sorting + Two Pointers',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        pros: ['Better space complexity', 'Intuitive approach'],
        cons: ['Slower than hash map', 'Requires sorting'],
      },
      {
        approach: 'Brute Force (Current)',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        pros: ['Simple to understand', 'No extra space'],
        cons: ['Poor performance on large inputs'],
      },
    ],
    overallScore: 7.2,
    recommendations: [
      'Study hash map data structure for optimization',
      'Practice time complexity analysis',
      'Focus on input validation and error handling',
      'Improve code documentation habits',
    ],
  },
  {
    id: 'review-2',
    userId: 'user-1',
    problemId: 'valid-parentheses',
    language: 'python',
    code: `def isValid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack`,
    submittedAt: '2024-01-14T15:45:00Z',
    status: 'completed',
    analysis: {
      timeComplexity: {
        current: 'O(n)',
        optimal: 'O(n)',
        score: 10,
        explanation: 'Excellent! Your solution achieves optimal time complexity.',
      },
      spaceComplexity: {
        current: 'O(n)',
        optimal: 'O(n)',
        score: 10,
        explanation: 'Optimal space complexity for this problem.',
      },
      codeQuality: {
        score: 9,
        issues: [
          'Missing docstring',
          'Could add type hints',
        ],
        strengths: [
          'Clean and concise implementation',
          'Good use of dictionary for mapping',
          'Efficient stack operations',
        ],
      },
      bestPractices: {
        score: 8,
        suggestions: [
          'Add input validation',
          'Use type hints for better code documentation',
          'Consider adding docstring',
        ],
      },
    },
    optimizedSolution: {
      code: `def isValid(s: str) -> bool:
    """
    Check if parentheses in string are valid and properly matched.
    
    Args:
        s: String containing parentheses characters
        
    Returns:
        bool: True if valid, False otherwise
        
    Time: O(n), Space: O(n)
    """
    if not s:
        return True
        
    if len(s) % 2 != 0:
        return False
    
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        elif char in "({[":
            stack.append(char)
        # Ignore non-parentheses characters
    
    return not stack`,
      improvements: [
        'Added type hints for better code documentation',
        'Added comprehensive docstring',
        'Added early return for empty string',
        'Added optimization for odd-length strings',
        'More explicit character validation',
      ],
    },
    alternativeSolutions: [
      {
        approach: 'Replace Method',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        pros: ['Very simple implementation'],
        cons: ['Poor performance', 'Multiple string operations'],
      },
    ],
    overallScore: 9.2,
    recommendations: [
      'Excellent algorithm choice and implementation!',
      'Add type hints to improve code documentation',
      'Consider edge cases in input validation',
      'Keep up the great work with clean, efficient code',
    ],
  },
];

export const USER_REVIEW_HISTORY = [
  {
    id: 'review-1',
    problemTitle: 'Two Sum',
    language: 'JavaScript',
    submittedAt: '2024-01-15T10:30:00Z',
    overallScore: 7.2,
    status: 'completed',
  },
  {
    id: 'review-2',
    problemTitle: 'Valid Parentheses',
    language: 'Python',
    submittedAt: '2024-01-14T15:45:00Z',
    overallScore: 9.2,
    status: 'completed',
  },
  {
    id: 'review-3',
    problemTitle: 'Merge Intervals',
    language: 'Java',
    submittedAt: '2024-01-13T09:15:00Z',
    overallScore: 8.5,
    status: 'completed',
  },
  {
    id: 'review-4',
    problemTitle: 'Binary Tree Inorder',
    language: 'C++',
    submittedAt: '2024-01-12T14:20:00Z',
    overallScore: 6.8,
    status: 'completed',
  },
];

export const REVIEW_STATISTICS = {
  totalReviews: 24,
  averageScore: 7.8,
  languageDistribution: {
    javascript: 8,
    python: 7,
    java: 5,
    cpp: 3,
    go: 1,
  },
  improvementAreas: [
    { category: 'Time Complexity', score: 7.2 },
    { category: 'Code Quality', score: 8.1 },
    { category: 'Best Practices', score: 7.8 },
    { category: 'Documentation', score: 6.5 },
  ],
  monthlyProgress: [
    { month: 'Oct', score: 6.2 },
    { month: 'Nov', score: 7.1 },
    { month: 'Dec', score: 7.8 },
    { month: 'Jan', score: 8.2 },
  ],
};
