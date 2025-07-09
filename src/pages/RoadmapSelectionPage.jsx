/**
 * Roadmap Selection Page
 * Allows users to choose between different DSA roadmaps
 */

import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  AcademicCapIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ARRAYS_ROADMAP } from '../data/arraysRoadmap';
import { STRINGS_ROADMAP } from '../data/stringsRoadmap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import { Button } from '../components/atoms';

/**
 * RoadmapSelectionPage component
 * Displays available roadmaps for selection
 */
const RoadmapSelectionPage = () => {
  const arraysProgress = useRoadmapProgress(ARRAYS_ROADMAP.id);
  const stringsProgress = useRoadmapProgress(STRINGS_ROADMAP.id);

  const roadmaps = [
    {
      data: ARRAYS_ROADMAP,
      progress: arraysProgress,
      route: '/roadmap/arrays',
      icon: '📊',
      color: 'blue'
    },
    {
      data: STRINGS_ROADMAP,
      progress: stringsProgress,
      route: '/roadmap/strings',
      icon: '🔤',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-900',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>

            {/* Page Title */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-3">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-semibold text-gray-900">
                  Choose Your Learning Path
                </h1>
              </div>
            </div>

            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Master Data Structures & Algorithms
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a learning path below to start your journey from zero to hero. 
            Each roadmap contains carefully curated questions with progressive difficulty 
            and comprehensive explanations.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => {
            const stats = roadmap.progress.getProgressStats(roadmap.data);
            const colors = getColorClasses(roadmap.color);
            
            return (
              <div
                key={roadmap.data.id}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:shadow-lg transition-all duration-200`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{roadmap.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text}`}>
                        {roadmap.data.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {roadmap.data.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${colors.accent}`}>
                      {roadmap.data.sections.length}
                    </div>
                    <div className="text-sm text-gray-600">Sections</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${colors.accent}`}>
                      {roadmap.data.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${colors.accent}`}>
                      {stats.percentage}%
                    </div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                </div>

                {/* Progress Bar */}
                {stats.total > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Progress
                      </span>
                      <span className="text-sm text-gray-500">
                        {stats.completed}/{stats.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${colors.button}`}
                        style={{ width: `${stats.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4" />
                    <span>Estimated time: {roadmap.data.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <QuestionMarkCircleIcon className="h-4 w-4" />
                    <span>Difficulty: Beginner to Advanced</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link to={roadmap.route} className="block">
                  <Button 
                    className={`w-full ${colors.button} text-white`}
                    size="lg"
                  >
                    <span>
                      {stats.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                    </span>
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Button>
                </Link>

                {/* Status Message */}
                {stats.completed === stats.total && stats.total > 0 && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      🎉 Completed!
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            More Topics Coming Soon
          </h3>
          <div className="flex justify-center space-x-6 text-gray-400">
            <div className="text-center">
              <div className="text-3xl mb-2">🔗</div>
              <div className="text-sm">Linked Lists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌳</div>
              <div className="text-sm">Trees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-sm">Graphs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-sm">Dynamic Programming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSelectionPage;
