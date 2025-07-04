/**
 * Firebase Setup Instructions
 * Step-by-step guide for setting up Firebase authentication
 */

const FirebaseSetupGuide = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🔥 Firebase Setup Guide</h2>
      
      <div className="prose prose-blue max-w-none">
        <h3>Quick Setup (5 minutes)</h3>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Step 1: Create Firebase Project</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firebase Console</a></li>
            <li>Click "Add project" or use existing project</li>
            <li>Follow the setup wizard</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Step 2: Configure Authentication</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>In your Firebase project, go to "Authentication" → "Get started"</li>
            <li>Go to "Sign-in method" tab</li>
            <li>Enable "Email/Password" provider</li>
            <li>Enable "Google" provider (optional)</li>
            <li>Add your domain to "Authorized domains": <code className="bg-gray-200 px-1 rounded">localhost</code></li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Step 3: Get Configuration</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Go to Project Settings (gear icon)</li>
            <li>Scroll down to "Your apps"</li>
            <li>Click "Add app" → Web app</li>
            <li>Copy the configuration object</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Step 4: Update .env File</h4>
          <p className="text-sm mb-3">Replace the values in your <code className="bg-gray-200 px-1 rounded">.env</code> file:</p>
          <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`VITE_FIREBASE_API_KEY="your-api-key"
VITE_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your-project-id"
VITE_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="123456789"
VITE_FIREBASE_APP_ID="1:123456789:web:abcdef"`}
          </pre>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-green-800">That's it!</h4>
              <p className="text-sm text-green-700 mt-1">
                Restart your development server and authentication will work! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseSetupGuide;
