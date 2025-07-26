/**
 * AI Status Component
 * Shows the current status of AI features and configuration
 */

import { useState, useEffect } from 'react';
import { getAIStatus } from '../../../config/aiConfig';
import { geminiAIService } from '../../../services/geminiAI';

/**
 * AI Status Indicator Component
 */
const AIStatusIndicator = () => {
  const [aiStatus, setAiStatus] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('unknown');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Get initial AI status
    const status = getAIStatus();
    setAiStatus(status);

    // Test connection if AI is configured
    if (status.isConfigured) {
      testAIConnection();
    }
  }, []);

  const testAIConnection = async () => {
    setConnectionStatus('testing');
    try {
      const isConnected = await geminiAIService.testConnection();
      setConnectionStatus(isConnected ? 'connected' : 'failed');
    } catch (error) {
      console.error('AI connection test failed:', error);
      setConnectionStatus('failed');
    }
  };

  if (!aiStatus) return null;

  const getStatusColor = () => {
    if (aiStatus.status === 'enabled' && connectionStatus === 'connected') {
      return 'text-green-600 bg-green-50 border-green-200';
    } else if (aiStatus.status === 'enabled' && connectionStatus === 'testing') {
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    } else if (aiStatus.status === 'misconfigured' || connectionStatus === 'failed') {
      return 'text-red-600 bg-red-50 border-red-200';
    } else {
      return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = () => {
    if (aiStatus.status === 'enabled' && connectionStatus === 'connected') {
      return '🤖✅';
    } else if (aiStatus.status === 'enabled' && connectionStatus === 'testing') {
      return '🤖⏳';
    } else if (aiStatus.status === 'misconfigured' || connectionStatus === 'failed') {
      return '🤖❌';
    } else {
      return '🤖⏸️';
    }
  };

  const getStatusText = () => {
    if (aiStatus.status === 'enabled') {
      if (connectionStatus === 'connected') return 'AI Ready';
      if (connectionStatus === 'testing') return 'AI Testing...';
      if (connectionStatus === 'failed') return 'AI Connection Failed';
      return 'AI Configured';
    } else if (aiStatus.status === 'misconfigured') {
      return 'AI Misconfigured';
    } else {
      return 'AI Disabled';
    }
  };

  return (
    <div className="mb-6">
      <div 
        className={`inline-flex items-center px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${getStatusColor()}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm mr-2">{getStatusIcon()}</span>
        <span className="text-sm font-medium">{getStatusText()}</span>
        <span className="ml-2 text-xs">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>

      {isExpanded && (
        <div className={`mt-2 p-4 rounded-lg border ${getStatusColor()} animate-fadeIn`}>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>API Key:</span>
              <span>{aiStatus.hasApiKey ? '✅ Set' : '❌ Missing'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Feature Enabled:</span>
              <span>{aiStatus.isEnabled ? '✅ Yes' : '❌ No'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Connection:</span>
              <span>
                {connectionStatus === 'connected' && '✅ Connected'}
                {connectionStatus === 'testing' && '⏳ Testing...'}
                {connectionStatus === 'failed' && '❌ Failed'}
                {connectionStatus === 'unknown' && '❓ Unknown'}
              </span>
            </div>
            
            {aiStatus.status === 'misconfigured' && (
              <div className="mt-3 p-2 bg-red-100 rounded text-xs text-red-700">
                <strong>Setup Required:</strong> Add your Gemini API key to the .env file
              </div>
            )}
            
            {aiStatus.status === 'disabled' && (
              <div className="mt-3 p-2 bg-gray-100 rounded text-xs text-gray-700">
                <strong>Info:</strong> AI features are disabled. Enable them in configuration.
              </div>
            )}
            
            {connectionStatus === 'failed' && (
              <div className="mt-3 p-2 bg-red-100 rounded text-xs text-red-700">
                <strong>Connection Issue:</strong> Check your API key and internet connection.
                <button 
                  onClick={testAIConnection}
                  className="ml-2 text-red-600 underline hover:no-underline"
                >
                  Retry
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIStatusIndicator;
