/**
 * Custom hook for managing AI Code Review functionality
 * Handles code submission, analysis, and review history
 */

import { useState, useEffect, useCallback } from 'react';
import {
  PROGRAMMING_LANGUAGES,
  SAMPLE_PROBLEMS,
  MOCK_REVIEWS,
  USER_REVIEW_HISTORY,
  REVIEW_STATISTICS,
} from '../data/codeReviewData';

/**
 * Hook for managing code review state and operations
 */
export const useCodeReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewHistory, setReviewHistory] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [currentReview, setCurrentReview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  // Initialize data on mount
  useEffect(() => {
    const initializeData = () => {
      try {
        // Load from localStorage or use mock data
        const savedReviews = localStorage.getItem('codeReviews');
        const savedHistory = localStorage.getItem('reviewHistory');
        const savedStats = localStorage.getItem('reviewStatistics');

        setReviews(savedReviews ? JSON.parse(savedReviews) : MOCK_REVIEWS);
        setReviewHistory(savedHistory ? JSON.parse(savedHistory) : USER_REVIEW_HISTORY);
        setStatistics(savedStats ? JSON.parse(savedStats) : REVIEW_STATISTICS);
      } catch (err) {
        console.error('Error loading code review data:', err);
        setError('Failed to load review data');
      }
    };

    initializeData();
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem('codeReviews', JSON.stringify(reviews));
    }
  }, [reviews]);

  useEffect(() => {
    if (reviewHistory.length > 0) {
      localStorage.setItem('reviewHistory', JSON.stringify(reviewHistory));
    }
  }, [reviewHistory]);

  useEffect(() => {
    if (statistics) {
      localStorage.setItem('reviewStatistics', JSON.stringify(statistics));
    }
  }, [statistics]);

  /**
   * Update statistics with new review data
   */
  const updateStatistics = useCallback((language, score) => {
    setStatistics(prev => {
      if (!prev) return REVIEW_STATISTICS;

      const newStats = { ...prev };
      newStats.totalReviews += 1;
      
      // Update average score
      const totalScore = prev.averageScore * (prev.totalReviews - 1) + score;
      newStats.averageScore = Math.round((totalScore / newStats.totalReviews) * 10) / 10;
      
      // Update language distribution
      newStats.languageDistribution = {
        ...prev.languageDistribution,
        [language]: (prev.languageDistribution[language] || 0) + 1,
      };

      return newStats;
    });
  }, []);

  /**
   * Generate mock analysis based on code characteristics
   */
  const generateMockAnalysis = (codeData) => {
    const codeLength = codeData.code.length;
    const hasComments = codeData.code.includes('//') || codeData.code.includes('/*');
    const hasProperNaming = !/\b[a-z]\b/.test(codeData.code); // Basic check for single-letter variables
    const hasNestedLoops = (codeData.code.match(/for|while/g) || []).length > 1;

    return {
      timeComplexity: {
        current: hasNestedLoops ? 'O(n²)' : 'O(n)',
        optimal: 'O(n)',
        score: hasNestedLoops ? 6 : 9,
        explanation: hasNestedLoops 
          ? 'Your solution has nested loops which may impact performance on large inputs.'
          : 'Good time complexity for this type of problem.',
      },
      spaceComplexity: {
        current: 'O(n)',
        optimal: 'O(n)',
        score: 8,
        explanation: 'Reasonable space usage for the algorithm approach.',
      },
      codeQuality: {
        score: hasComments && hasProperNaming ? 9 : 7,
        issues: [
          ...(!hasComments ? ['Missing comments/documentation'] : []),
          ...(!hasProperNaming ? ['Consider more descriptive variable names'] : []),
          ...(codeLength > 500 ? ['Function might be too long - consider breaking it down'] : []),
        ],
        strengths: [
          'Clean code structure',
          ...(hasComments ? ['Good documentation'] : []),
          ...(hasProperNaming ? ['Good variable naming'] : []),
        ],
      },
      bestPractices: {
        score: 8,
        suggestions: [
          'Add input validation',
          'Consider edge cases',
          'Use consistent indentation',
        ],
      },
    };
  };

  /**
   * Calculate overall score from analysis
   */
  const calculateOverallScore = (analysis) => {
    if (!analysis) return 0;
    
    const scores = [
      analysis.timeComplexity.score,
      analysis.spaceComplexity.score,
      analysis.codeQuality.score,
      analysis.bestPractices.score,
    ];
    
    return Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 10) / 10;
  };

  /**
   * Complete the analysis simulation
   */
  const completeAnalysis = useCallback((reviewId, codeData) => {
    // Generate mock analysis based on code characteristics
    const analysis = generateMockAnalysis(codeData);

    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            status: 'completed',
            analysis,
            overallScore: calculateOverallScore(analysis),
          }
        : review
    ));

    // Add to history
    const historyEntry = {
      id: reviewId,
      problemTitle: codeData.problemTitle,
      language: codeData.language,
      submittedAt: new Date().toISOString(),
      overallScore: calculateOverallScore(analysis),
      status: 'completed',
    };

    setReviewHistory(prev => [historyEntry, ...prev]);

    // Update statistics
    updateStatistics(codeData.language, calculateOverallScore(analysis));

    setIsAnalyzing(false);
  }, [updateStatistics]);

  /**
   * Submit code for AI analysis
   */
  const submitCodeForReview = useCallback(async (codeData) => {
    setIsAnalyzing(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      const newReview = {
        id: `review-${Date.now()}`,
        userId: 'current-user',
        problemId: codeData.problemId,
        problemTitle: codeData.problemTitle,
        language: codeData.language,
        code: codeData.code,
        submittedAt: new Date().toISOString(),
        status: 'analyzing',
        analysis: null,
      };

      // Add to reviews
      setReviews(prev => [newReview, ...prev]);
      setCurrentReview(newReview.id);

      // Simulate analysis completion after another delay
      setTimeout(() => {
        completeAnalysis(newReview.id, codeData);
      }, 2000);

      return newReview.id;
    } catch (err) {
      console.error('Error submitting code:', err);
      setError('Failed to submit code for review');
      setIsAnalyzing(false);
    }
  }, [completeAnalysis]);

  /**
   * Get review by ID
   */
  const getReviewById = useCallback((reviewId) => {
    return reviews.find(review => review.id === reviewId);
  }, [reviews]);

  /**
   * Delete a review
   */
  const deleteReview = useCallback((reviewId) => {
    setReviews(prev => prev.filter(review => review.id !== reviewId));
    setReviewHistory(prev => prev.filter(entry => entry.id !== reviewId));
  }, []);

  /**
   * Clear all reviews
   */
  const clearAllReviews = useCallback(() => {
    setReviews([]);
    setReviewHistory([]);
    setCurrentReview(null);
    localStorage.removeItem('codeReviews');
    localStorage.removeItem('reviewHistory');
  }, []);

  return {
    // State
    reviews,
    reviewHistory,
    statistics,
    currentReview,
    isAnalyzing,
    error,
    
    // Actions
    submitCodeForReview,
    getReviewById,
    deleteReview,
    clearAllReviews,
    
    // Data
    programmingLanguages: PROGRAMMING_LANGUAGES,
    sampleProblems: SAMPLE_PROBLEMS,
    
    // Computed values
    hasReviews: reviews.length > 0,
    latestReview: reviews[0] || null,
  };
};
