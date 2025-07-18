/**
 * Streak Stats Component
 * @component
 * @description Displays streak statistics and milestones
 */

import React from 'react';
import { 
  FireIcon, 
  TrophyIcon, 
  CalendarDaysIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const StreakStats = ({ 
  currentStreak, 
  longestStreak, 
  totalCompleted, 
  streakMilestone 
}) => {
  const { current: currentMilestone, next: nextMilestone, progress } = streakMilestone;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ChartBarIcon className="h-5 w-5 mr-2 text-blue-600" />
        Your Progress
      </h3>

      {/* Main Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FireIcon className="h-6 w-6 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{currentStreak}</div>
          <div className="text-sm text-gray-600">Current Streak</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrophyIcon className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{longestStreak}</div>
          <div className="text-sm text-gray-600">Longest Streak</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <CalendarDaysIcon className="h-6 w-6 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalCompleted}</div>
          <div className="text-sm text-gray-600">Total Completed</div>
        </div>
      </div>

      {/* Current Milestone */}
      {currentMilestone && (
        <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-lg">{currentMilestone.emoji}</span>
            <span className="font-semibold text-gray-900">{currentMilestone.title}</span>
          </div>
          <p className="text-sm text-gray-600">
            Reward: {currentMilestone.reward}
          </p>
        </div>
      )}

      {/* Next Milestone Progress */}
      {nextMilestone && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Next: {nextMilestone.title}
            </span>
            <span className="text-sm text-gray-600">
              {currentStreak}/{nextMilestone.days} days
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            {nextMilestone.days - currentStreak} days to go for {nextMilestone.emoji} {nextMilestone.title}
          </p>
        </div>
      )}

      {/* Motivational Message */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800 font-medium">
          {currentStreak === 0 
            ? "Start your coding journey today! 🚀"
            : currentStreak < 7
            ? "You're building momentum! Keep going! 💪"
            : currentStreak < 30
            ? "Excellent consistency! You're on fire! 🔥"
            : "You're a coding machine! Incredible dedication! 🏆"
          }
        </p>
      </div>
    </div>
  );
};

export default StreakStats;
