/**
 * Daily Challenge Hook
 * @module useDailyChallenge
 * @description Hook for managing daily coding challenges, streaks, and progress
 */

import { useState, useEffect, useCallback } from 'react';
import { DAILY_CHALLENGES_POOL, DIFFICULTY_LEVELS, STREAK_MILESTONES } from '../data/dailyChallengeData';

const STORAGE_KEYS = {
  CURRENT_STREAK: 'daily_challenge_current_streak',
  LONGEST_STREAK: 'daily_challenge_longest_streak',
  LAST_COMPLETED_DATE: 'daily_challenge_last_completed',
  TOTAL_COMPLETED: 'daily_challenge_total_completed',
  COMPLETED_CHALLENGES: 'daily_challenge_completed_history',
  USER_LEVEL: 'daily_challenge_user_level',
  TODAYS_CHALLENGE: 'daily_challenge_today'
};

export const useDailyChallenge = () => {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [userLevel, setUserLevel] = useState(DIFFICULTY_LEVELS.BEGINNER);
  const [todaysChallenge, setTodaysChallenge] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);

  // Get today's date string for comparison
  const getTodayString = () => new Date().toDateString();

  // Initialize data from localStorage
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const storedCurrentStreak = localStorage.getItem(STORAGE_KEYS.CURRENT_STREAK);
        const storedLongestStreak = localStorage.getItem(STORAGE_KEYS.LONGEST_STREAK);
        const storedTotalCompleted = localStorage.getItem(STORAGE_KEYS.TOTAL_COMPLETED);
        const storedUserLevel = localStorage.getItem(STORAGE_KEYS.USER_LEVEL);
        const storedCompletedChallenges = localStorage.getItem(STORAGE_KEYS.COMPLETED_CHALLENGES);
        const storedTodaysChallenge = localStorage.getItem(STORAGE_KEYS.TODAYS_CHALLENGE);
        const lastCompletedDate = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED_DATE);

        setCurrentStreak(storedCurrentStreak ? parseInt(storedCurrentStreak) : 0);
        setLongestStreak(storedLongestStreak ? parseInt(storedLongestStreak) : 0);
        setTotalCompleted(storedTotalCompleted ? parseInt(storedTotalCompleted) : 0);
        setUserLevel(storedUserLevel || DIFFICULTY_LEVELS.BEGINNER);
        setCompletedChallenges(storedCompletedChallenges ? JSON.parse(storedCompletedChallenges) : []);

        // Check if today's challenge was already completed
        const today = getTodayString();
        setIsCompleted(lastCompletedDate === today);

        // Load or generate today's challenge
        if (storedTodaysChallenge) {
          const parsed = JSON.parse(storedTodaysChallenge);
          if (parsed.date === today) {
            setTodaysChallenge(parsed.challenge);
          } else {
            // Generate new challenge inline
            const level = storedUserLevel || DIFFICULTY_LEVELS.BEGINNER;
            const completed = storedCompletedChallenges ? JSON.parse(storedCompletedChallenges) : [];
            
            const availableChallenges = DAILY_CHALLENGES_POOL[level] || DAILY_CHALLENGES_POOL[DIFFICULTY_LEVELS.BEGINNER];
            const randomIndex = Math.floor(Math.random() * availableChallenges.length);
            const selectedChallenge = availableChallenges[randomIndex];

            setTodaysChallenge(selectedChallenge);
            localStorage.setItem(STORAGE_KEYS.TODAYS_CHALLENGE, JSON.stringify({
              date: today,
              challenge: selectedChallenge
            }));
          }
        } else {
          // Generate new challenge inline
          const level = storedUserLevel || DIFFICULTY_LEVELS.BEGINNER;
          
          const availableChallenges = DAILY_CHALLENGES_POOL[level] || DAILY_CHALLENGES_POOL[DIFFICULTY_LEVELS.BEGINNER];
          const randomIndex = Math.floor(Math.random() * availableChallenges.length);
          const selectedChallenge = availableChallenges[randomIndex];

          setTodaysChallenge(selectedChallenge);
          localStorage.setItem(STORAGE_KEYS.TODAYS_CHALLENGE, JSON.stringify({
            date: today,
            challenge: selectedChallenge
          }));
        }
      } catch (error) {
        console.error('Error loading daily challenge data:', error);
        // Generate fallback challenge inline
        const fallbackChallenge = DAILY_CHALLENGES_POOL[DIFFICULTY_LEVELS.BEGINNER][0];
        setTodaysChallenge(fallbackChallenge);
      }
    };        loadStoredData();
  }, []);

  // Generate today's challenge based on user level and history
  const generateTodaysChallenge = useCallback(() => {
    const today = getTodayString();
    const level = localStorage.getItem(STORAGE_KEYS.USER_LEVEL) || DIFFICULTY_LEVELS.BEGINNER;
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_CHALLENGES) || '[]');
    
    const availableChallenges = DAILY_CHALLENGES_POOL[level] || DAILY_CHALLENGES_POOL[DIFFICULTY_LEVELS.BEGINNER];
    
    // Filter out recently completed challenges (last 7 days)
    const recentlyCompleted = completed
      .filter(entry => {
        const entryDate = new Date(entry.date);
        const daysDiff = (new Date() - entryDate) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7;
      })
      .map(entry => entry.challengeId);

    const eligibleChallenges = availableChallenges.filter(
      challenge => !recentlyCompleted.includes(challenge.id)
    );

    const finalChallenges = eligibleChallenges.length > 0 ? eligibleChallenges : availableChallenges;
    const randomIndex = Math.floor(Math.random() * finalChallenges.length);
    const selectedChallenge = finalChallenges[randomIndex];

    setTodaysChallenge(selectedChallenge);
    
    // Store today's challenge
    localStorage.setItem(STORAGE_KEYS.TODAYS_CHALLENGE, JSON.stringify({
      date: today,
      challenge: selectedChallenge
    }));
  }, []);

  // Complete today's challenge
  const completeChallenge = useCallback((timeSpent, difficulty) => {
    const today = getTodayString();
    const lastCompleted = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED_DATE);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    let newCurrentStreak = 1;
    
    // Calculate streak
    if (lastCompleted === yesterdayString) {
      newCurrentStreak = currentStreak + 1;
    } else if (lastCompleted === today) {
      // Already completed today
      return;
    }

    const newLongestStreak = Math.max(longestStreak, newCurrentStreak);
    const newTotalCompleted = totalCompleted + 1;

    // Update user level based on performance
    let newUserLevel = userLevel;
    if (newTotalCompleted >= 50 && userLevel === DIFFICULTY_LEVELS.BEGINNER) {
      newUserLevel = DIFFICULTY_LEVELS.INTERMEDIATE;
    } else if (newTotalCompleted >= 150 && userLevel === DIFFICULTY_LEVELS.INTERMEDIATE) {
      newUserLevel = DIFFICULTY_LEVELS.ADVANCED;
    } else if (newTotalCompleted >= 300 && userLevel === DIFFICULTY_LEVELS.ADVANCED) {
      newUserLevel = DIFFICULTY_LEVELS.EXPERT;
    }

    // Add to completed challenges history
    const challengeEntry = {
      date: today,
      challengeId: todaysChallenge.id,
      challengeTitle: todaysChallenge.title,
      timeSpent,
      difficulty,
      userLevel: newUserLevel
    };

    const newCompletedChallenges = [...completedChallenges, challengeEntry];

    // Update state
    setCurrentStreak(newCurrentStreak);
    setLongestStreak(newLongestStreak);
    setTotalCompleted(newTotalCompleted);
    setUserLevel(newUserLevel);
    setIsCompleted(true);
    setCompletedChallenges(newCompletedChallenges);

    // Update localStorage
    localStorage.setItem(STORAGE_KEYS.CURRENT_STREAK, newCurrentStreak.toString());
    localStorage.setItem(STORAGE_KEYS.LONGEST_STREAK, newLongestStreak.toString());
    localStorage.setItem(STORAGE_KEYS.TOTAL_COMPLETED, newTotalCompleted.toString());
    localStorage.setItem(STORAGE_KEYS.USER_LEVEL, newUserLevel);
    localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED_DATE, today);
    localStorage.setItem(STORAGE_KEYS.COMPLETED_CHALLENGES, JSON.stringify(newCompletedChallenges));
  }, [currentStreak, longestStreak, totalCompleted, userLevel, todaysChallenge, completedChallenges]);

  // Get streak milestone info
  const getStreakMilestone = useCallback(() => {
    const currentMilestone = STREAK_MILESTONES
      .slice()
      .reverse()
      .find(milestone => currentStreak >= milestone.days);
    
    const nextMilestone = STREAK_MILESTONES
      .find(milestone => currentStreak < milestone.days);

    return {
      current: currentMilestone,
      next: nextMilestone,
      progress: nextMilestone ? (currentStreak / nextMilestone.days) * 100 : 100
    };
  }, [currentStreak]);

  // Reset streak (for testing or manual reset)
  const resetStreak = useCallback(() => {
    setCurrentStreak(0);
    localStorage.setItem(STORAGE_KEYS.CURRENT_STREAK, '0');
    localStorage.removeItem(STORAGE_KEYS.LAST_COMPLETED_DATE);
  }, []);

  // Skip today's challenge (breaks streak)
  const skipChallenge = useCallback(() => {
    setCurrentStreak(0);
    localStorage.setItem(STORAGE_KEYS.CURRENT_STREAK, '0');
    localStorage.removeItem(STORAGE_KEYS.LAST_COMPLETED_DATE);
  }, []);

  return {
    // State
    currentStreak,
    longestStreak,
    totalCompleted,
    userLevel,
    todaysChallenge,
    isCompleted,
    completedChallenges,
    
    // Actions
    completeChallenge,
    resetStreak,
    skipChallenge,
    generateTodaysChallenge,
    
    // Computed
    getStreakMilestone
  };
};

export default useDailyChallenge;
