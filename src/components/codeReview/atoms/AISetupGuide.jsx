/**
 * AI Setup Guide Component
 * Provides step-by-step instructions for setting up AI features
 */

import { useState } from 'react';
import { getAIStatus } from '../../../config/aiConfig';

/**
 * Setup Guide Component
 */
const AISetupGuide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aiStatus = getAIStatus();

  // Don't show if already configured
  if (aiStatus.isConfigured) return null;

  return (
    <div className="mb-6">
      {!isVisible ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-3">🚀</span>
              <div>
                <h3 className="text-sm font-medium text-blue-900">
                  Setup AI Code Analysis
                </h3>
                <p className="text-sm text-blue-700">
                  Get intelligent code reviews powered by Google's Gemini AI
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(true)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Setup Guide →
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              🤖 AI Setup Guide
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Get Your Gemini API Key
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Visit Google AI Studio to create your free API key:
                </p>
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Get API Key →
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Create Environment File
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Create a <code className="bg-gray-100 px-1 rounded">.env</code> file in your project root:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm font-mono">
                  <div className="text-gray-800">
                    <div>VITE_GEMINI_API_KEY=your_api_key_here</div>
                    <div>VITE_ENABLE_AI_REVIEW=true</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Restart Development Server
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Restart your development server to load the new environment variables:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm font-mono">
                  <div className="text-gray-800">
                    npm run dev
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Current Status:
              </h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm">
                  <span className="w-4 h-4 mr-2">
                    {aiStatus.hasApiKey ? '✅' : '❌'}
                  </span>
                  <span>API Key {aiStatus.hasApiKey ? 'Configured' : 'Missing'}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-4 h-4 mr-2">
                    {aiStatus.isEnabled ? '✅' : '❌'}
                  </span>
                  <span>AI Features {aiStatus.isEnabled ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>
            </div>

            {/* Help Links */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">
                Need Help?
              </h4>
              <div className="space-y-1">
                <a
                  href="https://ai.google.dev/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  📚 Gemini API Documentation
                </a>
                <a
                  href="https://github.com/google/generative-ai-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  🔧 JavaScript SDK Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISetupGuide;
