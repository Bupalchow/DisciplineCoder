/**
 * Code Submission Form Component
 * Allows users to submit code for AI analysis
 */

import { useState } from 'react';
import { Button } from '../../atoms';

/**
 * Form for submitting code for review
 */
export const CodeSubmissionForm = ({ 
  programmingLanguages, 
  sampleProblems, 
  onSubmit, 
  isSubmitting 
}) => {
  const [formData, setFormData] = useState({
    problemId: '',
    problemTitle: '',
    language: 'javascript',
    code: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleProblemSelect = (problemId) => {
    const problem = sampleProblems.find(p => p.id === problemId);
    if (problem) {
      setFormData(prev => ({
        ...prev,
        problemId,
        problemTitle: problem.title,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.problemTitle.trim()) {
      newErrors.problemTitle = 'Problem title is required';
    }

    if (!formData.code.trim()) {
      newErrors.code = 'Code is required';
    } else if (formData.code.trim().length < 10) {
      newErrors.code = 'Code must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
      // Reset form on successful submission
      setFormData({
        problemId: '',
        problemTitle: '',
        language: 'javascript',
        code: '',
      });
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Submit Code for AI Review
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Problem Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Problem (Optional)
          </label>
          <select
            value={formData.problemId}
            onChange={(e) => handleProblemSelect(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Custom Problem</option>
            {sampleProblems.map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.title} ({problem.difficulty})
              </option>
            ))}
          </select>
        </div>

        {/* Problem Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Problem Title *
          </label>
          <input
            type="text"
            value={formData.problemTitle}
            onChange={(e) => handleInputChange('problemTitle', e.target.value)}
            placeholder="Enter problem title..."
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.problemTitle ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.problemTitle && (
            <p className="mt-1 text-sm text-red-600">{errors.problemTitle}</p>
          )}
        </div>

        {/* Programming Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Programming Language
          </label>
          <select
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {programmingLanguages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.icon} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Code Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Code *
          </label>
          <textarea
            value={formData.code}
            onChange={(e) => handleInputChange('code', e.target.value)}
            placeholder="Paste your code here..."
            rows={12}
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm ${
              errors.code ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.code && (
            <p className="mt-1 text-sm text-red-600">{errors.code}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Characters: {formData.code.length}
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Analyzing Code...
              </div>
            ) : (
              'Submit for Review'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
