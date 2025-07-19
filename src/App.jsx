/**
 * Main Application Component
 * Sets up routing and global providers
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from './components/atoms';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider, useAuthContext } from './contexts';
import {
  DashboardPage,
  SettingsPage,
  LoginPage,
  RegisterPage,
  DailyChallengePage,
  CommunityPage,
  ArraysRoadmapPage,
  StringsRoadmapPage,
  HashMapsSetsRoadmapPage,
  StackRoadmapPage,
  QueueRoadmapPage,
  LinkedListsRoadmapPage,
  TreesRoadmapPage,
  BacktrackingRoadmapPage,
  DynamicProgrammingRoadmapPage,
  BinarySearchRoadmapPage,
} from './pages';

/**
 * Protected Route component
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

/**
 * Public Route component
 * Redirects to dashboard if user is already authenticated
 */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return !user ? children : <Navigate to="/" replace />;
};

/**
 * Main App component
 */
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/daily-challenge"
                element={
                  <ProtectedRoute>
                    <DailyChallengePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/community"
                element={
                  <ProtectedRoute>
                    <CommunityPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/arrays"
                element={
                  <ProtectedRoute>
                    <ArraysRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/strings"
                element={
                  <ProtectedRoute>
                    <StringsRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/hashmaps-sets"
                element={
                  <ProtectedRoute>
                    <HashMapsSetsRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/stack"
                element={
                  <ProtectedRoute>
                    <StackRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/queue"
                element={
                  <ProtectedRoute>
                    <QueueRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/linked-lists"
                element={
                  <ProtectedRoute>
                    <LinkedListsRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/trees"
                element={
                  <ProtectedRoute>
                    <TreesRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/backtracking"
                element={
                  <ProtectedRoute>
                    <BacktrackingRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/dynamic-programming"
                element={
                  <ProtectedRoute>
                    <DynamicProgrammingRoadmapPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/roadmap/binary-search"
                element={
                  <ProtectedRoute>
                    <BinarySearchRoadmapPage />
                  </ProtectedRoute>
                }
              />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
