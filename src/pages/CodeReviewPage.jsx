/**
 * AI Code Review & Optimization Studio Page
 * Main page for submitting code and viewing analysis results
 */

import { useState } from 'react';
import { useCodeReview } from '../hooks/useCodeReview';
import MainLayout from '../components/templates/MainLayout';
import AIStatusIndicator from '../components/codeReview/atoms/AIStatusIndicator';
import AISetupGuide from '../components/codeReview/atoms/AISetupGuide';
import {
  CodeSubmissionForm,
  ReviewAnalysis,
  ReviewHistory,
  ReviewStatistics,
} from '../components/codeReview/molecules';

/**
 * Tab navigation component
 */
const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'submit', label: 'Submit Code', icon: '📝' },
    { id: 'results', label: 'Latest Results', icon: '📊' },
    { id: 'history', label: 'History', icon: '📚' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

/**
 * Welcome section component
 */
const WelcomeSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">
        🤖 AI Code Review & Optimization Studio
      </h1>
      <p className="text-lg text-blue-100 mb-6">
        Get instant, intelligent feedback on your code. Our AI analyzes time complexity, 
        space complexity, code quality, and best practices to help you become a better programmer.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold mb-1">Performance Analysis</h3>
          <p className="text-sm text-blue-100">
            Detailed time & space complexity evaluation
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">🔍</div>
          <h3 className="font-semibold mb-1">Quality Assessment</h3>
          <p className="text-sm text-blue-100">
            Code quality and best practices review
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">💡</div>
          <h3 className="font-semibold mb-1">Optimization Tips</h3>
          <p className="text-sm text-blue-100">
            Practical suggestions for improvement
          </p>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Analysis in progress component
 */
const AnalysisInProgress = () => (
  <div className="bg-white rounded-lg shadow-md p-8 text-center">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Analyzing Your Code...
    </h3>
    <p className="text-gray-600 mb-4">
      Our AI is reviewing your solution for performance, quality, and best practices.
    </p>
    <div className="bg-gray-100 rounded-lg p-4 max-w-md mx-auto">
      <div className="flex items-center justify-between text-sm">
        <span>✅ Syntax Analysis</span>
        <span className="text-green-600">Complete</span>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span>⏱️ Complexity Analysis</span>
        <span className="text-blue-600">In Progress...</span>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span>🔍 Quality Review</span>
        <span className="text-gray-400">Pending</span>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span>💡 Optimization</span>
        <span className="text-gray-400">Pending</span>
      </div>
    </div>
  </div>
);

/**
 * Main Code Review Page Component
 */
export const CodeReviewPage = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [selectedReviewId, setSelectedReviewId] = useState(null);

  const {
    reviewHistory,
    statistics,
    isAnalyzing,
    error,
    submitCodeForReview,
    getReviewById,
    deleteReview,
    clearAllReviews,
    programmingLanguages,
    sampleProblems,
    latestReview,
  } = useCodeReview();

  const handleCodeSubmit = async (codeData) => {
    try {
      const reviewId = await submitCodeForReview(codeData);
      if (reviewId) {
        setSelectedReviewId(reviewId);
        setActiveTab('results');
      }
    } catch (error) {
      console.error('Failed to submit code:', error);
    }
  };

  const handleViewDetails = (reviewId) => {
    setSelectedReviewId(reviewId);
    setActiveTab('results');
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      deleteReview(reviewId);
      if (selectedReviewId === reviewId) {
        setSelectedReviewId(null);
      }
    }
  };

  const handleClearAllReviews = () => {
    if (window.confirm('Are you sure you want to delete all reviews? This action cannot be undone.')) {
      clearAllReviews();
      setSelectedReviewId(null);
      setActiveTab('submit');
    }
  };

  // Get current review for results tab
  const currentReview = selectedReviewId 
    ? getReviewById(selectedReviewId) 
    : latestReview;

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        
        {/* AI Status Indicator */}
        <AIStatusIndicator />
        
        {/* AI Setup Guide */}
        <AISetupGuide />
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex">
              <div className="text-red-600 text-xl mr-3">⚠️</div>
              <div>
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="tab-content">
          {activeTab === 'submit' && (
            <div className="max-w-4xl mx-auto">
              <CodeSubmissionForm
                programmingLanguages={programmingLanguages}
                sampleProblems={sampleProblems}
                onSubmit={handleCodeSubmit}
                isSubmitting={isAnalyzing}
              />
            </div>
          )}

          {activeTab === 'results' && (
            <div className="max-w-5xl mx-auto">
              {isAnalyzing ? (
                <AnalysisInProgress />
              ) : currentReview ? (
                <ReviewAnalysis review={currentReview} />
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Analysis Available
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Submit your code in the "Submit Code" tab to get started with AI analysis.
                  </p>
                  <button
                    onClick={() => setActiveTab('submit')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit Code Now
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="max-w-6xl mx-auto">
              <ReviewHistory
                reviews={reviewHistory}
                languages={programmingLanguages}
                onViewDetails={handleViewDetails}
                onDelete={handleDeleteReview}
                onClearAll={handleClearAllReviews}
              />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Performance Analytics
                </h2>
                <p className="text-gray-600 mt-1">
                  Track your coding progress and identify areas for improvement
                </p>
              </div>
              <ReviewStatistics statistics={statistics} />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
