/**
 * Arrays Roadmap Page
 * Specific page for the Arrays learning roadmap
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import { RoadmapContainer } from '../components/roadmap/organisms';
import { ARRAYS_ROADMAP } from '../data/arraysRoadmap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import { Button } from '../components/atoms';

/**
 * ArraysRoadmapPage component
 * Displays the complete Arrays roadmap interface
 */
const ArraysRoadmapPage = () => {
  const {
    progress,
    isLoading,
    updateQuestionStatus,
    resetProgress,
    getProgressStats
  } = useRoadmapProgress(ARRAYS_ROADMAP.id);

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Get progress statistics
  const stats = getProgressStats(ARRAYS_ROADMAP);

  // Handle reset confirmation
  const handleResetProgress = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AcademicCapIcon className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                to="/roadmap"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Roadmaps</span>
              </Link>
            </div>

            {/* Page Title */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <h1 className="text-xl font-semibold text-gray-900">
                  Arrays Roadmap
                </h1>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ChartBarIcon className="h-4 w-4" />
                <span>{stats.percentage}% Complete</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowResetConfirm(true)}
                className="text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
              >
                Reset Progress
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Questions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-green-600 rounded-full"></div>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-yellow-600 rounded-full"></div>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Progress</p>
                <p className="text-2xl font-bold text-purple-600">{stats.percentage}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Container */}
        <RoadmapContainer
          roadmapData={ARRAYS_ROADMAP}
          progress={progress}
          onQuestionStatusChange={updateQuestionStatus}
          progressStats={stats}
        />
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Reset Progress
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to reset all your Arrays roadmap progress? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleResetProgress}
                className="bg-red-600 hover:bg-red-700"
              >
                Reset Progress
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArraysRoadmapPage;
