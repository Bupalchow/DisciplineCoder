/**
 * Community Filters Component
 * @component
 * @description Filter and sort controls for community posts
 */

import React from 'react';
import {
  FunnelIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { POST_CATEGORIES, DSA_TOPICS, SORT_OPTIONS } from '../../../data/communityData';

const CommunityFilters = ({
  sortBy,
  filterTopic,
  filterCategory,
  onSortChange,
  onTopicChange,
  onCategoryChange
}) => {
  const sortLabels = {
    [SORT_OPTIONS.HOT]: 'Hot',
    [SORT_OPTIONS.NEW]: 'New',
    [SORT_OPTIONS.TOP]: 'Top',
    [SORT_OPTIONS.CONTROVERSIAL]: 'Controversial'
  };

  const topicLabels = {
    all: 'All Topics',
    [DSA_TOPICS.ARRAYS]: 'Arrays',
    [DSA_TOPICS.STRINGS]: 'Strings',
    [DSA_TOPICS.LINKED_LISTS]: 'Linked Lists',
    [DSA_TOPICS.TREES]: 'Trees',
    [DSA_TOPICS.GRAPHS]: 'Graphs',
    [DSA_TOPICS.DYNAMIC_PROGRAMMING]: 'Dynamic Programming',
    [DSA_TOPICS.BACKTRACKING]: 'Backtracking',
    [DSA_TOPICS.BINARY_SEARCH]: 'Binary Search',
    [DSA_TOPICS.STACK_QUEUE]: 'Stack & Queue',
    [DSA_TOPICS.HASH_MAPS]: 'Hash Maps',
    [DSA_TOPICS.SORTING]: 'Sorting',
    [DSA_TOPICS.GREEDY]: 'Greedy',
    [DSA_TOPICS.GENERAL]: 'General'
  };

  const categoryLabels = {
    all: 'All Categories',
    [POST_CATEGORIES.HELP]: 'Help',
    [POST_CATEGORIES.DISCUSSION]: 'Discussion',
    [POST_CATEGORIES.SOLUTION]: 'Solution',
    [POST_CATEGORIES.RESOURCE]: 'Resource',
    [POST_CATEGORIES.ACHIEVEMENT]: 'Achievement',
    [POST_CATEGORIES.INTERVIEW]: 'Interview'
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Sort */}
        <div className="flex items-center space-x-2">
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
          <label className="text-sm font-medium text-gray-700">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* Topic Filter */}
        <div className="flex items-center space-x-2">
          <FunnelIcon className="h-5 w-5 text-gray-400" />
          <label className="text-sm font-medium text-gray-700">Topic:</label>
          <select
            value={filterTopic}
            onChange={(e) => onTopicChange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(topicLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <FunnelIcon className="h-5 w-5 text-gray-400" />
          <label className="text-sm font-medium text-gray-700">Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(categoryLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CommunityFilters;
