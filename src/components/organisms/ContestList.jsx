/**
 * Contest List component - Organism
 * Displays a list of contests with filtering and actions
 */

import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Button, Input, Badge, LoadingSpinner } from '../atoms';
import { ContestCard } from '../molecules';
import { CONTEST_TYPES } from '../../constants';

/**
 * Contest List component
 * @param {Object} props - Component props
 * @param {Array} props.contests - Array of contests
 * @param {boolean} props.loading - Loading state
 * @param {Function} props.onAddToCalendar - Add to calendar handler
 * @param {Function} props.onRefresh - Refresh contests handler
 * @param {Array} props.calendarEvents - Array of calendar events
 */
const ContestList = ({
  contests = [],
  loading = false,
  onAddToCalendar,
  onRefresh,
  calendarEvents = [],
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [addingToCalendar, setAddingToCalendar] = useState(null);

  // Filter contests based on search and type
  const filteredContests = contests.filter(contest => {
    const matchesSearch = contest.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || contest.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Check if contest is already in calendar
  const isInCalendar = (contestId) => {
    return calendarEvents.some(event => event.contestId === contestId);
  };

  // Handle add to calendar with loading state
  const handleAddToCalendar = async (contest) => {
    try {
      setAddingToCalendar(contest.id);
      await onAddToCalendar?.(contest);
    } catch (error) {
      console.error('Error adding to calendar:', error);
    } finally {
      setAddingToCalendar(null);
    }
  };

  const contestTypes = [
    { value: 'all', label: 'All Contests' },
    { value: CONTEST_TYPES.WEEKLY, label: 'Weekly' },
    { value: CONTEST_TYPES.BIWEEKLY, label: 'Biweekly' },
    { value: CONTEST_TYPES.OTHER, label: 'Other' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">LeetCode Contests</h1>
          <p className="text-gray-600">
            {filteredContests.length} contest{filteredContests.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <Button
          onClick={onRefresh}
          loading={loading}
          variant="outline"
        >
          Refresh
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search contests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="sm:w-48">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          >
            {contestTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contest Stats */}
      <div className="flex flex-wrap gap-4">
        <Badge variant="info">
          Total: {contests.length}
        </Badge>
        <Badge variant="primary">
          Weekly: {contests.filter(c => c.type === 'weekly').length}
        </Badge>
        <Badge variant="success">
          Biweekly: {contests.filter(c => c.type === 'biweekly').length}
        </Badge>
        <Badge variant="gray">
          Other: {contests.filter(c => c.type === 'other').length}
        </Badge>
      </div>

      {/* Loading State */}
      {loading && contests.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-gray-600">Loading contests...</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && contests.length === 0 && (
        <div className="text-center py-12">
          <FunnelIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No contests found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any contests. Try refreshing or check back later.
          </p>
          <Button onClick={onRefresh}>
            Refresh Contests
          </Button>
        </div>
      )}

      {/* No Results State */}
      {!loading && contests.length > 0 && filteredContests.length === 0 && (
        <div className="text-center py-12">
          <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No matching contests</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedType('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Contest Grid */}
      {filteredContests.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredContests.map((contest) => (
            <ContestCard
              key={contest.id}
              contest={contest}
              onAddToCalendar={handleAddToCalendar}
              isInCalendar={isInCalendar(contest.id)}
              loading={addingToCalendar === contest.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContestList;
