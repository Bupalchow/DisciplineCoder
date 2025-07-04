/**
 * Google Calendar integration hook
 */

import { useState, useEffect, useCallback } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import {
  initializeGoogleCalendar,
  signInToGoogleCalendar,
  signOutFromGoogleCalendar,
  createCalendarEvent,
  isSignedInToGoogleCalendar,
} from '../utils/googleCalendar';
import { FIREBASE_COLLECTIONS } from '../constants';
import { useAuth } from './useAuth';

/**
 * Custom hook for Google Calendar integration
 * @returns {Object} Calendar state and methods
 */
export const useGoogleCalendar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [calendarUser, setCalendarUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Initialize Google Calendar API on mount
  useEffect(() => {
    const initialize = async () => {
      try {
        const initialized = await initializeGoogleCalendar();
        if (initialized) {
          const signedIn = isSignedInToGoogleCalendar();
          setIsConnected(signedIn);
        }
      } catch (error) {
        console.error('Error initializing Google Calendar:', error);
      }
    };

    initialize();
  }, []);

  // Check for saved calendar connection
  useEffect(() => {
    const checkSavedConnection = async () => {
      if (!user) return;

      try {
        const userDoc = await getDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid));
        const userData = userDoc.data();
        
        if (userData?.calendarConnected) {
          setIsConnected(true);
          setCalendarUser(userData.calendarUser);
        }
      } catch (error) {
        console.error('Error checking saved calendar connection:', error);
      }
    };

    checkSavedConnection();
  }, [user]);

  /**
   * Connects to Google Calendar
   */
  const connectCalendar = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const calendarUserData = await signInToGoogleCalendar();
      
      // Save connection to Firestore
      if (user) {
        await setDoc(
          doc(db, FIREBASE_COLLECTIONS.USERS, user.uid),
          {
            calendarConnected: true,
            calendarUser: calendarUserData,
            calendarConnectedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }

      setIsConnected(true);
      setCalendarUser(calendarUserData);
      
      return calendarUserData;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [user]);

  /**
   * Disconnects from Google Calendar
   */
  const disconnectCalendar = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      await signOutFromGoogleCalendar();
      
      // Remove connection from Firestore
      if (user) {
        await setDoc(
          doc(db, FIREBASE_COLLECTIONS.USERS, user.uid),
          {
            calendarConnected: false,
            calendarUser: null,
            calendarDisconnectedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }

      setIsConnected(false);
      setCalendarUser(null);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [user]);

  /**
   * Adds contest to calendar
   * @param {Object} contest - Contest object
   * @param {number} reminderMinutes - Reminder time in minutes
   */
  const addContestToCalendar = useCallback(async (contest, reminderMinutes = 30) => {
    try {
      if (!isConnected) {
        throw new Error('Calendar not connected');
      }

      setLoading(true);
      setError(null);

      const event = await createCalendarEvent(contest, reminderMinutes);
      
      // Save event reference to Firestore
      if (user) {
        await setDoc(doc(db, FIREBASE_COLLECTIONS.CALENDAR_EVENTS, event.id), {
          eventId: event.id,
          contestId: contest.id,
          userId: user.uid,
          title: contest.title,
          startTime: contest.startTime,
          reminderMinutes,
          createdAt: new Date().toISOString(),
        });
      }

      return event;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [isConnected, user]);

  /**
   * Gets user's calendar events for contests
   */
  const getCalendarEvents = useCallback(async () => {
    try {
      if (!user) return [];

      // This would typically fetch from Google Calendar API
      // For now, we'll return saved events from Firestore
      const userDoc = await getDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid));
      const userData = userDoc.data();
      
      return userData?.calendarEvents || [];
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      throw error;
    }
  }, [user]);

  /**
   * Bulk sync contests to calendar
   * @param {Array} contests - Array of contests to sync
   * @param {number} reminderMinutes - Reminder time in minutes
   */
  const syncContestsToCalendar = useCallback(async (contests, reminderMinutes = 30) => {
    try {
      if (!isConnected) {
        throw new Error('Calendar not connected');
      }

      setLoading(true);
      setError(null);

      const results = [];
      
      for (const contest of contests) {
        try {
          const event = await addContestToCalendar(contest, reminderMinutes);
          results.push({ contest, event, success: true });
        } catch (error) {
          results.push({ contest, error, success: false });
        }
      }

      return results;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [isConnected, addContestToCalendar]);

  return {
    isConnected,
    calendarUser,
    loading,
    error,
    connectCalendar,
    disconnectCalendar,
    addContestToCalendar,
    getCalendarEvents,
    syncContestsToCalendar,
  };
};
