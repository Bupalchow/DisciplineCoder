/**
 * Daily Challenge Page
 * @component
 * @description Main page for daily coding challenges with streak tracking
 */

import React from 'react';
import { MainLayout } from '../components/templates';
import DailyChallengeCard from '../components/challenge/molecules/DailyChallengeCard';
import StreakStats from '../components/challenge/molecules/StreakStats';
import ChallengeHistory from '../components/challenge/molecules/ChallengeHistory';
import { useDailyChallenge } from '../hooks/useDailyChallenge';

const DailyChallengePage = () => {
  const {
    currentStreak,
    longestStreak,
    totalCompleted,
    userLevel,
    todaysChallenge,
    isCompleted,
    completedChallenges,
    completeChallenge,
    skipChallenge,
    getStreakMilestone
  } = useDailyChallenge();

  const streakMilestone = getStreakMilestone();

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Coding Challenge 🎯
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build consistent coding habits with our adaptive daily challenges. 
            Track your progress, maintain streaks, and level up your skills!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Challenge - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <DailyChallengeCard
              challenge={todaysChallenge}
              isCompleted={isCompleted}
              currentStreak={currentStreak}
              userLevel={userLevel}
              onComplete={completeChallenge}
              onSkip={skipChallenge}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <StreakStats
              currentStreak={currentStreak}
              longestStreak={longestStreak}
              totalCompleted={totalCompleted}
              streakMilestone={streakMilestone}
            />
          </div>
        </div>

        {/* Challenge History */}
        <div className="max-w-4xl mx-auto">
          <ChallengeHistory completedChallenges={completedChallenges} />
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How Daily Challenges Work 🚀
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Daily Challenge</h3>
              <p className="text-sm text-gray-600">
                Get a new coding challenge every day, tailored to your skill level
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Build Streaks</h3>
              <p className="text-sm text-gray-600">
                Maintain consistency and watch your streak grow day by day
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Level Up</h3>
              <p className="text-sm text-gray-600">
                Adaptive difficulty ensures you're always challenged but not overwhelmed
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tips:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Complete challenges consistently to build and maintain your streak</li>
              <li>• Use hints when stuck, but try to solve independently first</li>
              <li>• Rate difficulty honestly to help us provide better challenges</li>
              <li>• Your level automatically adapts based on your performance</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DailyChallengePage;
