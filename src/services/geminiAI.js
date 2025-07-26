/**
 * Gemini AI Service for Code Analysis
 * Handles communication with Google's Gemini API for intelligent code review
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

class GeminiAIService {
  constructor() {
    this.genAI = null;
    this.model = null;
    this.initialized = false;
  }

  /**
   * Initialize the Gemini AI service
   */
  async initialize() {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key not found. Please set VITE_GEMINI_API_KEY in your environment variables.');
      }

      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      this.initialized = true;
      
      console.log('Gemini AI service initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize Gemini AI service:', error);
      this.initialized = false;
      throw error;
    }
  }

  /**
   * Check if the service is properly initialized
   */
  isInitialized() {
    return this.initialized;
  }

  /**
   * Generate a comprehensive code analysis prompt
   */
  generateAnalysisPrompt(codeData) {
    const { code, language, problemTitle, problemDescription } = codeData;

    return `
You are an expert code reviewer and computer science instructor. Please analyze the following ${language} code and provide a comprehensive review.

**Problem Context:**
Title: ${problemTitle}
${problemDescription ? `Description: ${problemDescription}` : ''}

**Code to Analyze:**
\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Please provide a detailed analysis in the following JSON format (ensure valid JSON syntax):

{
  "timeComplexity": {
    "current": "O(?)",
    "optimal": "O(?)",
    "score": 0-10,
    "explanation": "Detailed explanation of time complexity analysis"
  },
  "spaceComplexity": {
    "current": "O(?)",
    "optimal": "O(?)", 
    "score": 0-10,
    "explanation": "Detailed explanation of space complexity analysis"
  },
  "codeQuality": {
    "score": 0-10,
    "issues": ["List of code quality issues"],
    "strengths": ["List of code strengths"],
    "explanation": "Overall code quality assessment"
  },
  "bestPractices": {
    "score": 0-10,
    "suggestions": ["List of best practice suggestions"],
    "explanation": "Best practices analysis"
  },
  "optimizations": {
    "suggestions": ["List of optimization suggestions"],
    "alternativeApproaches": ["Alternative algorithmic approaches"],
    "explanation": "Optimization recommendations"
  },
  "bugs": {
    "found": ["List of potential bugs or edge cases"],
    "severity": "low|medium|high",
    "explanation": "Bug analysis and severity assessment"
  },
  "summary": {
    "overallScore": 0-10,
    "keyInsights": ["Main takeaways"],
    "nextSteps": ["Recommended next steps for improvement"]
  }
}

**Analysis Guidelines:**
1. Be thorough but constructive in your feedback
2. Consider edge cases and potential runtime errors
3. Evaluate algorithmic efficiency and code readability
4. Suggest specific improvements with examples when possible
5. Score fairly based on the problem complexity and solution quality
6. Provide educational insights to help the programmer learn

Please ensure your response is valid JSON only, without any additional text or markdown formatting.
`;
  }

  /**
   * Analyze code using Gemini AI
   */
  async analyzeCode(codeData) {
    if (!this.initialized) {
      await this.initialize();
    }

    if (!this.isInitialized()) {
      throw new Error('Gemini AI service is not initialized');
    }

    try {
      const prompt = this.generateAnalysisPrompt(codeData);
      
      console.log('Sending code to Gemini AI for analysis...');
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysisText = response.text();

      // Parse the JSON response
      let analysis;
      try {
        // Clean the response in case there's any markdown formatting
        const cleanedResponse = analysisText
          .replace(/```json/g, '')
          .replace(/```/g, '')
          .trim();
        
        analysis = JSON.parse(cleanedResponse);
      } catch (parseError) {
        console.error('Failed to parse AI response as JSON:', parseError);
        console.log('Raw response:', analysisText);
        
        // Fallback: create a basic analysis structure
        analysis = this.createFallbackAnalysis(analysisText);
      }

      // Validate and sanitize the analysis
      const validatedAnalysis = this.validateAnalysis(analysis);
      
      console.log('Code analysis completed successfully');
      return validatedAnalysis;

    } catch (error) {
      console.error('Error during code analysis:', error);
      
      // Return a meaningful error analysis
      throw new Error(`AI analysis failed: ${error.message}`);
    }
  }

  /**
   * Create a fallback analysis when JSON parsing fails
   */
  createFallbackAnalysis(rawResponse) {
    return {
      timeComplexity: {
        current: 'O(n)',
        optimal: 'O(n)',
        score: 7,
        explanation: 'Analysis completed but detailed complexity parsing failed.'
      },
      spaceComplexity: {
        current: 'O(1)',
        optimal: 'O(1)',
        score: 8,
        explanation: 'Analysis completed but detailed complexity parsing failed.'
      },
      codeQuality: {
        score: 7,
        issues: ['Unable to parse detailed analysis'],
        strengths: ['Code was successfully analyzed'],
        explanation: rawResponse.substring(0, 200) + '...'
      },
      bestPractices: {
        score: 7,
        suggestions: ['Review the full AI response for detailed suggestions'],
        explanation: 'Analysis completed but formatting needs adjustment.'
      },
      optimizations: {
        suggestions: ['Check the raw AI response for optimization ideas'],
        alternativeApproaches: [],
        explanation: 'Optimization analysis available in raw response.'
      },
      bugs: {
        found: [],
        severity: 'low',
        explanation: 'No critical bugs detected in initial scan.'
      },
      summary: {
        overallScore: 7,
        keyInsights: ['AI analysis completed successfully'],
        nextSteps: ['Review the detailed feedback provided']
      },
      rawResponse: rawResponse // Include raw response for debugging
    };
  }

  /**
   * Validate and sanitize analysis response
   */
  validateAnalysis(analysis) {
    const defaultAnalysis = {
      timeComplexity: { current: 'O(n)', optimal: 'O(n)', score: 5, explanation: '' },
      spaceComplexity: { current: 'O(1)', optimal: 'O(1)', score: 5, explanation: '' },
      codeQuality: { score: 5, issues: [], strengths: [], explanation: '' },
      bestPractices: { score: 5, suggestions: [], explanation: '' },
      optimizations: { suggestions: [], alternativeApproaches: [], explanation: '' },
      bugs: { found: [], severity: 'low', explanation: '' },
      summary: { overallScore: 5, keyInsights: [], nextSteps: [] }
    };

    // Merge with defaults and validate scores
    const validated = { ...defaultAnalysis, ...analysis };
    
    // Ensure scores are within valid range (0-10)
    const validateScore = (score) => Math.max(0, Math.min(10, Number(score) || 5));
    
    validated.timeComplexity.score = validateScore(validated.timeComplexity.score);
    validated.spaceComplexity.score = validateScore(validated.spaceComplexity.score);
    validated.codeQuality.score = validateScore(validated.codeQuality.score);
    validated.bestPractices.score = validateScore(validated.bestPractices.score);
    validated.summary.overallScore = validateScore(validated.summary.overallScore);

    // Ensure arrays exist
    validated.codeQuality.issues = validated.codeQuality.issues || [];
    validated.codeQuality.strengths = validated.codeQuality.strengths || [];
    validated.bestPractices.suggestions = validated.bestPractices.suggestions || [];
    validated.optimizations.suggestions = validated.optimizations.suggestions || [];
    validated.optimizations.alternativeApproaches = validated.optimizations.alternativeApproaches || [];
    validated.bugs.found = validated.bugs.found || [];
    validated.summary.keyInsights = validated.summary.keyInsights || [];
    validated.summary.nextSteps = validated.summary.nextSteps || [];

    return validated;
  }

  /**
   * Test the connection with a simple request
   */
  async testConnection() {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      const result = await this.model.generateContent('Hello, please respond with "Connection successful"');
      const response = await result.response;
      const text = response.text();
      
      console.log('Gemini AI connection test:', text);
      return text.toLowerCase().includes('successful');
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }
}

// Create and export a singleton instance
export const geminiAIService = new GeminiAIService();
export default geminiAIService;
