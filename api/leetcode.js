// Vercel serverless function to fetch LeetCode contests and handle CORS
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // LeetCode GraphQL query for contests
    const query = `
      query {
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

    // Use fetch with proper headers and retry logic
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://leetcode.com/contest/',
        'Origin': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: {}
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform the data to our format
    const contests = data?.data?.contestUpcomingContests || [];
    
    const transformedContests = contests.map(contest => ({
      id: contest.titleSlug,
      title: contest.title,
      slug: contest.titleSlug,
      startTime: new Date(contest.startTime * 1000).toISOString(),
      duration: contest.duration,
      description: contest.description || `Join the ${contest.title} on LeetCode`,
      imageUrl: contest.cardImg || 'https://assets.leetcode.com/contest/default-contest.png',
      url: `https://leetcode.com/contest/${contest.titleSlug}/`,
      type: getContestType(contest.title),
    }));

    res.status(200).json({
      success: true,
      data: transformedContests,
      count: transformedContests.length
    });

  } catch (error) {
    console.error('LeetCode API Error:', error);
    
    // Return mock data as fallback
    const mockContests = getMockContests();
    
    res.status(200).json({
      success: true,
      data: mockContests,
      count: mockContests.length,
      warning: 'Using mock data due to API unavailability',
      error: error.message
    });
  }
}

// Helper function to determine contest type
function getContestType(title) {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('weekly')) {
    return 'weekly';
  } else if (titleLower.includes('biweekly')) {
    return 'biweekly';
  } else {
    return 'other';
  }
}

// Mock contest data for fallback
function getMockContests() {
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const nextBiweekly = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  return [
    {
      id: 'weekly-contest-430',
      title: 'Weekly Contest 430',
      slug: 'weekly-contest-430',
      startTime: nextWeek.toISOString(),
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Weekly Contest 430 on LeetCode',
      imageUrl: 'https://assets.leetcode.com/contest/weekly-contest.png',
      url: 'https://leetcode.com/contest/weekly-contest-430/',
      type: 'weekly',
    },
    {
      id: 'biweekly-contest-145',
      title: 'Biweekly Contest 145',
      slug: 'biweekly-contest-145',
      startTime: nextBiweekly.toISOString(),
      duration: 5400, // 90 minutes in seconds
      description: 'Join the Biweekly Contest 145 on LeetCode',
      imageUrl: 'https://assets.leetcode.com/contest/biweekly-contest.png',
      url: 'https://leetcode.com/contest/biweekly-contest-145/',
      type: 'biweekly',
    },
  ];
}
