/**
 * Development Notice component
 * Shows when Firebase is not configured properly
 */

import { auth } from '../../config/firebase';

const DevelopmentNotice = () => {
  // Only show if Firebase is not configured
  if (auth) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Authentication Setup Required
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <p>
              To test authentication features, you need to set up Firebase credentials in your <code className="bg-blue-100 px-1 rounded">.env</code> file.
            </p>
            <div className="mt-2">
              <p className="font-medium">Steps to enable authentication:</p>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="underline">Firebase Console</a></li>
                <li>Create a new project or use an existing one</li>
                <li>Enable Authentication with Email/Password and Google</li>
                <li>Add your domain to authorized domains</li>
                <li>Copy your Firebase config to the <code className="bg-blue-100 px-1 rounded">.env</code> file</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;
