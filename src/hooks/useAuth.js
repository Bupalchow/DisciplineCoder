/**
 * Authentication hook using Firebase Auth
 */

import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { FIREBASE_COLLECTIONS } from '../constants';

/**
 * Custom hook for authentication
 * @returns {Object} Auth state and methods
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useAuth: Initializing authentication...');
    
    // Skip auth initialization if Firebase is not available
    if (!auth || !db) {
      console.log('Firebase not available, using local auth state');
      
      // Check for stored user in localStorage for demo purposes
      const storedUser = localStorage.getItem('demo_user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          console.log('Demo user loaded from localStorage:', userData);
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('demo_user');
        }
      } else {
        console.log('No demo user found in localStorage');
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // Get additional user data from Firestore
          try {
            const userDoc = await getDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid));
            const userData = userDoc.exists() ? userDoc.data() : {};
            
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified,
              createdAt: user.metadata.creationTime,
              lastLoginAt: user.metadata.lastSignInTime,
              ...userData,
            });
          } catch (firestoreError) {
            console.warn('Firestore unavailable, using basic user data:', firestoreError.message);
            // Fall back to basic user data without Firestore
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified,
              createdAt: user.metadata.creationTime,
              lastLoginAt: user.metadata.lastSignInTime,
            });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  /**
   * Signs up a new user
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {string} displayName - User display name
   * @returns {Promise<Object>} User object
   */
  const signUp = async (email, password, displayName) => {
    try {
      setLoading(true);
      setError(null);

      if (!auth || !db) {
        // Demo mode - create a mock user and store in localStorage
        const mockUser = {
          uid: 'demo_' + Date.now(),
          email: email,
          displayName: displayName,
          photoURL: null,
          emailVerified: true,
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          settings: {
            reminderMinutes: 30,
            autoSync: true,
            emailNotifications: true,
          },
        };
        
        localStorage.setItem('demo_user', JSON.stringify(mockUser));
        setUser(mockUser);
        console.log('Demo user created and stored:', mockUser);
        return mockUser;
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile
      await updateProfile(user, { displayName });

      // Create user document in Firestore
      try {
        await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid), {
          email: user.email,
          displayName: displayName,
          createdAt: new Date().toISOString(),
          settings: {
            reminderMinutes: 30,
            autoSync: true,
            emailNotifications: true,
          },
        });
      } catch (firestoreError) {
        console.warn('Failed to create user document in Firestore:', firestoreError.message);
        // Continue without throwing - the auth user was created successfully
      }

      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Signs in an existing user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} User object
   */
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      if (!auth) {
        // Demo mode - check if user exists in localStorage or create one
        const storedUser = localStorage.getItem('demo_user');
        let mockUser;
        
        if (storedUser) {
          mockUser = JSON.parse(storedUser);
          // Update last login time
          mockUser.lastLoginAt = new Date().toISOString();
        } else {
          // Create a demo user if none exists
          mockUser = {
            uid: 'demo_' + Date.now(),
            email: email,
            displayName: email.split('@')[0],
            photoURL: null,
            emailVerified: true,
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            settings: {
              reminderMinutes: 30,
              autoSync: true,
              emailNotifications: true,
            },
          };
        }
        
        localStorage.setItem('demo_user', JSON.stringify(mockUser));
        setUser(mockUser);
        console.log('Demo user signed in and stored:', mockUser);
        return mockUser;
      }

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Signs in with Google
   * @returns {Promise<Object>} User object
   */
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!auth) {
        // Demo mode - create a mock Google user
        const mockUser = {
          uid: 'demo_google_' + Date.now(),
          email: 'demo@google.com',
          displayName: 'Demo Google User',
          photoURL: 'https://via.placeholder.com/150',
          emailVerified: true,
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          settings: {
            reminderMinutes: 30,
            autoSync: true,
            emailNotifications: true,
          },
        };
        
        localStorage.setItem('demo_user', JSON.stringify(mockUser));
        setUser(mockUser);
        console.log('Demo Google user signed in and stored:', mockUser);
        return mockUser;
      }

      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      // Check if user document exists, create if not
      if (db) {
        try {
          const userDoc = await getDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid));
          
          if (!userDoc.exists()) {
            await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid), {
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              createdAt: new Date().toISOString(),
              settings: {
                reminderMinutes: 30,
                autoSync: true,
                emailNotifications: true,
              },
            });
          }
        } catch (firestoreError) {
          console.warn('Failed to create user document in Firestore:', firestoreError.message);
          // Continue without throwing - the auth user was created successfully
        }
      }

      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Signs out the current user
   */
  const signOutUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!auth) {
        // Demo mode - clear localStorage and user state
        localStorage.removeItem('demo_user');
        setUser(null);
        console.log('Demo user signed out and localStorage cleared');
        return;
      }
      
      await signOut(auth);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Updates user profile
   * @param {Object} updates - Profile updates
   */
  const updateUserProfile = async (updates) => {
    try {
      setLoading(true);
      setError(null);

      if (updates.displayName || updates.photoURL) {
        await updateProfile(auth.currentUser, updates);
      }

      // Update Firestore document
      await setDoc(
        doc(db, FIREBASE_COLLECTIONS.USERS, auth.currentUser.uid),
        updates,
        { merge: true }
      );
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signInWithGoogle,
    signOut: signOutUser,
    updateProfile: updateUserProfile,
  };
};
