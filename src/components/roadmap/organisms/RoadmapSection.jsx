/**
 * Roadmap Section Organism Component
 * Displays a collapsible section with questions
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../molecules';
import { QuestionCard } from '../molecules';
import { ProgressBar } from '../atoms';

/**
 * RoadmapSection component
 * @param {Object} props - Component props
 * @param {Object} props.section - Section data
 * @param {Object} props.progress - Progress data for this section
 * @param {Function} props.onQuestionStatusChange - Question status change handler
 * @param {boolean} props.initiallyExpanded - Whether section starts expanded
 */
const RoadmapSection = ({ 
  section, 
  progress = {}, 
  onQuestionStatusChange, 
  initiallyExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  // Calculate section progress
  const completedQuestions = section.questions.filter(
    question => progress[question.id] === 'completed'
  ).length;
  const totalQuestions = section.questions.length;

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleQuestionStatusChange = (questionId, newStatus) => {
    onQuestionStatusChange?.(questionId, newStatus);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Section Header - Clickable to expand/collapse */}
      <div 
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={handleToggleExpanded}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <div className="flex-1">
                <SectionHeader 
                  section={section}
                  completedQuestions={completedQuestions}
                  totalQuestions={totalQuestions}
                />
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 ml-8">
            <ProgressBar 
              current={completedQuestions}
              total={totalQuestions}
              className="max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Questions List - Collapsible */}
      {isExpanded && (
        <div className="p-6 space-y-4 bg-gray-50">
          {section.questions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-lg">
              <QuestionCard
                question={question}
                status={progress[question.id] || 'not-started'}
                onStatusChange={(newStatus) => 
                  handleQuestionStatusChange(question.id, newStatus)
                }
                questionNumber={index + 1}
              />
            </div>
          ))}
          
          {section.questions.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No questions in this section yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

RoadmapSection.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    estimatedTime: PropTypes.string.isRequired,
    concepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    questions: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired,
  progress: PropTypes.object,
  onQuestionStatusChange: PropTypes.func,
  initiallyExpanded: PropTypes.bool
};

export default RoadmapSection;
