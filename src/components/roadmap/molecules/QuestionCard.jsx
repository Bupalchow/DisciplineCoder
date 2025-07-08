/**
 * Question Card Molecule Component
 * Displays individual LeetCode question with actions
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  ExternalLinkIcon, 
  LightBulbIcon, 
  ClockIcon,
  CpuChipIcon,
  InformationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { DifficultyBadge, StatusBadge } from '../atoms';
import { Button } from '../../atoms';
import { QUESTION_STATUS } from '../../../data/arraysRoadmap';

/**
 * QuestionCard component
 * @param {Object} props - Component props
 * @param {Object} props.question - Question data
 * @param {string} props.status - Current status
 * @param {Function} props.onStatusChange - Status change handler
 */
const QuestionCard = ({ question, status = QUESTION_STATUS.NOT_STARTED, onStatusChange }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleStatusChange = (newStatus) => {
    onStatusChange(question.id, newStatus);
  };

  const getNextStatus = () => {
    switch (status) {
      case QUESTION_STATUS.NOT_STARTED:
        return QUESTION_STATUS.IN_PROGRESS;
      case QUESTION_STATUS.IN_PROGRESS:
        return QUESTION_STATUS.COMPLETED;
      case QUESTION_STATUS.COMPLETED:
        return QUESTION_STATUS.REVIEWED;
      default:
        return QUESTION_STATUS.NOT_STARTED;
    }
  };

  const getStatusAction = () => {
    switch (status) {
      case QUESTION_STATUS.NOT_STARTED:
        return 'Start';
      case QUESTION_STATUS.IN_PROGRESS:
        return 'Mark Complete';
      case QUESTION_STATUS.COMPLETED:
        return 'Mark Reviewed';
      case QUESTION_STATUS.REVIEWED:
        return 'Reset';
      default:
        return 'Start';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {question.title}
            </h3>
            <span className="text-sm text-gray-500">
              #{question.leetcodeId}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <DifficultyBadge difficulty={question.difficulty} size="sm" />
            <StatusBadge status={status} size="sm" />
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
              {question.pattern}
            </span>
          </div>
        </div>
      </div>

      {/* Concepts */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Concepts:</h4>
        <div className="flex flex-wrap gap-1">
          {question.concepts.map((concept, index) => (
            <span
              key={index}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">Time: {question.timeComplexity}</span>
        </div>
        <div className="flex items-center gap-2">
          <CpuChipIcon className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">Space: {question.spaceComplexity}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="primary"
          size="sm"
          onClick={() => handleStatusChange(getNextStatus())}
          className="flex items-center gap-2"
        >
          <CheckCircleIcon className="h-4 w-4" />
          {getStatusAction()}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(question.url, '_blank')}
          className="flex items-center gap-2"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          Solve on LeetCode
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2"
        >
          <InformationCircleIcon className="h-4 w-4" />
          Details
        </Button>
      </div>

      {/* Expandable Details */}
      {showDetails && (
        <div className="border-t border-gray-200 pt-4 space-y-4">
          {/* Hint */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 mb-2"
            >
              <LightBulbIcon className="h-4 w-4" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
            
            {showHint && (
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <p className="text-sm text-yellow-800">{question.hint}</p>
              </div>
            )}
          </div>

          {/* Solution Approach */}
          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">Solution Approach:</h5>
            <div className="bg-gray-50 border border-gray-200 rounded p-3">
              <p className="text-sm text-gray-700">{question.solution}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    leetcodeId: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
    concepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    hint: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    timeComplexity: PropTypes.string.isRequired,
    spaceComplexity: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.string,
  onStatusChange: PropTypes.func.isRequired,
};

export default QuestionCard;
