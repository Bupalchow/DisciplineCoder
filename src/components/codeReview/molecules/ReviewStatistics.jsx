/**
 * Review Statistics Component
 * Displays analytics and insights about code review performance
 */

/**
 * Stat card component
 */
const StatCard = ({ title, value, subtitle, icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Language distribution chart
 */
const LanguageDistribution = ({ distribution }) => {
  const total = Object.values(distribution).reduce((sum, count) => sum + count, 0);
  
  const languages = Object.entries(distribution).map(([lang, count]) => ({
    language: lang,
    count,
    percentage: Math.round((count / total) * 100),
  })).sort((a, b) => b.count - a.count);

  const getLanguageIcon = (language) => {
    const icons = {
      javascript: '🟨',
      python: '🐍',
      java: '☕',
      cpp: '⚡',
      go: '🔵',
      rust: '🦀',
      typescript: '💙',
    };
    return icons[language] || '📄';
  };

  const getLanguageName = (language) => {
    const names = {
      javascript: 'JavaScript',
      python: 'Python',
      java: 'Java',
      cpp: 'C++',
      go: 'Go',
      rust: 'Rust',
      typescript: 'TypeScript',
    };
    return names[language] || language;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Language Distribution</h4>
      <div className="space-y-3">
        {languages.map(({ language, count, percentage }) => (
          <div key={language} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span>{getLanguageIcon(language)}</span>
              <span className="text-sm font-medium text-gray-700">
                {getLanguageName(language)}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">
                {count} ({percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Improvement areas chart
 */
const ImprovementAreas = ({ areas }) => {
  const getScoreColor = (score) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Areas for Improvement</h4>
      <div className="space-y-4">
        {areas.map((area) => (
          <div key={area.category}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {area.category}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {area.score}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getScoreColor(area.score)}`}
                style={{ width: `${(area.score / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Progress chart component
 */
const ProgressChart = ({ monthlyProgress }) => {
  const maxScore = Math.max(...monthlyProgress.map(p => p.score));
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Monthly Progress</h4>
      <div className="flex items-end justify-between h-32 space-x-2">
        {monthlyProgress.map((month) => (
          <div key={month.month} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-200 rounded-t">
              <div
                className="bg-blue-500 rounded-t transition-all duration-500"
                style={{ 
                  height: `${(month.score / maxScore) * 100}px`,
                  minHeight: '4px'
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 mt-2">{month.month}</span>
            <span className="text-xs font-medium text-gray-900">{month.score}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Average score progression over time
        </p>
      </div>
    </div>
  );
};

/**
 * Main Review Statistics Component
 */
export const ReviewStatistics = ({ statistics }) => {
  if (!statistics) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const {
    totalReviews,
    averageScore,
    languageDistribution,
    improvementAreas,
    monthlyProgress,
  } = statistics;

  // Calculate trends
  const recentTrend = monthlyProgress.length >= 2 
    ? monthlyProgress[monthlyProgress.length - 1].score - monthlyProgress[monthlyProgress.length - 2].score
    : 0;

  const mostUsedLanguage = Object.entries(languageDistribution)
    .sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Reviews"
          value={totalReviews}
          subtitle="Code submissions"
          icon="📊"
          color="blue"
        />
        <StatCard
          title="Average Score"
          value={`${averageScore}/10`}
          subtitle={recentTrend > 0 ? `+${recentTrend.toFixed(1)} this month` : recentTrend < 0 ? `${recentTrend.toFixed(1)} this month` : 'No change'}
          icon="⭐"
          color="green"
        />
        <StatCard
          title="Favorite Language"
          value={mostUsedLanguage ? mostUsedLanguage[0].toUpperCase() : 'N/A'}
          subtitle={mostUsedLanguage ? `${mostUsedLanguage[1]} reviews` : ''}
          icon="💻"
          color="purple"
        />
        <StatCard
          title="This Month"
          value={monthlyProgress[monthlyProgress.length - 1]?.score || 0}
          subtitle="Latest score"
          icon="📈"
          color="yellow"
        />
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LanguageDistribution distribution={languageDistribution} />
        <ImprovementAreas areas={improvementAreas} />
      </div>

      {/* Progress Chart */}
      <ProgressChart monthlyProgress={monthlyProgress} />
    </div>
  );
};
