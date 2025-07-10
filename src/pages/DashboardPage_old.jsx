/**
 * Dashboard Page
 * Main dashboard showing DSA roadmaps - the primary feature of the app
 */

import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { MainLayout } from '../components/templates';
import { Button } from '../components/atoms';
import { ARRAYS_ROADMAP } from '../data/arraysRoadmap';
import { STRINGS_ROADMAP } from '../data/stringsRoadmap';
import { HASHMAPS_SETS_ROADMAP } from '../data/hashmapsSetsRoadmap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';

/**
 * Dashboard Page component
 */
const DashboardPage = () => {
  const { user } = useAuthContext();
  const { contests, loading: contestsLoading, fetchContests } = useContests();
  const {
    isConnected,
    calendarUser,
    loading: calendarLoading,
    connectCalendar,
    disconnectCalendar,
  } = useGoogleCalendar();

  const [stats, setStats] = useState({
    totalContests: 0,
    upcomingContests: 0,
    weeklyContests: 0,
    biweeklyContests: 0,
  });

  // Calculate stats when contests change
  useEffect(() => {
    const now = new Date();
    const upcoming = contests.filter(contest => new Date(contest.startTime) > now);
    
    setStats({
      totalContests: contests.length,
      upcomingContests: upcoming.length,
      weeklyContests: contests.filter(c => c.type === 'weekly').length,
      biweeklyContests: contests.filter(c => c.type === 'biweekly').length,
    });
  }, [contests]);

  // Get next contest
  const nextContest = contests
    .filter(contest => new Date(contest.startTime) > new Date())
    .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))[0];

  // Get recent contests
  const recentContests = contests
    .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
    .slice(0, 3);

  const handleConnectCalendar = async () => {
    try {
      await connectCalendar();
    } catch (error) {
      console.error('Error connecting calendar:', error);
    }
  };

  const handleDisconnectCalendar = async () => {
    try {
      await disconnectCalendar();
    } catch (error) {
      console.error('Error disconnecting calendar:', error);
    }
  };

  if (!user) {
    return (
      <MainLayout>
        {!auth ? (
          <FirebaseSetupGuide />
        ) : (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to DisciplineCoder
            </h1>
            <p className="text-gray-600 mb-6">
              Please sign in to access your dashboard
            </p>
            <Link to="/login">
              <Button>Sign In</Button>
            </Link>
          </div>
        )}
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.displayName || user.email}!
          </h1>
          <p className="text-gray-600">
            Here's your LeetCode contest overview
          </p>
        </div>

        {/* Calendar Connection Status */}
        <CalendarConnectionStatus
          isConnected={isConnected}
          calendarUser={calendarUser}
          onConnect={handleConnectCalendar}
          onDisconnect={handleDisconnectCalendar}
          loading={calendarLoading}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Contests</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContests}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">{stats.upcomingContests}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CalendarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Weekly</p>
                <p className="text-2xl font-bold text-gray-900">{stats.weeklyContests}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CalendarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Biweekly</p>
                <p className="text-2xl font-bold text-gray-900">{stats.biweeklyContests}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Next Contest */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Next Contest</h2>
              <Link to="/contests">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {contestsLoading ? (
              <div className="flex items-center justify-center py-8">
                <LoadingSpinner />
              </div>
            ) : nextContest ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{nextContest.title}</h3>
                  <Badge variant="primary" size="sm">
                    {nextContest.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  {formatDate(nextContest.startTime)}
                </p>
                <p className="text-sm font-medium text-primary-600">
                  {getTimeUntilContest(nextContest.startTime)}
                </p>
                <div className="pt-2">
                  <Button
                    size="sm"
                    onClick={() => window.open(nextContest.url, '_blank')}
                  >
                    View Contest
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 py-8 text-center">
                No upcoming contests found
              </p>
            )}
          </Card>

          {/* Recent Contests */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Contests</h2>
              <Link to="/contests">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {contestsLoading ? (
              <div className="flex items-center justify-center py-8">
                <LoadingSpinner />
              </div>
            ) : recentContests.length > 0 ? (
              <div className="space-y-4">
                {recentContests.map((contest) => (
                  <div key={contest.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {contest.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {formatDate(contest.startTime)}
                        </p>
                      </div>
                      <Badge variant="gray" size="sm">
                        {contest.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 py-8 text-center">
                No contests found
              </p>
            )}
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/roadmap">
              <Button variant="primary" className="w-full">
                <AcademicCapIcon className="h-4 w-4 mr-2" />
                DSA Roadmap
              </Button>
            </Link>
            
            <Link to="/contests">
              <Button variant="outline" className="w-full">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Browse Contests
              </Button>
            </Link>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={fetchContests}
              loading={contestsLoading}
            >
              <ArrowRightIcon className="h-4 w-4 mr-2" />
              Refresh Data
            </Button>
            
            <Link to="/settings">
              <Button variant="outline" className="w-full">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
