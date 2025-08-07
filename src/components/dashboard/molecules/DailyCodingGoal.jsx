/**
 * DailyCodingGoal - Tracks and displays daily coding goals
 * Motivates users to maintain consistent coding practice
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  FireIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';

const DailyCodingGoal = () => {
  const [todayProgress] = useState({
    problemsSolved: 2,
    timeSpent: 45, // minutes
    goalProblems: 3,
    goalTime: 60 // minutes
  });

  const [streak] = useState(5);
  const [motivationalMessage, setMotivationalMessage] = useState('');

  useEffect(() => {
    const messages = [
      "You're doing great! Keep it up! 🚀",
      "Consistency is key to mastery! 💪",
      "Every problem solved is progress! ⭐",
      "You're building great habits! 🎯",
      "Small steps lead to big achievements! 🌟"
    ];
    setMotivationalMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  const problemsProgress = (todayProgress.problemsSolved / todayProgress.goalProblems) * 100;
  const timeProgress = (todayProgress.timeSpent / todayProgress.goalTime) * 100;
  const isGoalComplete = problemsProgress >= 100 && timeProgress >= 100;

  const ProgressBar = ({ progress, color = 'bg-blue-500' }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`${color} h-2 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${Math.min(progress, 100)}%` }}
      ></div>
    </div>
  );

  const GoalItem = ({ icon: Icon, label, current, goal, unit, color, progress }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`h-4 w-4 ${color}`} />
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <span className="text-sm font-bold text-gray-900">
          {current}/{goal} {unit}
        </span>
      </div>
      <ProgressBar progress={progress} color={color.replace('text-', 'bg-')} />
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <ClockIcon className="h-5 w-5 mr-2 text-indigo-600" />
          Today's Goal
        </h3>
        {isGoalComplete ? (
          <CheckCircleIconSolid className="h-6 w-6 text-green-500" />
        ) : (
          <PlayIcon className="h-5 w-5 text-gray-400" />
        )}
      </div>

      {/* Goal Progress */}
      <div className="space-y-4 mb-4">
        <GoalItem
          icon={CheckCircleIcon}
          label="Problems"
          current={todayProgress.problemsSolved}
          goal={todayProgress.goalProblems}
          unit="solved"
          color="text-green-600"
          progress={problemsProgress}
        />
        
        <GoalItem
          icon={ClockIcon}
          label="Time"
          current={todayProgress.timeSpent}
          goal={todayProgress.goalTime}
          unit="min"
          color="text-blue-600"
          progress={timeProgress}
        />
      </div>

      {/* Streak Counter */}
      <div className="flex items-center justify-between py-3 px-3 bg-orange-50 rounded-lg mb-3">
        <div className="flex items-center space-x-2">
          <FireIcon className="h-4 w-4 text-orange-600" />
          <span className="text-sm font-medium text-orange-800">Current Streak</span>
        </div>
        <span className="text-lg font-bold text-orange-600">{streak} days</span>
      </div>

      {/* Goal Status & Motivation */}
      {isGoalComplete ? (
        <div className="text-center py-2 px-3 bg-green-50 rounded-lg">
          <p className="text-sm font-medium text-green-800">🎉 Goal Completed!</p>
          <p className="text-xs text-green-600 mt-1">Amazing work today!</p>
        </div>
      ) : (
        <div className="text-center py-2 px-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-600">{motivationalMessage}</p>
        </div>
      )}

      {/* Quick Action Button */}
      <button 
        className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        onClick={() => {
          // In real app, this would navigate to problem solving
          alert('Let\'s solve some problems! 🚀');
        }}
      >
        {isGoalComplete ? 'Extra Practice' : 'Continue Goal'}
      </button>
    </div>
  );
};

export default DailyCodingGoal;
