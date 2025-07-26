/**
 * Configuration utility for AI Code Review settings
 * Manages environment variables and feature flags
 */

/**
 * AI Configuration Settings
 */
export const AI_CONFIG = {
  // Gemini AI Settings
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
  GEMINI_MODEL: 'gemini-1.5-flash',
  
  // Feature Flags
  ENABLE_AI_REVIEW: import.meta.env.VITE_ENABLE_AI_REVIEW === 'true',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  
  // API Settings
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
  MAX_RETRIES: 3,
  
  // Debug Settings
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
  LOG_LEVEL: import.meta.env.VITE_LOG_LEVEL || 'info',
};

/**
 * Check if AI features are properly configured
 */
export const isAIConfigured = () => {
  return !!(AI_CONFIG.GEMINI_API_KEY && AI_CONFIG.ENABLE_AI_REVIEW);
};

/**
 * Get AI status information
 */
export const getAIStatus = () => {
  const hasApiKey = !!AI_CONFIG.GEMINI_API_KEY;
  const isEnabled = AI_CONFIG.ENABLE_AI_REVIEW;
  
  let status = 'disabled';
  let message = 'AI features are disabled';
  
  if (!hasApiKey && isEnabled) {
    status = 'misconfigured';
    message = 'AI is enabled but API key is missing';
  } else if (hasApiKey && !isEnabled) {
    status = 'disabled';
    message = 'AI features are disabled by configuration';
  } else if (hasApiKey && isEnabled) {
    status = 'enabled';
    message = 'AI features are enabled and configured';
  }
  
  return {
    status,
    message,
    hasApiKey,
    isEnabled,
    isConfigured: hasApiKey && isEnabled,
  };
};

/**
 * Log configuration status (for debugging)
 */
export const logAIConfig = () => {
  if (AI_CONFIG.DEBUG_MODE) {
    const status = getAIStatus();
    console.group('🤖 AI Configuration Status');
    console.log('Status:', status.status);
    console.log('Message:', status.message);
    console.log('Has API Key:', status.hasApiKey);
    console.log('Is Enabled:', status.isEnabled);
    console.log('Model:', AI_CONFIG.GEMINI_MODEL);
    console.log('Timeout:', AI_CONFIG.API_TIMEOUT);
    console.groupEnd();
  }
};

/**
 * Environment setup validation
 */
export const validateEnvironment = () => {
  const errors = [];
  const warnings = [];
  
  // Check required environment variables
  if (!AI_CONFIG.GEMINI_API_KEY) {
    warnings.push('VITE_GEMINI_API_KEY is not set - AI features will use mock data');
  }
  
  // Check feature flag consistency
  if (AI_CONFIG.ENABLE_AI_REVIEW && !AI_CONFIG.GEMINI_API_KEY) {
    warnings.push('AI review is enabled but API key is missing');
  }
  
  // Check timeout value
  if (AI_CONFIG.API_TIMEOUT < 5000) {
    warnings.push('API timeout might be too low for AI requests');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

// Initialize configuration logging
if (typeof window !== 'undefined') {
  // Only log in browser environment
  logAIConfig();
}
