/**
 * Community Page
 * @component
 * @description Main community page with Reddit-like functionality for coding discussions
 */

import React, { useState } from 'react';
import { 
  PlusIcon, 
  FireIcon, 
  ClockIcon, 
  TrophyIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline';
import { MainLayout } from '../components/templates';
import { Button } from '../components/atoms';
import PostCard from '../components/community/molecules/PostCard';
import CommunityFilters from '../components/community/molecules/CommunityFilters';
import CreatePostForm from '../components/community/molecules/CreatePostForm';
import { useCommunity } from '../hooks/useCommunity';

const CommunityPage = () => {
  const {
    posts,
    loading,
    sortBy,
    filterTopic,
    filterCategory,
    votePost,
    createPost,
    toggleBookmark,
    setSortBy,
    setFilterTopic,
    setFilterCategory,
    isBookmarked,
    getUserVote
  } = useCommunity();

  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleCreatePost = (postData) => {
    createPost(postData);
    setShowCreatePost(false);
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 mb-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="flex space-x-4">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Community</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow coders, share solutions, and grow together through collaborative learning.
          </p>
        </div>

        {/* Create Post Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => setShowCreatePost(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
            <div className="text-sm text-gray-600">Total Posts</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <FireIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {posts.filter(p => {
                const today = new Date();
                const postDate = new Date(p.createdAt);
                return today.toDateString() === postDate.toDateString();
              }).length}
            </div>
            <div className="text-sm text-gray-600">Active Today</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <TrophyIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {posts.filter(p => p.solved).length}
            </div>
            <div className="text-sm text-gray-600">Solved Problems</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="flex items-center justify-center mb-2">
              <ClockIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {posts.reduce((sum, post) => sum + post.commentCount, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Comments</div>
          </div>
        </div>

        {/* Filters */}
        <CommunityFilters
          sortBy={sortBy}
          filterTopic={filterTopic}
          filterCategory={filterCategory}
          onSortChange={setSortBy}
          onTopicChange={setFilterTopic}
          onCategoryChange={setFilterCategory}
        />

        {/* Posts Feed */}
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
              <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-500 mb-4">
                Be the first to start a discussion in this category!
              </p>
              <Button
                onClick={() => setShowCreatePost(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Create First Post
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  userVote={getUserVote(post.id)}
                  isBookmarked={isBookmarked(post.id)}
                  onVote={votePost}
                  onBookmark={toggleBookmark}
                />
              ))}
            </div>
          )}
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Community Guidelines 📋
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Do:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Be respectful and constructive</li>
                <li>• Search before posting duplicates</li>
                <li>• Use appropriate tags and categories</li>
                <li>• Share code snippets when helpful</li>
                <li>• Help others learn and grow</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">❌ Don't:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Post spam or irrelevant content</li>
                <li>• Ask for homework solutions directly</li>
                <li>• Use offensive language</li>
                <li>• Share personal information</li>
                <li>• Post without context or effort</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostForm
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onSubmit={handleCreatePost}
      />
    </MainLayout>
  );
};

export default CommunityPage;
