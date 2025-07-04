/**
 * Calendar Connection Status component - Molecule
 * Shows Google Calendar connection status with actions
 */

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Button, Card } from '../atoms';

/**
 * Calendar Connection Status component
 * @param {Object} props - Component props
 * @param {boolean} props.isConnected - Connection status
 * @param {Object} props.calendarUser - Calendar user info
 * @param {Function} props.onConnect - Connect handler
 * @param {Function} props.onDisconnect - Disconnect handler
 * @param {boolean} props.loading - Loading state
 */
const CalendarConnectionStatus = ({
  isConnected,
  calendarUser,
  onConnect,
  onDisconnect,
  loading = false,
}) => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {isConnected ? (
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
          ) : (
            <XCircleIcon className="h-5 w-5 text-gray-400 mr-3" />
          )}
          
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Google Calendar
            </h3>
            {isConnected && calendarUser ? (
              <p className="text-sm text-gray-600">
                Connected as {calendarUser.email}
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Not connected
              </p>
            )}
          </div>
        </div>

        <div>
          {isConnected ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onDisconnect}
              loading={loading}
            >
              Disconnect
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={onConnect}
              loading={loading}
            >
              Connect
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CalendarConnectionStatus;
