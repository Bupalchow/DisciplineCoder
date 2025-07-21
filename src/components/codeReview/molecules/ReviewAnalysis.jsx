/**
 * Review Analysis Display Component
 * Shows detailed analysis results from AI code review
 */

import { useState } from 'react';

/**
 * Score indicator component
 */
const ScoreIndicator = ({ score, maxScore = 10, label }) => {
  const percentage = (score / maxScore) * 100;
  const getScoreColor = (score) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700 w-24">{label}:</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${getScoreColor(score)}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-bold text-gray-900 w-12">
        {score}/{maxScore}
      </span>
    </div>
  );
};

/**
 * Complexity Analysis Section
 */
const ComplexitySection = ({ title, data }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
    <div className="space-y-3">
      <ScoreIndicator score={data.score} label="Score" />
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Current:</span>
          <span className="ml-2 font-mono bg-gray-200 px-2 py-1 rounded">
            {data.current}
          </span>
        </div>
        <div>
          <span className="font-medium">Optimal:</span>
          <span className="ml-2 font-mono bg-green-100 px-2 py-1 rounded">
            {data.optimal}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{data.explanation}</p>
    </div>
  </div>
);

/**
 * Code Quality Section
 */
const CodeQualitySection = ({ data }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-900 mb-3">Code Quality</h4>
    <div className="space-y-3">
      <ScoreIndicator score={data.score} label="Score" />
      
      {data.issues && data.issues.length > 0 && (
        <div>
          <h5 className="font-medium text-red-700 mb-2">Issues to Address:</h5>
          <ul className="list-disc list-inside space-y-1">
            {data.issues.map((issue, index) => (
              <li key={index} className="text-sm text-red-600">{issue}</li>
            ))}
          </ul>
        </div>
      )}
      
      {data.strengths && data.strengths.length > 0 && (
        <div>
          <h5 className="font-medium text-green-700 mb-2">Strengths:</h5>
          <ul className="list-disc list-inside space-y-1">
            {data.strengths.map((strength, index) => (
              <li key={index} className="text-sm text-green-600">{strength}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

/**
 * Best Practices Section
 */
const BestPracticesSection = ({ data }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-900 mb-3">Best Practices</h4>
    <div className="space-y-3">
      <ScoreIndicator score={data.score} label="Score" />
      
      {data.suggestions && data.suggestions.length > 0 && (
        <div>
          <h5 className="font-medium text-blue-700 mb-2">Suggestions:</h5>
          <ul className="list-disc list-inside space-y-1">
            {data.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-blue-600">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

/**
 * Optimized Solution Section
 */
const OptimizedSolutionSection = ({ solution, originalCode }) => {
  const [showComparison, setShowComparison] = useState(false);

  if (!solution) return null;

  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-3">Optimized Solution</h4>
      
      {solution.improvements && (
        <div className="mb-4">
          <h5 className="font-medium text-blue-700 mb-2">Key Improvements:</h5>
          <ul className="list-disc list-inside space-y-1">
            {solution.improvements.map((improvement, index) => (
              <li key={index} className="text-sm text-blue-600">{improvement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <span>{showComparison ? 'Hide' : 'Show'} Code Comparison</span>
          <svg
            className={`ml-2 h-4 w-4 transform transition-transform ${
              showComparison ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showComparison && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-700 mb-2">Your Solution:</h6>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
                <code>{originalCode}</code>
              </pre>
            </div>
            <div>
              <h6 className="font-medium text-gray-700 mb-2">Optimized Solution:</h6>
              <pre className="bg-green-50 p-3 rounded text-xs overflow-x-auto">
                <code>{solution.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Alternative Solutions Section
 */
const AlternativeSolutionsSection = ({ alternatives }) => {
  if (!alternatives || alternatives.length === 0) return null;

  return (
    <div className="bg-purple-50 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-3">Alternative Approaches</h4>
      <div className="space-y-3">
        {alternatives.map((alt, index) => (
          <div key={index} className="border border-purple-200 rounded p-3 bg-white">
            <h5 className="font-medium text-purple-700 mb-2">{alt.approach}</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Time: </span>
                <span className="font-mono">{alt.timeComplexity}</span>
              </div>
              <div>
                <span className="font-medium">Space: </span>
                <span className="font-mono">{alt.spaceComplexity}</span>
              </div>
            </div>
            <div className="mt-2 grid md:grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-green-600">Pros:</span>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  {alt.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium text-red-600">Cons:</span>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  {alt.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Main Review Analysis Component
 */
export const ReviewAnalysis = ({ review }) => {
  if (!review || !review.analysis) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p>Analysis in progress...</p>
        </div>
      </div>
    );
  }

  const { analysis, optimizedSolution, alternativeSolutions, overallScore, recommendations } = review;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Analysis Results</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{overallScore}/10</div>
            <div className="text-sm text-gray-500">Overall Score</div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">{review.problemTitle}</span>
          <span className="mx-2">•</span>
          <span>{review.language}</span>
          <span className="mx-2">•</span>
          <span>{new Date(review.submittedAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Complexity Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComplexitySection 
            title="Time Complexity" 
            data={analysis.timeComplexity} 
          />
          <ComplexitySection 
            title="Space Complexity" 
            data={analysis.spaceComplexity} 
          />
        </div>

        {/* Code Quality and Best Practices */}
        <div className="grid md:grid-cols-2 gap-6">
          <CodeQualitySection data={analysis.codeQuality} />
          <BestPracticesSection data={analysis.bestPractices} />
        </div>

        {/* Optimized Solution */}
        {optimizedSolution && (
          <OptimizedSolutionSection 
            solution={optimizedSolution}
            originalCode={review.code}
          />
        )}

        {/* Alternative Solutions */}
        <AlternativeSolutionsSection alternatives={alternativeSolutions} />

        {/* Recommendations */}
        {recommendations && recommendations.length > 0 && (
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
            <ul className="list-disc list-inside space-y-1">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="text-sm text-yellow-700">
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
