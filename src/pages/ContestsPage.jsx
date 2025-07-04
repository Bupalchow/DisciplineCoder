/**
 * Contests Page
 * Displays all contests with filtering and calendar integration
 */

import { useEffect, useState } from 'react';
import { MainLayout } from '../components/templates';
import { ContestList } from '../components/organisms';
import { useAuthContext } from '../contexts';
import { useContests } from '../hooks/useContests';
import { useGoogleCalendar } from '../hooks/useGoogleCalendar';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants';

/**
 * Contests Page component
 */
const ContestsPage = () => {
  const { user } = useAuthContext();
  const {
    contests,
    loading,
    error,
    fetchContests,
    checkForNewContests,
  } = useContests();
  const {
    isConnected,
    addContestToCalendar,
    getCalendarEvents,
  } = useGoogleCalendar();

  const [calendarEvents, setCalendarEvents] = useState([]);
  const [notification, setNotification] = useState(null);

  // Fetch calendar events when component mounts
  useEffect(() => {
    const loadCalendarEvents = async () => {
      if (isConnected) {
        try {
          const events = await getCalendarEvents();
          setCalendarEvents(events);
        } catch (error) {
          console.error('Error loading calendar events:', error);
        }
      }
    };

    loadCalendarEvents();
  }, [isConnected, getCalendarEvents]);

  // Check for new contests periodically
  useEffect(() => {
    const checkInterval = setInterval(async () => {
      try {
        const newContests = await checkForNewContests();
        if (newContests.length > 0) {
          setNotification({
            type: 'info',
            message: `${newContests.length} new contest${newContests.length > 1 ? 's' : ''} found!`,
          });
        }
      } catch (error) {
        console.error('Error checking for new contests:', error);
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(checkInterval);
  }, [checkForNewContests]);

  const handleAddToCalendar = async (contest) => {
    if (!isConnected) {
      setNotification({
        type: 'error',
        message: ERROR_MESSAGES.CALENDAR_AUTH_ERROR,
      });
      return;
    }

    try {
      await addContestToCalendar(contest);
      
      // Update calendar events
      const events = await getCalendarEvents();
      setCalendarEvents(events);
      
      setNotification({
        type: 'success',
        message: SUCCESS_MESSAGES.CONTEST_ADDED,
      });
    } catch (error) {
      console.error('Error adding contest to calendar:', error);
      setNotification({
        type: 'error',
        message: ERROR_MESSAGES.CALENDAR_SYNC_ERROR,
      });
    }
  };

  const handleRefresh = async () => {
    try {
      await fetchContests();
      setNotification({
        type: 'success',
        message: 'Contests refreshed successfully!',
      });
    } catch (error) {
      console.error('Error refreshing contests:', error);
      setNotification({
        type: 'error',
        message: ERROR_MESSAGES.CONTEST_FETCH_ERROR,
      });
    }
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sign in Required
          </h1>
          <p className="text-gray-600">
            Please sign in to view contests
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Notification */}
      {notification && (
        <div className={`mb-6 p-4 rounded-lg ${
          notification.type === 'success' ? 'bg-green-50 text-green-800' :
          notification.type === 'error' ? 'bg-red-50 text-red-800' :
          'bg-blue-50 text-blue-800'
        }`}>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{notification.message}</p>
            <button
              onClick={() => setNotification(null)}
              className="text-current hover:opacity-75"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Calendar Connection Warning */}
      {!isConnected && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Connect your Google Calendar to add contests to your calendar.
            Go to <span className="font-medium">Settings</span> to set up calendar integration.
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {/* Contest List */}
      <ContestList
        contests={contests}
        loading={loading}
        onAddToCalendar={handleAddToCalendar}
        onRefresh={handleRefresh}
        calendarEvents={calendarEvents}
      />
    </MainLayout>
  );
};

export default ContestsPage;
