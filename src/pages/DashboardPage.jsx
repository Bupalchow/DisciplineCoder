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
import MainLayout from '../components/templates/MainLayout';
import { Button } from '../components/atoms';
import { ARRAYS_ROADMAP } from '../data/arraysRoadmap';
import { STRINGS_ROADMAP } from '../data/stringsRoadmap';
import { HASHMAPS_SETS_ROADMAP } from '../data/hashmapsSetsRoadMap';
import { STACK_ROADMAP } from '../data/stackRoadmap';
import { QUEUE_ROADMAP } from '../data/queueRoadmap';
import { LINKED_LISTS_ROADMAP } from '../data/linkedListsRoadmap';
import { TREES_ROADMAP } from '../data/treesRoadmap';
import { BACKTRACKING_ROADMAP } from '../data/backtrackingRoadMap';
import { DYNAMIC_PROGRAMMING_ROADMAP } from '../data/dynamicProgrammingRoadMap';
import { BINARY_SEARCH_ROADMAP } from '../data/binarySearchRoadMap';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import { Roadmap } from './index';


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
  const treesProgress = useRoadmapProgress(TREES_ROADMAP.id);
  const backtrackingProgress = useRoadmapProgress(BACKTRACKING_ROADMAP.id);
  const dynamicProgrammingProgress = useRoadmapProgress(DYNAMIC_PROGRAMMING_ROADMAP.id);
  const binarySearchProgress = useRoadmapProgress(BINARY_SEARCH_ROADMAP.id);


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
    },
    {
      data: TREES_ROADMAP,
      progress: treesProgress,
      route: '/roadmap/trees',
      icon: '🌳',
      color: 'emerald'
    },
    {
      data: BACKTRACKING_ROADMAP,
      progress: backtrackingProgress,
      route: '/roadmap/backtracking',
      icon: '🔄',
      color: 'red'
    },
    {
      data: DYNAMIC_PROGRAMMING_ROADMAP,
      progress: dynamicProgrammingProgress,
      route: '/roadmap/dynamic-programming',
      icon: '🧮',
      color: 'violet'
    },
    {
      data: BINARY_SEARCH_ROADMAP,
      progress: binarySearchProgress,
      route: '/roadmap/binary-search',
      icon: '🔍',
      color: 'cyan'
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
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        accent: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-900',
        accent: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700'
      },
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        text: 'text-violet-900',
        accent: 'text-violet-600',
        button: 'bg-violet-600 hover:bg-violet-700'
      },
      cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        text: 'text-cyan-900',
        accent: 'text-cyan-600',
        button: 'bg-cyan-600 hover:bg-cyan-700'
      }
    };
    return colors[color] || colors.blue;
  };

  const getProgressGradient = (color) => {
    const gradients = {
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      indigo: 'from-indigo-400 to-indigo-600',
      green: 'from-green-400 to-green-600',
      orange: 'from-orange-400 to-orange-600',
      teal: 'from-teal-400 to-teal-600',
      emerald: 'from-emerald-400 to-emerald-600',
      red: 'from-red-400 to-red-600',
      violet: 'from-violet-400 to-violet-600',
      cyan: 'from-cyan-400 to-cyan-600'
    };
    return `bg-gradient-to-r ${gradients[color] || gradients.blue}`;
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          <div className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent text-center sm:text-left">
                  DSA Roadmaps
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                Master Data Structures & Algorithms with our curated learning paths. From basic 
                arrays to advanced queues - build your skills progressively.
              </p>
              
              {/* Quick Stats with better mobile layout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-lg sm:max-w-2xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                  <div className="text-xs sm:text-sm text-gray-600">Roadmaps</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">300+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Questions</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Concepts</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Roadmap Cards with Modern Design */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {roadmaps.map((roadmap, index) => {
                const colorClasses = getColorClasses(roadmap.color);
                const progressStats = roadmap.progress.getProgressStats(roadmap.data);
                const progressPercentage = progressStats.percentage;

                return (
                  <div
                    key={roadmap.data.id}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                    
                    <div className={`relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-xl ${colorClasses.bg} ${colorClasses.border}`}>
                      {/* Progress indicator */}
                      {progressPercentage > 0 && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 rounded-t-2xl overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getProgressGradient(roadmap.color)} transition-all duration-500`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      )}
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {roadmap.icon}
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/60 backdrop-blur-sm ${colorClasses.text} border border-white/30`}>
                            {roadmap.data.estimatedTime}
                          </div>
                          {progressStats.completed > 0 && (
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm animate-pulse"></div>
                          )}
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className={`text-xl font-bold ${colorClasses.text} mb-3 group-hover:text-gray-900 transition-colors duration-300`}>
                        {roadmap.data.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {roadmap.data.description}
                      </p>

                      {/* Enhanced Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30">
                          <div className={`text-xl font-bold ${colorClasses.accent}`}>
                            {roadmap.data.totalQuestions}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">Questions</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30">
                          <div className={`text-xl font-bold ${progressStats.completed > 0 ? 'text-green-600' : colorClasses.accent}`}>
                            {progressStats.completed}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">Completed</div>
                        </div>
                      </div>

                      {/* Modern Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 font-medium">Progress</span>
                          <span className={`font-bold ${progressPercentage > 0 ? 'text-green-600' : colorClasses.accent}`}>
                            {progressPercentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200/60 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ease-out ${getProgressGradient(roadmap.color)}`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Enhanced Key Topics */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <QuestionMarkCircleIcon className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-700">Key Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {roadmap.data.sections.slice(0, 2).map((section) => (
                            <span
                              key={section.id}
                              className="px-3 py-1 bg-white/70 backdrop-blur-sm text-xs rounded-lg text-gray-700 border border-white/40 font-medium"
                            >
                              {section.title.replace(/^\d+\.\s*/, '')}
                            </span>
                          ))}
                          {roadmap.data.sections.length > 2 && (
                            <span className="px-3 py-1 bg-white/50 backdrop-blur-sm text-xs rounded-lg text-gray-500 border border-white/30 font-medium">
                              +{roadmap.data.sections.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Action Button with better mobile support */}
                      <Link to={roadmap.route} className="block">
                        <Button
                          className={`w-full ${colorClasses.button} text-white justify-center font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-2xl`}
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <span className="text-sm sm:text-base">{progressStats.completed > 0 ? 'Continue Learning' : 'Start Learning'}</span>
                            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </Link>

                      {/* Progress Badge for Completed Items */}
                      {progressStats.completed > 0 && (
                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-100/80 backdrop-blur-sm text-green-700 text-xs rounded-full border border-green-200/50">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium">In Progress</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Roadmap />
        </div>
 
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
