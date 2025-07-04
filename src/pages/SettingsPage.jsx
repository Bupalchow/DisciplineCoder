/**
 * Settings Page
 * User preferences and calendar configuration
 */

import { useState, useEffect } from 'react';
import { MainLayout } from '../components/templates';
import { Card, Button, Input, Badge } from '../components/atoms';
import { CalendarConnectionStatus } from '../components/molecules';
import { useAuthContext } from '../contexts';
import { useGoogleCalendar } from '../hooks/useGoogleCalendar';
import { CALENDAR_SETTINGS, SUCCESS_MESSAGES } from '../constants';

/**
 * Settings Page component
 */
const SettingsPage = () => {
  const { user, updateProfile } = useAuthContext();
  const {
    isConnected,
    calendarUser,
    loading: calendarLoading,
    connectCalendar,
    disconnectCalendar,
  } = useGoogleCalendar();

  const [settings, setSettings] = useState({
    reminderMinutes: CALENDAR_SETTINGS.DEFAULT_REMINDER,
    autoSync: true,
    emailNotifications: true,
  });
  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Load user settings
  useEffect(() => {
    if (user) {
      setProfile({
        displayName: user.displayName || '',
        email: user.email || '',
      });
      
      if (user.settings) {
        setSettings(prev => ({
          ...prev,
          ...user.settings,
        }));
      }
    }
  }, [user]);

  const handleSettingsChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveSettings = async () => {
    try {
      setLoading(true);
      
      await updateProfile({
        displayName: profile.displayName,
        settings,
      });
      
      setNotification({
        type: 'success',
        message: SUCCESS_MESSAGES.SETTINGS_SAVED,
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      setNotification({
        type: 'error',
        message: 'Failed to save settings. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConnectCalendar = async () => {
    try {
      await connectCalendar();
      setNotification({
        type: 'success',
        message: SUCCESS_MESSAGES.CALENDAR_CONNECTED,
      });
    } catch (error) {
      console.error('Error connecting calendar:', error);
      setNotification({
        type: 'error',
        message: 'Failed to connect calendar. Please try again.',
      });
    }
  };

  const handleDisconnectCalendar = async () => {
    try {
      await disconnectCalendar();
      setNotification({
        type: 'success',
        message: 'Calendar disconnected successfully!',
      });
    } catch (error) {
      console.error('Error disconnecting calendar:', error);
      setNotification({
        type: 'error',
        message: 'Failed to disconnect calendar. Please try again.',
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
            Please sign in to access settings
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage your account and preferences
          </p>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`p-4 rounded-lg ${
            notification.type === 'success' ? 'bg-green-50 text-green-800' :
            'bg-red-50 text-red-800'
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

        {/* Profile Settings */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Profile Information
          </h2>
          
          <div className="space-y-4">
            <Input
              label="Display Name"
              value={profile.displayName}
              onChange={(e) => handleProfileChange('displayName', e.target.value)}
              placeholder="Enter your display name"
            />
            
            <Input
              label="Email Address"
              value={profile.email}
              disabled
              className="bg-gray-50"
            />
            
            <p className="text-sm text-gray-600">
              Email address cannot be changed. Contact support if you need to update it.
            </p>
          </div>
        </Card>

        {/* Calendar Integration */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Calendar Integration
          </h2>
          
          <div className="space-y-4">
            <CalendarConnectionStatus
              isConnected={isConnected}
              calendarUser={calendarUser}
              onConnect={handleConnectCalendar}
              onDisconnect={handleDisconnectCalendar}
              loading={calendarLoading}
            />
            
            {isConnected && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Calendar Connected!</strong> Contest events will be automatically 
                  added to your Google Calendar.
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Contest Preferences */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contest Preferences
          </h2>
          
          <div className="space-y-6">
            {/* Reminder Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Reminder Time
              </label>
              <select
                value={settings.reminderMinutes}
                onChange={(e) => handleSettingsChange('reminderMinutes', parseInt(e.target.value))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                {CALENDAR_SETTINGS.REMINDER_MINUTES.map(minutes => (
                  <option key={minutes} value={minutes}>
                    {minutes} minutes before
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-600 mt-1">
                How long before contests should you be reminded?
              </p>
            </div>

            {/* Auto Sync */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Auto Sync</h3>
                <p className="text-sm text-gray-600">
                  Automatically add new contests to calendar
                </p>
              </div>
              <button
                onClick={() => handleSettingsChange('autoSync', !settings.autoSync)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.autoSync ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.autoSync ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">
                  Receive email reminders for contests
                </p>
              </div>
              <button
                onClick={() => handleSettingsChange('emailNotifications', !settings.emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Account Information */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Account Information
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Account Status</span>
              <Badge variant="success">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Member Since</span>
              <span className="text-sm text-gray-900">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Last Sign In</span>
              <span className="text-sm text-gray-900">
                {user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSaveSettings}
            loading={loading}
            className="px-8"
          >
            Save Settings
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
