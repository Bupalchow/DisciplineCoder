/**
 * Contest Card component - Molecule
 * Displays contest information in a card format
 */

import { CalendarIcon, ClockIcon, LinkIcon } from '@heroicons/react/24/outline';
import { Card, Badge, Button } from '../atoms';
import { formatDate, getTimeUntilContest, isUpcoming } from '../../utils/dateHelpers';

/**
 * Contest Card component
 * @param {Object} props - Component props
 * @param {Object} props.contest - Contest object
 * @param {Function} props.onAddToCalendar - Add to calendar handler
 * @param {boolean} props.isInCalendar - Whether contest is already in calendar
 * @param {boolean} props.loading - Loading state for calendar action
 */
const ContestCard = ({
  contest,
  onAddToCalendar,
  isInCalendar = false,
  loading = false,
}) => {
  const upcoming = isUpcoming(contest.startTime);
  const timeUntil = getTimeUntilContest(contest.startTime);

  const getContestTypeVariant = (type) => {
    switch (type) {
      case 'weekly':
        return 'primary';
      case 'biweekly':
        return 'success';
      default:
        return 'info';
    }
  };

  const handleAddToCalendar = (e) => {
    e.stopPropagation();
    onAddToCalendar?.(contest);
  };

  const handleOpenContest = () => {
    window.open(contest.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {contest.title}
            </h3>
            <Badge
              variant={getContestTypeVariant(contest.type)}
              size="sm"
            >
              {contest.type}
            </Badge>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
              {formatDate(contest.startTime)}
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
              Duration: {Math.floor(contest.duration / 60)} minutes
            </div>

            {upcoming && (
              <div className="text-sm font-medium text-primary-600">
                {timeUntil}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {contest.description}
          </p>
        </div>

        {contest.imageUrl && (
          <div className="ml-4 flex-shrink-0">
            <img
              src={contest.imageUrl}
              alt={contest.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Button
          variant="outline"
          size="sm"
          onClick={handleOpenContest}
          className="flex items-center"
        >
          <LinkIcon className="h-4 w-4 mr-1" />
          View Contest
        </Button>

        {upcoming && (
          <Button
            size="sm"
            onClick={handleAddToCalendar}
            loading={loading}
            disabled={isInCalendar}
          >
            {isInCalendar ? (
              <>
                <CalendarIcon className="h-4 w-4 mr-1" />
                Added
              </>
            ) : (
              <>
                <CalendarIcon className="h-4 w-4 mr-1" />
                Add to Calendar
              </>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ContestCard;
