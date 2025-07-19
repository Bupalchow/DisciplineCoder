/**
 * Post Card Component
 * @component
 * @description Individual post card for the community feed
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  ClockIcon,
  TagIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import {
  ArrowUpIcon as ArrowUpSolid,
  ArrowDownIcon as ArrowDownSolid,
  BookmarkIcon as BookmarkSolid
} from '@heroicons/react/24/solid';

const PostCard = ({ 
  post, 
  userVote, 
  isBookmarked, 
  onVote, 
  onBookmark,
  showFullContent = false 
}) => {
  const getTimeAgo = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'help': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'solution': return <CheckCircleIcon className="h-4 w-4" />;
      default: return <ChatBubbleLeftIcon className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'help': return 'text-orange-600 bg-orange-50';
      case 'solution': return 'text-green-600 bg-green-50';
      case 'discussion': return 'text-blue-600 bg-blue-50';
      case 'resource': return 'text-purple-600 bg-purple-50';
      case 'achievement': return 'text-yellow-600 bg-yellow-50';
      case 'interview': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-700 bg-green-100';
      case 'intermediate': return 'text-yellow-700 bg-yellow-100';
      case 'advanced': return 'text-orange-700 bg-orange-100';
      case 'expert': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const score = post.upvotes - post.downvotes;

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-3">
          <div className="flex flex-col items-center space-y-1 min-w-0">
            <button
              onClick={() => onVote(post.id, 'upvote')}
              className={`p-1 rounded-md transition-colors ${
                userVote === 'upvote' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {userVote === 'upvote' ? (
                <ArrowUpSolid className="h-5 w-5" />
              ) : (
                <ArrowUpIcon className="h-5 w-5" />
              )}
            </button>
            
            <span className={`text-sm font-medium ${
              score > 0 ? 'text-green-600' : score < 0 ? 'text-red-600' : 'text-gray-600'
            }`}>
              {score}
            </span>
            
            <button
              onClick={() => onVote(post.id, 'downvote')}
              className={`p-1 rounded-md transition-colors ${
                userVote === 'downvote' 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              {userVote === 'downvote' ? (
                <ArrowDownSolid className="h-5 w-5" />
              ) : (
                <ArrowDownIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex-1 min-w-0">
            {/* Post Meta */}
            <div className="flex items-center space-x-2 mb-2">
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                {getCategoryIcon(post.category)}
                <span className="capitalize">{post.category}</span>
              </div>
              
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                {post.difficulty}
              </div>
              
              <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {post.topic.replace('-', ' ')}
              </div>
            </div>

            {/* Title */}
            <Link 
              to={`/community/post/${post.id}`}
              className="block"
            >
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
                {post.solved && (
                  <CheckCircleIcon className="inline h-5 w-5 text-green-500 ml-2" />
                )}
              </h3>
            </Link>

            {/* Content Preview */}
            <div className={`mt-2 text-gray-600 ${showFullContent ? '' : 'line-clamp-3'}`}>
              {post.content.length > 200 && !showFullContent ? (
                <span>
                  {post.content.substring(0, 200)}...
                  <Link 
                    to={`/community/post/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 ml-1"
                  >
                    read more
                  </Link>
                </span>
              ) : (
                <pre className="whitespace-pre-wrap font-sans">{post.content}</pre>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center space-x-1 mt-3">
                <TagIcon className="h-4 w-4 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <span className="font-medium">{post.author.username}</span>
                  <span>•</span>
                  <span>{post.author.reputation} rep</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{getTimeAgo(post.createdAt)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  to={`/community/post/${post.id}`}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <ChatBubbleLeftIcon className="h-4 w-4" />
                  <span className="text-sm">{post.commentCount}</span>
                </Link>

                <button
                  onClick={() => onBookmark(post.id)}
                  className={`p-1 rounded-md transition-colors ${
                    isBookmarked 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {isBookmarked ? (
                    <BookmarkSolid className="h-4 w-4" />
                  ) : (
                    <BookmarkIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
