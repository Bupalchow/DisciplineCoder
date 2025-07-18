/**
 * Challenge History Component
 * @component
 * @description Shows recent completed challenges and performance
 */

import React from 'react';
import { 
  ClockIcon, 
  TrophyIcon,
  CalendarIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const ChallengeHistory = ({ completedChallenges = [] }) => {
  // Show last 5 completed challenges
  const recentChallenges = completedChallenges.slice(-5).reverse();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Too Easy': return 'text-green-600 bg-green-50';
      case 'Just Right': return 'text-blue-600 bg-blue-50';
      case 'Challenging': return 'text-orange-600 bg-orange-50';
      case 'Too Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPerformanceInsight = () => {
    if (recentChallenges.length === 0) return null;

    const recentDifficulties = recentChallenges.map(c => c.difficulty);
    const tooEasyCount = recentDifficulties.filter(d => d === 'Too Easy').length;
    const tooHardCount = recentDifficulties.filter(d => d === 'Too Hard').length;
    const justRightCount = recentDifficulties.filter(d => d === 'Just Right').length;

    if (tooEasyCount > recentChallenges.length / 2) {
      return {
        type: 'suggestion',
        message: '🚀 Consider moving to a higher difficulty level!',
        color: 'bg-green-50 text-green-800 border-green-200'
      };
    }

    if (tooHardCount > recentChallenges.length / 2) {
      return {
        type: 'suggestion',
        message: '💪 These challenges are tough! Keep practicing, you\'re learning!',
        color: 'bg-orange-50 text-orange-800 border-orange-200'
      };
    }

    if (justRightCount > recentChallenges.length / 2) {
      return {
        type: 'encouragement',
        message: '🎯 Perfect difficulty balance! You\'re in the learning zone!',
        color: 'bg-blue-50 text-blue-800 border-blue-200'
      };
    }

    return null;
  };

  const insight = getPerformanceInsight();

  if (recentChallenges.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrophyIcon className="h-5 w-5 mr-2 text-yellow-600" />
          Recent Challenges
        </h3>
        <div className="text-center py-8">
          <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Complete your first challenge to see your history!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <TrophyIcon className="h-5 w-5 mr-2 text-yellow-600" />
        Recent Challenges
      </h3>

      {/* Performance Insight */}
      {insight && (
        <div className={`mb-4 p-3 rounded-lg border ${insight.color}`}>
          <p className="text-sm font-medium">{insight.message}</p>
        </div>
      )}

      {/* Challenge List */}
      <div className="space-y-3">
        {recentChallenges.map((challenge) => (
          <div 
            key={`${challenge.date}-${challenge.challengeId}`}
            className="flex items-start justify-between p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900 text-sm">
                  {challenge.challengeTitle}
                </h4>
                <span className="text-xs text-gray-500">
                  {new Date(challenge.date).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-xs">
                <span className="flex items-center text-gray-600">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {challenge.timeSpent}
                </span>
                <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {challenge.userLevel}
                </span>
              </div>
            </div>
            
            <a
              href={`https://leetcode.com/problems/${challenge.challengeId}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-400 hover:text-gray-600"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      {completedChallenges.length > 5 && (
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All {completedChallenges.length} Challenges
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeHistory;
