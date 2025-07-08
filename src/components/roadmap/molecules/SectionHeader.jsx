/**
 * Section Header Molecule Component
 * Displays section information with progress
 */

import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ProgressBar } from '../atoms';

/**
 * SectionHeader component
 * @param {Object} props - Component props
 * @param {Object} props.section - Section data
 * @param {boolean} props.isExpanded - Whether section is expanded
 * @param {Function} props.onToggle - Toggle handler
 * @param {number} props.completedQuestions - Number of completed questions
 */
const SectionHeader = ({ 
  section, 
  isExpanded, 
  onToggle, 
  completedQuestions = 0 
}) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'Beginner-Intermediate':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Intermediate-Advanced':
        return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Advanced':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Title and Toggle */}
          <div className="flex items-center gap-3 mb-3">
            {isExpanded ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            )}
            <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
            <span className={`text-sm px-3 py-1 rounded-full border font-medium ${getDifficultyColor(section.difficulty)}`}>
              {section.difficulty}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{section.description}</p>

          {/* Meta Information */}
          <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span>{section.estimatedTime}</span>
            </div>
            <div>
              <span>{section.questions.length} questions</span>
            </div>
            <div>
              <span>{completedQuestions}/{section.questions.length} completed</span>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar 
            current={completedQuestions} 
            total={section.questions.length}
            className="mb-4"
          />

          {/* Key Concepts */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Concepts:</h4>
            <div className="flex flex-wrap gap-2">
              {section.concepts.map((concept, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    estimatedTime: PropTypes.string.isRequired,
    concepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  completedQuestions: PropTypes.number,
};

export default SectionHeader;
