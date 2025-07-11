/**
 * Settings Page
 * User settings and preferences
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  UserIcon,
  Cog6ToothIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { MainLayout } from '../components/templates';
import { Card, Button } from '../components/atoms';
import { useAuthContext } from '../contexts';
import { SUCCESS_MESSAGES } from '../constants';

/**
 * Settings Page component
 */
const SettingsPage = () => {
  const { user, signOut } = useAuthContext();
  const [notification, setNotification] = useState(null);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account and preferences</p>
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`p-4 rounded-md ${
            notification.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {notification.message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <UserIcon className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <div className="p-3 bg-gray-50 rounded-md text-gray-900">
                  {user?.displayName || 'Not set'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="p-3 bg-gray-50 rounded-md text-gray-900">
                  {user?.email}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Created
                </label>
                <div className="p-3 bg-gray-50 rounded-md text-gray-900">
                  {user?.metadata?.creationTime 
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : 'Unknown'
                  }
                </div>
              </div>
            </div>
          </Card>

          {/* Learning Preferences */}
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Cog6ToothIcon className="h-6 w-6 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Learning Preferences</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Learning Style
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="sequential">Sequential (Follow roadmap order)</option>
                  <option value="flexible">Flexible (Choose your own path)</option>
                  <option value="mixed">Mixed approach</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Goal
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="1">1 problem per day</option>
                  <option value="2">2 problems per day</option>
                  <option value="3">3 problems per day</option>
                  <option value="5">5 problems per day</option>
                </select>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="showHints"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="showHints" className="ml-2 block text-sm text-gray-700">
                  Show hints by default
                </label>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="showSolutions"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="showSolutions" className="ml-2 block text-sm text-gray-700">
                  Show solutions after completion
                </label>
              </div>

              <Button 
                className="w-full mt-4"
                onClick={() => showNotification(SUCCESS_MESSAGES.SETTINGS_SAVED)}
              >
                Save Preferences
              </Button>
            </div>
          </Card>
        </div>

        {/* Data Management */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <DocumentTextIcon className="h-6 w-6 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">Data Management</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                Coming Soon
              </div>
              <div className="text-sm text-gray-600">Export Progress</div>
              <Button variant="outline" size="sm" className="mt-2" disabled>
                Export Data
              </Button>
            </div>

            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                Coming Soon
              </div>
              <div className="text-sm text-gray-600">Reset Progress</div>
              <Button variant="outline" size="sm" className="mt-2" disabled>
                Reset All
              </Button>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                Coming Soon
              </div>
              <div className="text-sm text-gray-600">Backup & Sync</div>
              <Button variant="outline" size="sm" className="mt-2" disabled>
                Setup Sync
              </Button>
            </div>
          </div>
        </Card>

        {/* Account Actions */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Account Actions</h2>
              <p className="text-gray-600">Manage your account settings</p>
            </div>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
