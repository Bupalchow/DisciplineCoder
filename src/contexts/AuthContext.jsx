/**
 * Authentication Context Provider
 * Provides authentication state and methods throughout the app
 */

import React, { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

/**
 * AuthProvider component
 * Wraps the app to provide authentication context
 */
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
