/**
 * Status Badge Atom Component
 * Shows question completion status
 */

import PropTypes from 'prop-types';
import { CheckIcon, ClockIcon, PlayIcon, EyeIcon } from '@heroicons/react/24/outline';
import { QUESTION_STATUS } from '../../../data/arraysRoadmap';

/**
 * StatusBadge component
 * @param {Object} props - Component props
 * @param {string} props.status - Question status
 * @param {string} props.size - Badge size
 */
const StatusBadge = ({ status, size = 'md' }) => {
  const config = {
    [QUESTION_STATUS.NOT_STARTED]: {
      icon: PlayIcon,
      text: 'Not Started',
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
      borderColor: 'border-gray-200'
    },
    [QUESTION_STATUS.IN_PROGRESS]: {
      icon: ClockIcon,
      text: 'In Progress',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    [QUESTION_STATUS.COMPLETED]: {
      icon: CheckIcon,
      text: 'Completed',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200'
    },
    [QUESTION_STATUS.REVIEWED]: {
      icon: EyeIcon,
      text: 'Reviewed',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200'
    }
  };

  const currentConfig = config[status] || config[QUESTION_STATUS.NOT_STARTED];
  const Icon = currentConfig.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-medium border
        ${currentConfig.color} ${currentConfig.bgColor} ${currentConfig.borderColor}
        ${sizeClasses[size]}
      `}
    >
      <Icon className={iconSizes[size]} />
      {currentConfig.text}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.oneOf(Object.values(QUESTION_STATUS)).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default StatusBadge;
