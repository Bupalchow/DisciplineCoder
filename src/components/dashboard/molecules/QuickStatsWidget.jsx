/**
 * QuickStatsWidget - Shows coding progress stats at a glance
 * Small feature to make the dashboard more engaging
 */

import React from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  FireIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

const QuickStatsWidget = () => {
  // Mock data - in real app this would come from user progress
  const stats = {
    problemsSolved: 47,
    currentStreak: 5,
    totalHours: 23,
    rank: 'Bronze'
  };

  const StatItem = ({ icon: Icon, label, value, color = 'text-gray-600' }) => (
    <div className="flex items-center space-x-2">
      <Icon className={`h-5 w-5 ${color}`} />
      <div>
        <p className="text-sm font-medium text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-600" />
        Quick Stats
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <StatItem 
          icon={TrophyIcon}
          label="Problems Solved"
          value={stats.problemsSolved}
          color="text-yellow-600"
        />
        <StatItem 
          icon={FireIcon}
          label="Current Streak"
          value={`${stats.currentStreak} days`}
          color="text-orange-600"
        />
        <StatItem 
          icon={ClockIcon}
          label="Total Hours"
          value={stats.totalHours}
          color="text-blue-600"
        />
        <StatItem 
          icon={ChartBarIcon}
          label="Rank"
          value={stats.rank}
          color="text-green-600"
        />
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Keep coding to improve your stats! 🚀
        </p>
      </div>
    </div>
  );
};

export default QuickStatsWidget;
