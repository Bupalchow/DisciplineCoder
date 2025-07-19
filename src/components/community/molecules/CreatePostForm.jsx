/**
 * Create Post Form Component
 * @component
 * @description Form for creating new community posts
 */

import React, { useState } from 'react';
import {
  XMarkIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../atoms';
import { POST_CATEGORIES, DSA_TOPICS, POST_DIFFICULTIES } from '../../../data/communityData';

const CreatePostForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: POST_CATEGORIES.HELP,
    topic: DSA_TOPICS.GENERAL,
    difficulty: POST_DIFFICULTIES.BEGINNER,
    tags: '',
    leetcodeId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      leetcodeId: formData.leetcodeId ? parseInt(formData.leetcodeId) : null
    };

    onSubmit(postData);
    setFormData({
      title: '',
      content: '',
      category: POST_CATEGORIES.HELP,
      topic: DSA_TOPICS.GENERAL,
      difficulty: POST_DIFFICULTIES.BEGINNER,
      tags: '',
      leetcodeId: ''
    });
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="What's your question or topic?"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category and Topic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={POST_CATEGORIES.HELP}>Help</option>
                <option value={POST_CATEGORIES.DISCUSSION}>Discussion</option>
                <option value={POST_CATEGORIES.SOLUTION}>Solution</option>
                <option value={POST_CATEGORIES.RESOURCE}>Resource</option>
                <option value={POST_CATEGORIES.ACHIEVEMENT}>Achievement</option>
                <option value={POST_CATEGORIES.INTERVIEW}>Interview</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) => handleChange('topic', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={DSA_TOPICS.GENERAL}>General</option>
                <option value={DSA_TOPICS.ARRAYS}>Arrays</option>
                <option value={DSA_TOPICS.STRINGS}>Strings</option>
                <option value={DSA_TOPICS.LINKED_LISTS}>Linked Lists</option>
                <option value={DSA_TOPICS.TREES}>Trees</option>
                <option value={DSA_TOPICS.GRAPHS}>Graphs</option>
                <option value={DSA_TOPICS.DYNAMIC_PROGRAMMING}>Dynamic Programming</option>
                <option value={DSA_TOPICS.BACKTRACKING}>Backtracking</option>
                <option value={DSA_TOPICS.BINARY_SEARCH}>Binary Search</option>
                <option value={DSA_TOPICS.STACK_QUEUE}>Stack & Queue</option>
                <option value={DSA_TOPICS.HASH_MAPS}>Hash Maps</option>
                <option value={DSA_TOPICS.SORTING}>Sorting</option>
                <option value={DSA_TOPICS.GREEDY}>Greedy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={formData.difficulty}
                onChange={(e) => handleChange('difficulty', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={POST_DIFFICULTIES.BEGINNER}>Beginner</option>
                <option value={POST_DIFFICULTIES.INTERMEDIATE}>Intermediate</option>
                <option value={POST_DIFFICULTIES.ADVANCED}>Advanced</option>
                <option value={POST_DIFFICULTIES.EXPERT}>Expert</option>
              </select>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Describe your question, share your solution, or start a discussion..."
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              You can use code blocks with ```language syntax
            </p>
          </div>

          {/* Optional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => handleChange('tags', e.target.value)}
                placeholder="tag1, tag2, tag3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LeetCode Problem ID
              </label>
              <input
                type="number"
                value={formData.leetcodeId}
                onChange={(e) => handleChange('leetcodeId', e.target.value)}
                placeholder="e.g., 1, 42, 200"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Optional: Link to specific LeetCode problem</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
