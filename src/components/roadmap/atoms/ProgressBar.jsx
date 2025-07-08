/**
 * Progress Bar Atom Component
 * Shows completion progress with percentage
 */

import PropTypes from 'prop-types';

/**
 * ProgressBar component
 * @param {Object} props - Component props
 * @param {number} props.current - Current progress value
 * @param {number} props.total - Total value
 * @param {string} props.className - Additional CSS classes
 */
const ProgressBar = ({ current, total, className = '' }) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          Progress
        </span>
        <span className="text-sm text-gray-500">
          {current}/{total} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ProgressBar;
