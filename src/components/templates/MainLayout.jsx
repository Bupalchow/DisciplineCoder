/**
 * Main Layout component - Template
 * Base layout with header and main content area
 */

import { Header } from '../organisms';
import { DevelopmentNotice } from '../atoms';

/**
 * Main Layout component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <DevelopmentNotice />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
