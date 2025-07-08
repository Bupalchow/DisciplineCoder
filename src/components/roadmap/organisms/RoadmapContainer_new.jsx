/**
 * Roadmap Container Organism Component
 * Main container for the entire roadmap experience
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  AcademicCapIcon, 
  ClockIcon,
  QuestionMarkCircleIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import RoadmapSection from './RoadmapSection';
import { ProgressBar } from '../atoms';
import { Button } from '../../atoms';
import { QUESTION_STATUS } from '../../../data/arraysRoadmap';

/**
 * RoadmapContainer component
 * @param {Object} props - Component props
 * @param {Object} props.roadmapData - Complete roadmap data
 * @param {Object} props.progress - Current progress state
 * @param {Function} props.onQuestionStatusChange - Question status change handler from hook
 * @param {Object} props.progressStats - Progress statistics
 */
const RoadmapContainer = ({ 
  roadmapData, 
  progress = {},
  onQuestionStatusChange,
  progressStats
}) => {
  const [expandedSections, setExpandedSections] = useState(new Set(['array-basics']));

  // Calculate overall progress from stats or data
  const totalQuestions = progressStats?.total || roadmapData.sections.reduce(
    (sum, section) => sum + section.questions.length, 
    0
  );
  const completedQuestions = progressStats?.completed || Object.values(progress).filter(
    status => status === QUESTION_STATUS.COMPLETED
  ).length;

  // Handle progress changes
  const handleQuestionStatusChange = (questionId, newStatus) => {
    onQuestionStatusChange?.(questionId, newStatus);
  };

  // Expand/collapse all sections
  const handleExpandAll = () => {
    const allSectionIds = roadmapData.sections.map(section => section.id);
    setExpandedSections(new Set(allSectionIds));
  };

  const handleCollapseAll = () => {
    setExpandedSections(new Set());
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Roadmap Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0">
                <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {roadmapData.title}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {roadmapData.description}
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span>{roadmapData.estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <QuestionMarkCircleIcon className="h-4 w-4" />
                <span>{totalQuestions} Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-4 w-4" />
                <span>{roadmapData.sections.length} Sections</span>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Overall Progress
              </h3>
              <ProgressBar 
                current={completedQuestions}
                total={totalQuestions}
                className="max-w-md"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExpandAll}
              >
                Expand All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCollapseAll}
              >
                Collapse All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {roadmapData.sections.map((section) => (
          <RoadmapSection
            key={section.id}
            section={section}
            progress={progress}
            onQuestionStatusChange={handleQuestionStatusChange}
            initiallyExpanded={expandedSections.has(section.id)}
          />
        ))}
      </div>

      {/* Completion Message */}
      {completedQuestions === totalQuestions && totalQuestions > 0 && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <TrophyIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-green-700">
            You've completed the entire {roadmapData.title} roadmap! 
            You're now ready to tackle array problems in coding interviews.
          </p>
        </div>
      )}
    </div>
  );
};

RoadmapContainer.propTypes = {
  roadmapData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    estimatedTime: PropTypes.string.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    sections: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired,
  progress: PropTypes.object,
  onQuestionStatusChange: PropTypes.func,
  progressStats: PropTypes.object
};

export default RoadmapContainer;
