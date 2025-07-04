/**
 * LeetCode contests management hook
 */

import { useState, useEffect, useCallback } from 'react';
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { fetchLeetCodeContests, getNewContests } from '../utils/leetcodeApi';
import { FIREBASE_COLLECTIONS } from '../constants';
import { useAuth } from './useAuth';

/**
 * Custom hook for managing LeetCode contests
 * @returns {Object} Contests state and methods
 */
export const useContests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  /**
   * Fetches contests from LeetCode API
   */
  const fetchContests = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const contestsData = await fetchLeetCodeContests();
      setContests(contestsData);
      
      return contestsData;
    } catch (error) {
      console.error('Error fetching contests:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Saves contest to Firestore
   * @param {Object} contest - Contest object
   */
  const saveContest = useCallback(async (contest) => {
    try {
      if (!user) throw new Error('User not authenticated');

      const contestData = {
        ...contest,
        userId: user.uid,
        addedAt: new Date().toISOString(),
        synced: false,
      };

      const docRef = await addDoc(collection(db, FIREBASE_COLLECTIONS.CONTESTS), contestData);
      
      return docRef.id;
    } catch (error) {
      console.error('Error saving contest:', error);
      throw error;
    }
  }, [user]);

  /**
   * Gets saved contests for current user
   */
  const getSavedContests = useCallback(async () => {
    try {
      if (!user) return [];

      const q = query(
        collection(db, FIREBASE_COLLECTIONS.CONTESTS),
        where('userId', '==', user.uid),
        orderBy('startTime', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const savedContests = [];
      
      querySnapshot.forEach((doc) => {
        savedContests.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return savedContests;
    } catch (error) {
      console.error('Error fetching saved contests:', error);
      throw error;
    }
  }, [user]);

  /**
   * Checks for new contests and saves them
   */
  const checkForNewContests = useCallback(async () => {
    try {
      const [currentContests, savedContests] = await Promise.all([
        fetchLeetCodeContests(),
        getSavedContests(),
      ]);

      const newContests = getNewContests(savedContests, currentContests);
      
      if (newContests.length > 0) {
        // Save new contests
        const savePromises = newContests.map(contest => saveContest(contest));
        await Promise.all(savePromises);
        
        // Update state
        setContests(currentContests);
        
        return newContests;
      }

      return [];
    } catch (error) {
      console.error('Error checking for new contests:', error);
      setError(error.message);
      throw error;
    }
  }, [getSavedContests, saveContest]);

  /**
   * Filters contests by type
   * @param {string} type - Contest type ('weekly', 'biweekly', 'other')
   * @returns {Array} Filtered contests
   */
  const getContestsByType = useCallback((type) => {
    return contests.filter(contest => contest.type === type);
  }, [contests]);

  /**
   * Gets upcoming contests (not started yet)
   * @returns {Array} Upcoming contests
   */
  const getUpcomingContests = useCallback(() => {
    const now = new Date();
    return contests.filter(contest => new Date(contest.startTime) > now);
  }, [contests]);

  /**
   * Gets running contests (currently active)
   * @returns {Array} Running contests
   */
  const getRunningContests = useCallback(() => {
    const now = new Date();
    return contests.filter(contest => {
      const start = new Date(contest.startTime);
      const end = new Date(start.getTime() + (contest.duration * 1000));
      return start <= now && now <= end;
    });
  }, [contests]);

  // Initial load
  useEffect(() => {
    if (user) {
      fetchContests();
    }
  }, [user, fetchContests]);

  return {
    contests,
    loading,
    error,
    fetchContests,
    saveContest,
    getSavedContests,
    checkForNewContests,
    getContestsByType,
    getUpcomingContests,
    getRunningContests,
  };
};
