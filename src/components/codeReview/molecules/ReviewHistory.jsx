/**
 * Review History Component
 * Displays list of previous code reviews with filtering options
 */

import { useState } from 'react';
import { Button } from '../../atoms';

/**
 * Review history item component
 */
const ReviewHistoryItem = ({ review, onViewDetails, onDelete }) => {
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getLanguageIcon = (language) => {
    const icons = {
      javascript: '🟨',
      python: '🐍',
      java: '☕',
      cpp: '⚡',
      go: '🔵',
      rust: '🦀',
      typescript: '💙',
    };
    return icons[language] || '📄';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-lg">{getLanguageIcon(review.language)}</span>
          <div>
            <h4 className="font-semibold text-gray-900">{review.problemTitle}</h4>
            <p className="text-sm text-gray-500">
              {new Date(review.submittedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(review.overallScore)}`}>
            {review.overallScore}/10
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(review.id)}
            >
              View Details
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(review.id)}
              className="text-red-600 hover:text-red-800 hover:border-red-300"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <span className="capitalize">{review.language}</span>
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          review.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {review.status}
        </span>
      </div>
    </div>
  );
};

/**
 * Filter and sort controls
 */
const FilterControls = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange, 
  sortBy, 
  onSortChange 
}) => (
  <div className="flex flex-wrap items-center gap-4 mb-6">
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-700">Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Languages</option>
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.icon} {lang.name}
          </option>
        ))}
      </select>
    </div>

    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-700">Sort by:</label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="date">Recent First</option>
        <option value="score">Highest Score</option>
        <option value="title">Problem Title</option>
      </select>
    </div>
  </div>
);

/**
 * Empty state component
 */
const EmptyState = () => (
  <div className="text-center py-12">
    <div className="text-6xl mb-4">📝</div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No Reviews Yet</h3>
    <p className="text-gray-500 mb-6">
      Submit your first code for AI analysis to get started
    </p>
  </div>
);

/**
 * Main Review History Component
 */
export const ReviewHistory = ({ 
  reviews, 
  languages,
  onViewDetails, 
  onDelete,
  onClearAll 
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sortBy, setSortBy] = useState('date');

  // Filter and sort reviews
  const filteredAndSortedReviews = reviews
    .filter(review => !selectedLanguage || review.language === selectedLanguage)
    .sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.overallScore - a.overallScore;
        case 'title':
          return a.problemTitle.localeCompare(b.problemTitle);
        case 'date':
        default:
          return new Date(b.submittedAt) - new Date(a.submittedAt);
      }
    });

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Review History</h3>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Review History ({reviews.length})
        </h3>
        {reviews.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="text-red-600 hover:text-red-800 hover:border-red-300"
          >
            Clear All
          </Button>
        )}
      </div>

      <FilterControls
        languages={languages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="space-y-4">
        {filteredAndSortedReviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews match the current filters</p>
          </div>
        ) : (
          filteredAndSortedReviews.map((review) => (
            <ReviewHistoryItem
              key={review.id}
              review={review}
              onViewDetails={onViewDetails}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};
