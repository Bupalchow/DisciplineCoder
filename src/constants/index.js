/**
 * API endpoints and configuration constants
 */

// API Base URLs
export const API_ENDPOINTS = {
  LEETCODE_CONTESTS: 'https://leetcode.com/api/problems/contest/',
  LEETCODE_GRAPHQL: 'https://leetcode.com/graphql',
  GOOGLE_CALENDAR: 'https://www.googleapis.com/calendar/v3',
};

// Contest Types
export const CONTEST_TYPES = {
  WEEKLY: 'weekly',
  BIWEEKLY: 'biweekly',
  OTHER: 'other',
};

// Calendar Settings
export const CALENDAR_SETTINGS = {
  REMINDER_MINUTES: [15, 30, 60, 120], // Options for reminder time
  DEFAULT_REMINDER: 30,
  CONTEST_DURATION: 90, // Default contest duration in minutes
};

// Firebase Collections
export const FIREBASE_COLLECTIONS = {
  USERS: 'users',
  USER_SETTINGS: 'userSettings',
  CONTESTS: 'contests',
  CALENDAR_EVENTS: 'calendarEvents',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  AUTH_ERROR: 'Authentication failed. Please sign in again.',
  CALENDAR_AUTH_ERROR: 'Failed to connect to Google Calendar. Please authorize access.',
  CONTEST_FETCH_ERROR: 'Failed to fetch contest data. Please try again later.',
  CALENDAR_SYNC_ERROR: 'Failed to sync with calendar. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CALENDAR_CONNECTED: 'Google Calendar connected successfully!',
  CONTEST_ADDED: 'Contest added to calendar successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'DisciplineCoder',
  VERSION: '1.0.0',
  DESCRIPTION: 'LeetCode Contest Calendar Integration',
};
