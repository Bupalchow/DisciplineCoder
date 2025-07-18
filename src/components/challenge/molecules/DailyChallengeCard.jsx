/**
 * Daily Challenge Card Component
 * @component
 * @description Displays today's coding challenge with interactive elements
 */

import React, { useState } from 'react';
import { 
  ClockIcon, 
  FireIcon,
  TrophyIcon,
  PlayIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../atoms';

const DailyChallengeCard = ({ 
  challenge, 
  isCompleted, 
  currentStreak, 
  userLevel,
  onComplete,
  onSkip 
}) => {
  const [showHints, setShowHints] = useState(false);
  const [timeSpent, setTimeSpent] = useState('');
  const [difficulty, setDifficulty] = useState('');

  if (!challenge) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    if (timeSpent && difficulty) {
      onComplete(timeSpent, difficulty);
    }
  };

  const getDifficultyColor = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'text-blue-600 bg-blue-50';
      case 'intermediate': return 'text-purple-600 bg-purple-50';
      case 'advanced': return 'text-orange-600 bg-orange-50';
      case 'expert': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              📅 Daily Challenge
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FireIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  {currentStreak} day streak
                </span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(userLevel)}`}>
                {userLevel.charAt(0).toUpperCase() + userLevel.slice(1)}
              </div>
            </div>
          </div>
          {isCompleted && (
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          )}
        </div>
      </div>

      {/* Challenge Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {challenge.title}
            </h4>
            <p className="text-gray-600 mb-3">
              {challenge.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center">
                <ClockIcon className="h-3 w-3 mr-1" />
                {challenge.estimatedTime}
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {challenge.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>

            <div className="mb-4">
              <h5 className="text-sm font-medium text-gray-900 mb-2">Key Concepts:</h5>
              <div className="flex flex-wrap gap-1">
                {challenge.concepts.map((concept, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hints Section */}
        <div className="mb-6">
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <LightBulbIcon className="h-4 w-4" />
            <span>{showHints ? 'Hide Hints' : 'Show Hints'}</span>
          </button>
          
          {showHints && (
            <div className="mt-3 p-4 bg-yellow-50 rounded-lg">
              <h6 className="text-sm font-medium text-yellow-800 mb-2">💡 Hints:</h6>
              <ol className="text-sm text-yellow-700 space-y-1">
                {challenge.hints.map((hint, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2 font-medium">{index + 1}.</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Action Area */}
        {!isCompleted ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Spent
                </label>
                <select
                  value={timeSpent}
                  onChange={(e) => setTimeSpent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select time</option>
                  <option value="< 15 min">Under 15 minutes</option>
                  <option value="15-30 min">15-30 minutes</option>
                  <option value="30-45 min">30-45 minutes</option>
                  <option value="45+ min">45+ minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How difficult was it?
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Rate difficulty</option>
                  <option value="Too Easy">Too Easy</option>
                  <option value="Just Right">Just Right</option>
                  <option value="Challenging">Challenging</option>
                  <option value="Too Hard">Too Hard</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a
                href={challenge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-center">
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Start Challenge
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <Button
                onClick={handleComplete}
                disabled={!timeSpent || !difficulty}
                className="bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                Complete
              </Button>
            </div>
            
            <button
              onClick={onSkip}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              Skip today (breaks streak)
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Challenge Completed! 🎉
            </h4>
            <p className="text-gray-600 mb-4">
              Great job! Come back tomorrow for your next challenge.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FireIcon className="h-4 w-4 text-orange-500 mr-1" />
                <span>{currentStreak} day streak</span>
              </div>
              <div className="flex items-center">
                <TrophyIcon className="h-4 w-4 text-yellow-500 mr-1" />
                <span>Level: {userLevel}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyChallengeCard;
