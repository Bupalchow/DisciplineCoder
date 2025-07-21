/**
 * Code Review Widget Component
 * Dashboard widget for quick access to code review feature
 */

import { Link } from 'react-router-dom';
import { CodeBracketIcon, SparklesIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Button } from '../../atoms';

/**
 * Code Review Widget Component
 */
export const CodeReviewWidget = ({ statistics, latestReview }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 rounded-lg p-2">
            <CodeBracketIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">AI Code Review</h3>
            <p className="text-purple-100 text-sm">Get instant feedback on your code</p>
          </div>
        </div>
        <SparklesIcon className="h-8 w-8 text-purple-200" />
      </div>

      {statistics ? (
        <div className="space-y-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{statistics.totalReviews}</div>
              <div className="text-xs text-purple-200">Reviews</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{statistics.averageScore}</div>
              <div className="text-xs text-purple-200">Avg Score</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <ChartBarIcon className="h-6 w-6 mx-auto mb-1" />
              <div className="text-xs text-purple-200">Analytics</div>
            </div>
          </div>

          {/* Latest Review */}
          {latestReview && (
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-sm font-medium mb-1">Latest Review</div>
              <div className="text-xs text-purple-200 mb-2">
                {latestReview.problemTitle} • Score: {latestReview.overallScore}/10
              </div>
              <div className="text-xs text-purple-200">
                {new Date(latestReview.submittedAt).toLocaleDateString()}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Link to="/code-review" className="flex-1">
              <Button variant="secondary" size="sm" className="w-full bg-white/20 hover:bg-white/30 border-white/30">
                Submit Code
              </Button>
            </Link>
            <Link to="/code-review?tab=analytics" className="flex-1">
              <Button variant="secondary" size="sm" className="w-full bg-white/20 hover:bg-white/30 border-white/30">
                View Stats
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Getting Started */}
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🤖</div>
            <h4 className="font-medium mb-2">Get AI Code Analysis</h4>
            <p className="text-sm text-purple-200 mb-4">
              Submit your solutions for detailed performance analysis, optimization tips, and best practices review.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-purple-200">⚡</span>
              <span>Time & Space Complexity Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-purple-200">🔍</span>
              <span>Code Quality Assessment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-purple-200">💡</span>
              <span>Optimization Suggestions</span>
            </div>
          </div>

          {/* Get Started Button */}
          <Link to="/code-review">
            <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/30">
              Get Started with AI Review
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
