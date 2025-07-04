/**
 * Firebase configuration and initialization
 * Replace with your actual Firebase config
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if all required environment variables are present
const isConfigComplete = Object.values(firebaseConfig).every(value => 
  value && value !== 'undefined' && !value.startsWith('your-')
);

let app, auth, db, functions;

if (isConfigComplete) {
  // Initialize Firebase with real configuration
  console.log('🔥 Initializing Firebase with real configuration');
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  functions = getFunctions(app);
} else {
  // Development mode - disable Firebase to avoid errors
  console.log('🔧 Firebase configuration incomplete - Auth features disabled for development');
  console.log('📝 To enable authentication, add your Firebase credentials to .env file');
  
  auth = null;
  db = null;
  functions = null;
  app = null;
}

export { auth, db, functions };
export default app;
