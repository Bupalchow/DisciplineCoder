/**
 * Date and time utility functions
 */

import { format, parseISO, addMinutes, isAfter, isBefore } from 'date-fns';

/**
 * Formats a date for display
 * @param {Date|string} date - Date to format
 * @param {string} formatString - Format string (default: 'MMM dd, yyyy HH:mm')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, formatString = 'MMM dd, yyyy HH:mm') => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatString);
};

/**
 * Formats date for calendar API
 * @param {Date|string} date - Date to format
 * @returns {string} ISO string for calendar API
 */
export const formatDateForCalendar = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return dateObj.toISOString();
};

/**
 * Calculates contest end time
 * @param {Date|string} startTime - Contest start time
 * @param {number} durationMinutes - Contest duration in minutes (default: 90)
 * @returns {Date} Contest end time
 */
export const calculateEndTime = (startTime, durationMinutes = 90) => {
  const startDate = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  return addMinutes(startDate, durationMinutes);
};

/**
 * Checks if a contest is upcoming
 * @param {Date|string} startTime - Contest start time
 * @returns {boolean} True if contest is upcoming
 */
export const isUpcoming = (startTime) => {
  const startDate = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  return isAfter(startDate, new Date());
};

/**
 * Checks if a contest is currently running
 * @param {Date|string} startTime - Contest start time
 * @param {Date|string} endTime - Contest end time
 * @returns {boolean} True if contest is currently running
 */
export const isContestRunning = (startTime, endTime) => {
  const now = new Date();
  const start = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  const end = typeof endTime === 'string' ? parseISO(endTime) : endTime;
  
  return isAfter(now, start) && isBefore(now, end);
};

/**
 * Gets relative time until contest
 * @param {Date|string} startTime - Contest start time
 * @returns {string} Relative time string
 */
export const getTimeUntilContest = (startTime) => {
  const start = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  const now = new Date();
  const diffMs = start.getTime() - now.getTime();
  
  if (diffMs < 0) return 'Contest has started';
  
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} remaining`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} remaining`;
  } else {
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} remaining`;
  }
};
