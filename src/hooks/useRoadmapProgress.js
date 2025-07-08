/**
 * Hook for managing DSA Roadmap progress
 * Handles progress state and localStorage persistence
 */

import { useState, useEffect, useCallback } from 'react';
import { QUESTION_STATUS } from '../data/arraysRoadmap';

const STORAGE_KEY = 'dsa_roadmap_progress';

/**
 * Custom hook for managing roadmap progress
 * @param {string} roadmapId - Unique identifier for the roadmap
 * @returns {Object} Progress state and handlers
 */
export const useRoadmapProgress = (roadmapId) => {
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Storage key for this specific roadmap
  const storageKey = `${STORAGE_KEY}_${roadmapId}`;

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(storageKey);
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setProgress(parsedProgress);
      }
    } catch (error) {
      console.error('Error loading roadmap progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, [storageKey]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(progress));
      } catch (error) {
        console.error('Error saving roadmap progress:', error);
      }
    }
  }, [progress, storageKey, isLoading]);

  // Update question status
  const updateQuestionStatus = useCallback((questionId, status) => {
    setProgress(prev => ({
      ...prev,
      [questionId]: status
    }));
  }, []);

  // Mark question as completed
  const markQuestionCompleted = useCallback((questionId) => {
    updateQuestionStatus(questionId, QUESTION_STATUS.COMPLETED);
  }, [updateQuestionStatus]);

  // Mark question as in progress
  const markQuestionInProgress = useCallback((questionId) => {
    updateQuestionStatus(questionId, QUESTION_STATUS.IN_PROGRESS);
  }, [updateQuestionStatus]);

  // Mark question as not started
  const markQuestionNotStarted = useCallback((questionId) => {
    updateQuestionStatus(questionId, QUESTION_STATUS.NOT_STARTED);
  }, [updateQuestionStatus]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress({});
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error('Error clearing roadmap progress:', error);
    }
  }, [storageKey]);

  // Get progress statistics
  const getProgressStats = useCallback((roadmapData) => {
    if (!roadmapData || !roadmapData.sections) {
      return {
        total: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        percentage: 0
      };
    }

    const allQuestions = roadmapData.sections.flatMap(section => section.questions);
    const total = allQuestions.length;
    
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;

    allQuestions.forEach(question => {
      const status = progress[question.id] || QUESTION_STATUS.NOT_STARTED;
      switch (status) {
        case QUESTION_STATUS.COMPLETED:
          completed++;
          break;
        case QUESTION_STATUS.IN_PROGRESS:
          inProgress++;
          break;
        default:
          notStarted++;
      }
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      inProgress,
      notStarted,
      percentage
    };
  }, [progress]);

  // Get progress for a specific section
  const getSectionProgress = useCallback((section) => {
    if (!section || !section.questions) {
      return {
        total: 0,
        completed: 0,
        percentage: 0
      };
    }

    const total = section.questions.length;
    const completed = section.questions.filter(
      question => progress[question.id] === QUESTION_STATUS.COMPLETED
    ).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      percentage
    };
  }, [progress]);

  // Check if question is completed
  const isQuestionCompleted = useCallback((questionId) => {
    return progress[questionId] === QUESTION_STATUS.COMPLETED;
  }, [progress]);

  // Get question status
  const getQuestionStatus = useCallback((questionId) => {
    return progress[questionId] || QUESTION_STATUS.NOT_STARTED;
  }, [progress]);

  return {
    progress,
    isLoading,
    updateQuestionStatus,
    markQuestionCompleted,
    markQuestionInProgress,
    markQuestionNotStarted,
    resetProgress,
    getProgressStats,
    getSectionProgress,
    isQuestionCompleted,
    getQuestionStatus
  };
};
