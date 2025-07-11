/**
 * Stack Roadmap Page
 * Specific page for the Stack learning roadmap
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
import { STACK_ROADMAP } from '../data/stackRoadmap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import { Button } from '../components/atoms';

/**
 * StackRoadmapPage component
 * Displays the complete Stack roadmap interface
 */
const StackRoadmapPage = () => {
  const {
    progress,
    isLoading,
    updateQuestionStatus,
    resetProgress,
    getProgressStats
  } = useRoadmapProgress(STACK_ROADMAP.id);

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const progressStats = getProgressStats(STACK_ROADMAP);

  const handleResetProgress = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
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
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Roadmaps</span>
              </Link>
            </div>

            {/* Progress Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <ChartBarIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {progressStats.completed}/{progressStats.total} Completed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpenIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {Math.round((progressStats.completed / progressStats.total) * 100)}% Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Roadmap Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">🥞</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{STACK_ROADMAP.title}</h1>
              <p className="text-gray-600 mt-1">{STACK_ROADMAP.description}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <AcademicCapIcon className="h-4 w-4" />
              <span>{STACK_ROADMAP.estimatedTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="h-4 w-4" />
              <span>{STACK_ROADMAP.totalQuestions} Questions</span>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowResetConfirm(true)}
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Reset Progress
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{progressStats.completed}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{progressStats.inProgress}</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">{progressStats.notStarted}</div>
              <div className="text-sm text-gray-600">Not Started</div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-medium text-gray-900">
                {Math.round((progressStats.completed / progressStats.total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progressStats.completed / progressStats.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Reset Progress
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to reset all your progress? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleResetProgress}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Container */}
        <RoadmapContainer
          roadmapData={STACK_ROADMAP}
          progress={progress}
          onUpdateQuestionStatus={updateQuestionStatus}
        />
      </div>
    </div>
  );
};

export default StackRoadmapPage;
