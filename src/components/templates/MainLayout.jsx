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
    <div className="min-h-screen">
      <Header />
      <main>
        <DevelopmentNotice />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
