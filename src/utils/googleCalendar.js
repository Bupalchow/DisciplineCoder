/**
 * Google Calendar API utility functions
 */

/**
 * Initializes Google Calendar API
 * @returns {Promise<boolean>} Success status
 */
export const initializeGoogleCalendar = async () => {
  try {
    // Load Google API
    await loadGoogleAPI();
    
    // Initialize the API
    await window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      });
    });
    
    return true;
  } catch (error) {
    console.error('Error initializing Google Calendar API:', error);
    return false;
  }
};

/**
 * Loads Google API script
 * @returns {Promise<void>}
 */
const loadGoogleAPI = () => {
  return new Promise((resolve, reject) => {
    if (window.gapi) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

/**
 * Signs in user to Google Calendar
 * @returns {Promise<Object>} User info and access token
 */
export const signInToGoogleCalendar = async () => {
  try {
    const authInstance = window.gapi.auth2.getAuthInstance();
    const user = await authInstance.signIn();
    
    const profile = user.getBasicProfile();
    const accessToken = user.getAuthResponse().access_token;
    
    return {
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl(),
      accessToken,
    };
  } catch (error) {
    console.error('Error signing in to Google Calendar:', error);
    throw new Error('Failed to sign in to Google Calendar');
  }
};

/**
 * Signs out user from Google Calendar
 * @returns {Promise<void>}
 */
export const signOutFromGoogleCalendar = async () => {
  try {
    const authInstance = window.gapi.auth2.getAuthInstance();
    await authInstance.signOut();
  } catch (error) {
    console.error('Error signing out from Google Calendar:', error);
    throw new Error('Failed to sign out from Google Calendar');
  }
};

/**
 * Creates a calendar event
 * @param {Object} contest - Contest object
 * @param {number} reminderMinutes - Reminder time in minutes
 * @returns {Promise<Object>} Created event
 */
export const createCalendarEvent = async (contest, reminderMinutes = 30) => {
  try {
    const startDateTime = new Date(contest.startTime);
    const endDateTime = new Date(startDateTime.getTime() + (contest.duration * 1000));
    
    const event = {
      summary: contest.title,
      description: `${contest.description}\n\nContest URL: ${contest.url}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: reminderMinutes },
          { method: 'email', minutes: reminderMinutes },
        ],
      },
      location: 'LeetCode Online Contest',
      colorId: '9', // Blue color for contests
    };

    const response = await window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    return response.result;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw new Error('Failed to create calendar event');
  }
};

/**
 * Gets user's calendar list
 * @returns {Promise<Array>} Array of calendars
 */
export const getUserCalendars = async () => {
  try {
    const response = await window.gapi.client.calendar.calendarList.list();
    return response.result.items || [];
  } catch (error) {
    console.error('Error fetching calendars:', error);
    throw new Error('Failed to fetch calendars');
  }
};

/**
 * Checks if user is signed in to Google Calendar
 * @returns {boolean} Sign-in status
 */
export const isSignedInToGoogleCalendar = () => {
  try {
    const authInstance = window.gapi?.auth2?.getAuthInstance();
    return authInstance?.isSignedIn?.get() || false;
  } catch (error) {
    console.error('Error checking Google Calendar sign-in status:', error);
    return false;
  }
};
