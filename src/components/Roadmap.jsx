import React from "react";

/**
 * Roadmap component displays upcoming features and milestones for DisciplineCoder.
 * @returns {JSX.Element}
 */
const Roadmap = () => {
  return (
    <section className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">🚀 Project Roadmap</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>AI Code Review:</strong> Full Gemini API integration and live feedback</li>
        <li><strong>Calendar Sync:</strong> Google Calendar integration for contest reminders</li>
        <li><strong>Progress Tracking:</strong> Personalized dashboard and streaks</li>
        <li><strong>Community Features:</strong> Leaderboards, forums, and peer reviews</li>
        <li><strong>Mobile Support:</strong> Responsive design and PWA features</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">Have a feature request? Let us know in the Community!</p>
    </section>
  );
};

export default Roadmap;
