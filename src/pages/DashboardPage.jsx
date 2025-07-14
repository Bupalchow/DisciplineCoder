/**
 * Dashboard Page
 * Main dashboard showing DSA roadmaps - the primary feature of the app
 */

import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { MainLayout } from '../components/templates';
import { Button } from '../components/atoms';
import { ARRAYS_ROADMAP } from '../data/arraysRoadmap';
import { STRINGS_ROADMAP } from '../data/stringsRoadmap';
import { HASHMAPS_SETS_ROADMAP } from '../data/hashmapsSetsRoadmap';
import { STACK_ROADMAP } from '../data/stackRoadmap';
import { QUEUE_ROADMAP } from '../data/queueRoadmap';
import { LINKED_LISTS_ROADMAP } from '../data/linkedListsRoadmap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';

/**
 * Dashboard Page component
 * Displays DSA roadmaps for selection - the main feature of the app
 */
const DashboardPage = () => {
  const arraysProgress = useRoadmapProgress(ARRAYS_ROADMAP.id);
  const stringsProgress = useRoadmapProgress(STRINGS_ROADMAP.id);
  const hashmapsSetsProgress = useRoadmapProgress(HASHMAPS_SETS_ROADMAP.id);
  const stackProgress = useRoadmapProgress(STACK_ROADMAP.id);
  const queueProgress = useRoadmapProgress(QUEUE_ROADMAP.id);
  const linkedListsProgress = useRoadmapProgress(LINKED_LISTS_ROADMAP.id);

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
    },
    {
      data: HASHMAPS_SETS_ROADMAP,
      progress: hashmapsSetsProgress,
      route: '/roadmap/hashmaps-sets',
      icon: '🗂️',
      color: 'indigo'
    },
    {
      data: STACK_ROADMAP,
      progress: stackProgress,
      route: '/roadmap/stack',
      icon: '🥞',
      color: 'green'
    },
    {
      data: QUEUE_ROADMAP,
      progress: queueProgress,
      route: '/roadmap/queue',
      icon: '🚶‍➡️',
      color: 'orange'
    },
    {
      data: LINKED_LISTS_ROADMAP,
      progress: linkedListsProgress,
      route: '/roadmap/linked-lists',
      icon: '🔗',
      color: 'teal'
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
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-900',
        accent: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
        accent: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-900',
        accent: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-900',
        accent: 'text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">DSA Roadmaps</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Data Structures & Algorithms with our curated learning paths. 
            From basic arrays to advanced queues - build your skills progressively.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {roadmaps.map((roadmap) => {
            const colorClasses = getColorClasses(roadmap.color);
            const progressStats = roadmap.progress.getProgressStats(roadmap.data);
            const progressPercentage = progressStats.percentage;

            return (
              <div
                key={roadmap.data.id}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{roadmap.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.bg} ${colorClasses.text}`}>
                    {roadmap.data.estimatedTime}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className={`text-xl font-bold ${colorClasses.text} mb-2`}>
                  {roadmap.data.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {roadmap.data.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${colorClasses.accent}`}>
                      {roadmap.data.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${colorClasses.accent}`}>
                      {progressStats.completed}
                    </div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className={`font-medium ${colorClasses.accent}`}>
                      {progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${colorClasses.button}`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Key Topics Preview */}
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-2">
                    <QuestionMarkCircleIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Key Topics</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {roadmap.data.sections.slice(0, 2).map((section) => (
                      <span
                        key={section.id}
                        className="px-2 py-1 bg-white text-xs rounded-md text-gray-600 border"
                      >
                        {section.title.replace(/^\d+\.\s*/, '')}
                      </span>
                    ))}
                    {roadmap.data.sections.length > 2 && (
                      <span className="px-2 py-1 bg-white text-xs rounded-md text-gray-500 border">
                        +{roadmap.data.sections.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link to={roadmap.route} className="block">
                  <Button
                    className={`w-full ${colorClasses.button} text-white justify-center`}
                  >
                    {progressStats.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Additional Info */}
                {progressStats.completed > 0 && (
                  <div className="mt-3 text-center">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-3 w-3" />
                        <span>Last updated: {progressStats.lastUpdated ? new Date(progressStats.lastUpdated).toLocaleDateString() : 'Never'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Master DSA?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our roadmaps are designed by industry experts and follow a progressive difficulty curve. 
            Each question is handpicked to build your understanding step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roadmap/arrays">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start with Arrays
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/roadmap/queue">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Try Queue Problems
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
