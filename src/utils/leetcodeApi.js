/**
 * LeetCode API utility functions
 */

import axios from 'axios';

/**
 * Fetches upcoming LeetCode contests
 * @returns {Promise<Array>} Array of contest objects
 */
export const fetchLeetCodeContests = async () => {
  try {
    // In production, always use our serverless function
    if (import.meta.env.PROD || window.location.hostname !== 'localhost') {
      try {
        // Try primary endpoint first
        const response = await axios.get('/api/leetcode');
        
        if (response.data.success && response.data.data.length > 0) {
          return response.data.data;
        }
        
        // If primary fails or returns no data, try alternative
        const altResponse = await axios.get('/api/leetcode-alternative');
        
        if (altResponse.data.success) {
          return altResponse.data.data;
        }
        
        throw new Error('Both endpoints failed');
      } catch (apiError) {
        console.warn('Production API failed, using mock data:', apiError.message);
        return getMockContests();
      }
    } else {
      // Development mode - show mock data immediately to avoid CORS issues
      console.log('Development mode: Using mock contest data');
      return getMockContests();
    }
  } catch (error) {
    console.error('Error fetching LeetCode contests:', error);
    return getMockContests();
  }
};

/**
 * Mock contest data for development
 * @returns {Array} Mock contest data
 */
const getMockContests = () => {
  const now = new Date();
  
  // Calculate next Sunday 10:30 AM EST for weekly contest
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + (7 - now.getDay()));
  nextSunday.setHours(10, 30, 0, 0); // 10:30 AM EST
  
  // Calculate next Saturday 8:00 AM EST for biweekly contest  
  const nextSaturday = new Date(now);
  nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7) + 7); // Next Saturday after next week
  nextSaturday.setHours(8, 0, 0, 0); // 8:00 AM EST

  return [
    {
      id: 'weekly-contest-430',
      title: 'Weekly Contest 430',
      slug: 'weekly-contest-430',
      startTime: nextSunday,
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Weekly Contest 430 on LeetCode. Four challenging problems to solve in 90 minutes.',
      imageUrl: 'https://assets.leetcode.com/contest/weekly-contest.png',
      url: 'https://leetcode.com/contest/weekly-contest-430/',
      type: 'weekly',
    },
    {
      id: 'biweekly-contest-145',
      title: 'Biweekly Contest 145',
      slug: 'biweekly-contest-145',
      startTime: nextSaturday,
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Biweekly Contest 145 on LeetCode. Four challenging problems to solve in 90 minutes.',
      imageUrl: 'https://assets.leetcode.com/contest/biweekly-contest.png',
      url: 'https://leetcode.com/contest/biweekly-contest-145/',
      type: 'biweekly',
    },
  ];
};

/**
 * Checks if new contests are available
 * @param {Array} currentContests - Current contests
 * @param {Array} newContests - New contests from API
 * @returns {Array} Array of new contests
 */
export const getNewContests = (currentContests, newContests) => {
  const currentIds = new Set(currentContests.map(contest => contest.id));
  return newContests.filter(contest => !currentIds.has(contest.id));
};
