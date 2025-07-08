/**
 * Difficulty Badge Atom Component
 * Shows question difficulty with appropriate colors
 */

import PropTypes from 'prop-types';
import { DIFFICULTY_CONFIG } from '../../../data/arraysRoadmap';

/**
 * DifficultyBadge component
 * @param {Object} props - Component props
 * @param {string} props.difficulty - Question difficulty (Easy, Medium, Hard)
 * @param {string} props.size - Badge size (sm, md, lg)
 */
const DifficultyBadge = ({ difficulty, size = 'md' }) => {
  const config = DIFFICULTY_CONFIG[difficulty] || DIFFICULTY_CONFIG.Easy;
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${config.color} ${config.bgColor} ${config.borderColor}
        ${sizeClasses[size]}
        border
      `}
    >
      {difficulty}
    </span>
  );
};

DifficultyBadge.propTypes = {
  difficulty: PropTypes.oneOf(['Easy', 'Medium', 'Hard']).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default DifficultyBadge;
