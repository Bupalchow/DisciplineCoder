/**
 * LeetCode API utility functions
 */

import axios from 'axios';
import { API_ENDPOINTS } from '../constants';

/**
 * Fetches upcoming LeetCode contests
 * @returns {Promise<Array>} Array of contest objects
 */
export const fetchLeetCodeContests = async () => {
  try {
    // LeetCode GraphQL query for contests
    const query = `
      query contestsList {
        contestUpcomingContests {
          title
          titleSlug
          startTime
          duration
          description
          cardImg
        }
      }
    `;

    const response = await axios.post(
      API_ENDPOINTS.LEETCODE_GRAPHQL,
      {
        query,
        variables: {},
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'DisciplineCoder/1.0',
        },
      }
    );

    const contests = response.data?.data?.contestUpcomingContests || [];
    
    // Transform the data to our format
    return contests.map(contest => ({
      id: contest.titleSlug,
      title: contest.title,
      slug: contest.titleSlug,
      startTime: new Date(contest.startTime * 1000), // Convert Unix timestamp
      duration: contest.duration, // Duration in seconds
      description: contest.description || `Join the ${contest.title} contest on LeetCode`,
      imageUrl: contest.cardImg,
      url: `https://leetcode.com/contest/${contest.titleSlug}/`,
      type: getContestType(contest.title),
    }));
  } catch (error) {
    console.error('Error fetching LeetCode contests:', error);
    
    // Fallback: Return mock data for development
    return getMockContests();
  }
};

/**
 * Determines contest type based on title
 * @param {string} title - Contest title
 * @returns {string} Contest type
 */
const getContestType = (title) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('weekly')) {
    return 'weekly';
  } else if (titleLower.includes('biweekly')) {
    return 'biweekly';
  } else {
    return 'other';
  }
};

/**
 * Mock contest data for development
 * @returns {Array} Mock contest data
 */
const getMockContests = () => {
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const nextBiweekly = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  return [
    {
      id: 'weekly-contest-XXX',
      title: 'Weekly Contest XXX',
      slug: 'weekly-contest-XXX',
      startTime: nextWeek,
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Weekly Contest XXX on LeetCode',
      imageUrl: 'https://assets.leetcode.com/contest/weekly-contest.png',
      url: 'https://leetcode.com/contest/weekly-contest-XXX/',
      type: 'weekly',
    },
    {
      id: 'biweekly-contest-YYY',
      title: 'Biweekly Contest YYY',
      slug: 'biweekly-contest-YYY',
      startTime: nextBiweekly,
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Biweekly Contest YYY on LeetCode',
      imageUrl: 'https://assets.leetcode.com/contest/biweekly-contest.png',
      url: 'https://leetcode.com/contest/biweekly-contest-YYY/',
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
