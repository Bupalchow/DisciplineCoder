/**
 * DSA Roadmap Data - Strings Topic
 * Comprehensive learning path for String algorithms and patterns
 */

export const STRINGS_ROADMAP = {
  id: 'strings',
  title: 'Strings - Zero to Hero',
  description: 'Master string algorithms and patterns essential for coding interviews',
  estimatedTime: '3-4 weeks',
  totalQuestions: 52,
  
  sections: [
    {
      id: 'string-basics',
      title: '1. String Basics & Fundamentals',
      description: 'Learn basic string operations, traversal, and manipulation',
      difficulty: 'Beginner',
      estimatedTime: '3-4 days',
      concepts: [
        'String traversal',
        'Character manipulation',
        'String comparison',
        'Basic string methods'
      ],
      questions: [
        {
          id: 'defanging-ip-address',
          title: 'Defanging an IP Address',
          leetcodeId: 1108,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/defanging-an-ip-address/',
          pattern: 'String Manipulation',
          concepts: ['String replacement', 'Character iteration'],
          hint: 'Replace each "." with "[.]" by iterating through the string',
          solution: 'Iterate through string and replace dots with [.]',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'jewels-and-stones',
          title: 'Jewels and Stones',
          leetcodeId: 771,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/jewels-and-stones/',
          pattern: 'String Traversal',
          concepts: ['Set operations', 'Character counting'],
          hint: 'Use a set to store jewels, then count stones that are jewels',
          solution: 'Create set of jewels, iterate stones and count matches',
          timeComplexity: 'O(n + m)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'shuffle-string',
          title: 'Shuffle String',
          leetcodeId: 1528,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/shuffle-string/',
          pattern: 'String Reconstruction',
          concepts: ['Array indexing', 'String building'],
          hint: 'Use indices array to place characters in correct positions',
          solution: 'Create result array, place each character at indices[i]',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'goal-parser-interpretation',
          title: 'Goal Parser Interpretation',
          leetcodeId: 1678,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/goal-parser-interpretation/',
          pattern: 'String Parsing',
          concepts: ['String parsing', 'Pattern matching'],
          hint: 'Replace "()" with "o" and "(al)" with "al", keep "G" as is',
          solution: 'Iterate and replace patterns: G->G, ()->o, (al)->al',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'string-reversal',
      title: '2. String Reversal Patterns',
      description: 'Master different approaches to string reversal problems',
      difficulty: 'Beginner',
      estimatedTime: '2-3 days',
      concepts: [
        'Two pointers for reversal',
        'In-place reversal',
        'Word reversal',
        'Conditional reversal'
      ],
      questions: [
        {
          id: 'reverse-string',
          title: 'Reverse String',
          leetcodeId: 344,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-string/',
          pattern: 'Two Pointers',
          concepts: ['Two pointers', 'In-place reversal'],
          hint: 'Use two pointers from start and end, swap characters',
          solution: 'Two pointers: swap s[left] and s[right], move inward',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'reverse-vowels-of-string',
          title: 'Reverse Vowels of a String',
          leetcodeId: 345,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
          pattern: 'Two Pointers',
          concepts: ['Conditional swapping', 'Vowel identification'],
          hint: 'Use two pointers, find vowels from both ends and swap them',
          solution: 'Two pointers: find vowels from both ends, swap when found',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'reverse-words-in-string-iii',
          title: 'Reverse Words in a String III',
          leetcodeId: 557,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
          pattern: 'String Manipulation',
          concepts: ['Word processing', 'Individual word reversal'],
          hint: 'Split into words, reverse each word individually, then join',
          solution: 'Split by spaces, reverse each word, join back with spaces',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'reverse-string-ii',
          title: 'Reverse String II',
          leetcodeId: 541,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/reverse-string-ii/',
          pattern: 'Conditional Reversal',
          concepts: ['Conditional logic', 'Substring reversal'],
          hint: 'For every 2k characters, reverse first k characters',
          solution: 'Iterate by 2k steps, reverse substring of length k',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        }
      ]
    },
    {
      id: 'palindromes',
      title: '3. Palindrome Patterns',
      description: 'Learn various palindrome detection and manipulation techniques',
      difficulty: 'Beginner to Intermediate',
      estimatedTime: '3-4 days',
      concepts: [
        'Palindrome detection',
        'Case-insensitive palindromes',
        'Alphanumeric palindromes',
        'Palindrome construction'
      ],
      questions: [
        {
          id: 'valid-palindrome',
          title: 'Valid Palindrome',
          leetcodeId: 125,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-palindrome/',
          pattern: 'Two Pointers',
          concepts: ['Alphanumeric filtering', 'Case normalization'],
          hint: 'Convert to lowercase, keep only alphanumeric, use two pointers',
          solution: 'Two pointers on cleaned string (alphanumeric + lowercase)',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'palindrome-number',
          title: 'Palindrome Number',
          leetcodeId: 9,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/palindrome-number/',
          pattern: 'String Conversion',
          concepts: ['Number to string conversion', 'Palindrome check'],
          hint: 'Convert number to string and check if string is palindrome',
          solution: 'Convert to string, check if string equals its reverse',
          timeComplexity: 'O(log n)',
          spaceComplexity: 'O(log n)'
        },
        {
          id: 'valid-palindrome-ii',
          title: 'Valid Palindrome II',
          leetcodeId: 680,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-palindrome-ii/',
          pattern: 'Two Pointers',
          concepts: ['Palindrome with deletions', 'Two pointers optimization'],
          hint: 'When mismatch found, try skipping either left or right character',
          solution: 'Two pointers, on mismatch check both skip options',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'longest-palindrome',
          title: 'Longest Palindrome',
          leetcodeId: 409,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/longest-palindrome/',
          pattern: 'Character Counting',
          concepts: ['Character frequency', 'Palindrome construction'],
          hint: 'Count character frequencies, use pairs + one odd character',
          solution: 'Count chars, sum even counts + largest odd count',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'palindromic-substrings',
          title: 'Palindromic Substrings',
          leetcodeId: 647,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/palindromic-substrings/',
          pattern: 'Expand Around Centers',
          concepts: ['Center expansion', 'Palindrome counting'],
          hint: 'For each position, expand around center to find palindromes',
          solution: 'Expand around each center (odd and even length)',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'longest-palindromic-substring',
          title: 'Longest Palindromic Substring',
          leetcodeId: 5,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/longest-palindromic-substring/',
          pattern: 'Expand Around Centers',
          concepts: ['Center expansion', 'Palindrome optimization'],
          hint: 'Expand around each center, keep track of longest palindrome',
          solution: 'Expand around centers, track longest palindrome found',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'anagrams',
      title: '4. Anagram Patterns',
      description: 'Master anagram detection and grouping techniques',
      difficulty: 'Intermediate',
      estimatedTime: '3-4 days',
      concepts: [
        'Anagram detection',
        'Character frequency',
        'Sorting for anagrams',
        'Anagram grouping'
      ],
      questions: [
        {
          id: 'valid-anagram',
          title: 'Valid Anagram',
          leetcodeId: 242,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/valid-anagram/',
          pattern: 'Character Frequency',
          concepts: ['Character counting', 'Frequency comparison'],
          hint: 'Count character frequencies in both strings and compare',
          solution: 'Count chars in both strings, compare frequency maps',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'group-anagrams',
          title: 'Group Anagrams',
          leetcodeId: 49,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/group-anagrams/',
          pattern: 'Hash Map Grouping',
          concepts: ['Anagram grouping', 'Hash map usage'],
          hint: 'Sort each string as key, group strings with same sorted key',
          solution: 'Use sorted string as key to group anagrams in hash map',
          timeComplexity: 'O(n * m log m)',
          spaceComplexity: 'O(n * m)'
        },
        {
          id: 'find-all-anagrams',
          title: 'Find All Anagrams in a String',
          leetcodeId: 438,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
          pattern: 'Sliding Window',
          concepts: ['Sliding window', 'Character frequency'],
          hint: 'Use sliding window with character frequency map',
          solution: 'Sliding window of pattern length, compare frequencies',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'minimum-window-substring',
          title: 'Minimum Window Substring',
          leetcodeId: 76,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/minimum-window-substring/',
          pattern: 'Sliding Window',
          concepts: ['Variable sliding window', 'Character matching'],
          hint: 'Use sliding window with character counts and valid window tracking',
          solution: 'Expand window until valid, then contract to find minimum',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(k)'
        }
      ]
    },
    {
      id: 'subsequences',
      title: '5. Subsequence Patterns',
      description: 'Learn subsequence detection and manipulation techniques',
      difficulty: 'Intermediate',
      estimatedTime: '4-5 days',
      concepts: [
        'Subsequence detection',
        'Two pointers for subsequences',
        'Longest common subsequence',
        'Subsequence counting'
      ],
      questions: [
        {
          id: 'is-subsequence',
          title: 'Is Subsequence',
          leetcodeId: 392,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/is-subsequence/',
          pattern: 'Two Pointers',
          concepts: ['Subsequence matching', 'Two pointers'],
          hint: 'Use two pointers to match characters in order',
          solution: 'Two pointers: advance both on match, only source on mismatch',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'number-of-matching-subsequences',
          title: 'Number of Matching Subsequences',
          leetcodeId: 792,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/number-of-matching-subsequences/',
          pattern: 'Efficient Subsequence Matching',
          concepts: ['Multiple subsequence matching', 'Optimization'],
          hint: 'Use buckets to track words waiting for specific characters',
          solution: 'Bucket words by next needed character, advance efficiently',
          timeComplexity: 'O(n + sum of word lengths)',
          spaceComplexity: 'O(total word length)'
        },
        {
          id: 'longest-common-subsequence',
          title: 'Longest Common Subsequence',
          leetcodeId: 1143,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/longest-common-subsequence/',
          pattern: 'Dynamic Programming',
          concepts: ['LCS algorithm', 'Dynamic programming'],
          hint: 'Use DP: if chars match, 1 + LCS(i-1,j-1), else max(LCS(i-1,j), LCS(i,j-1))',
          solution: 'DP table: dp[i][j] = LCS of first i chars and first j chars',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        },
        {
          id: 'distinct-subsequences',
          title: 'Distinct Subsequences',
          leetcodeId: 115,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/distinct-subsequences/',
          pattern: 'Dynamic Programming',
          concepts: ['Subsequence counting', 'DP optimization'],
          hint: 'DP: if chars match, add ways with and without current char',
          solution: 'DP: dp[i][j] = ways to form t[0..j-1] from s[0..i-1]',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        }
      ]
    },
    {
      id: 'pattern-matching',
      title: '6. Pattern Matching & String Algorithms',
      description: 'Advanced string algorithms and pattern matching techniques',
      difficulty: 'Advanced',
      estimatedTime: '5-6 days',
      concepts: [
        'KMP algorithm',
        'String matching',
        'Pattern searching',
        'Rolling hash'
      ],
      questions: [
        {
          id: 'implement-strstr',
          title: 'Implement strStr()',
          leetcodeId: 28,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/implement-strstr/',
          pattern: 'String Matching',
          concepts: ['Substring search', 'KMP algorithm'],
          hint: 'Use KMP algorithm for efficient pattern matching',
          solution: 'KMP: preprocess pattern, then match with failure function',
          timeComplexity: 'O(n + m)',
          spaceComplexity: 'O(m)'
        },
        {
          id: 'repeated-substring-pattern',
          title: 'Repeated Substring Pattern',
          leetcodeId: 459,
          difficulty: 'Easy',
          url: 'https://leetcode.com/problems/repeated-substring-pattern/',
          pattern: 'String Properties',
          concepts: ['String repetition', 'Pattern detection'],
          hint: 'Check if string is rotation of itself concatenated',
          solution: 'Check if s is substring of (s + s)[1:-1]',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'longest-happy-prefix',
          title: 'Longest Happy Prefix',
          leetcodeId: 1392,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/longest-happy-prefix/',
          pattern: 'KMP Algorithm',
          concepts: ['KMP failure function', 'Prefix-suffix matching'],
          hint: 'Use KMP failure function to find longest prefix that is also suffix',
          solution: 'Build KMP failure function, return last value',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'string-to-integer-atoi',
          title: 'String to Integer (atoi)',
          leetcodeId: 8,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/string-to-integer-atoi/',
          pattern: 'String Parsing',
          concepts: ['String parsing', 'Edge case handling'],
          hint: 'Handle whitespace, sign, digits, and overflow carefully',
          solution: 'Parse step by step: whitespace, sign, digits, overflow check',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        }
      ]
    },
    {
      id: 'advanced-string-problems',
      title: '7. Advanced String Problems',
      description: 'Complex string algorithms for interview mastery',
      difficulty: 'Advanced',
      estimatedTime: '6-7 days',
      concepts: [
        'String transformations',
        'Edit distance',
        'Regular expressions',
        'String compression'
      ],
      questions: [
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          leetcodeId: 72,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/edit-distance/',
          pattern: 'Dynamic Programming',
          concepts: ['Edit distance', 'Levenshtein distance'],
          hint: 'DP: min operations to transform s1[0..i] to s2[0..j]',
          solution: 'DP: dp[i][j] = min edit distance between prefixes',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        },
        {
          id: 'regular-expression-matching',
          title: 'Regular Expression Matching',
          leetcodeId: 10,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/regular-expression-matching/',
          pattern: 'Dynamic Programming',
          concepts: ['Regex matching', 'Complex DP'],
          hint: 'DP with cases for character match, *, and . patterns',
          solution: 'DP: handle char match, . wildcard, and * quantifier',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        },
        {
          id: 'wildcard-matching',
          title: 'Wildcard Matching',
          leetcodeId: 44,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/wildcard-matching/',
          pattern: 'Dynamic Programming',
          concepts: ['Wildcard matching', 'Pattern matching'],
          hint: 'DP: handle ? (any char) and * (any sequence) patterns',
          solution: 'DP: dp[i][j] = match between s[0..i-1] and p[0..j-1]',
          timeComplexity: 'O(m * n)',
          spaceComplexity: 'O(m * n)'
        },
        {
          id: 'string-compression',
          title: 'String Compression',
          leetcodeId: 443,
          difficulty: 'Medium',
          url: 'https://leetcode.com/problems/string-compression/',
          pattern: 'Two Pointers',
          concepts: ['String compression', 'In-place modification'],
          hint: 'Use two pointers: read and write, count consecutive characters',
          solution: 'Two pointers: count chars, write char + count if > 1',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
        },
        {
          id: 'basic-calculator',
          title: 'Basic Calculator',
          leetcodeId: 224,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/basic-calculator/',
          pattern: 'Stack',
          concepts: ['Expression parsing', 'Stack usage'],
          hint: 'Use stack to handle parentheses and operators',
          solution: 'Stack: push/pop for parentheses, handle +/- operators',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)'
        },
        {
          id: 'valid-number',
          title: 'Valid Number',
          leetcodeId: 65,
          difficulty: 'Hard',
          url: 'https://leetcode.com/problems/valid-number/',
          pattern: 'Finite State Machine',
          concepts: ['State machine', 'Complex parsing'],
          hint: 'Use state machine to track valid transitions',
          solution: 'State machine: define states and valid transitions',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)'
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
