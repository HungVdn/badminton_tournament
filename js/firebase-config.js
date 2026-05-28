// js/firebase-config.js
// Enter your Firebase project credentials below.
// You can get these keys by going to: Firebase Console -> Project Settings -> Web App.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Check if a real configuration has been filled out by the user
export const isFirebaseConfigured = () => {
  return (
    firebaseConfig.apiKey && 
    firebaseConfig.apiKey !== "YOUR_API_KEY" && 
    firebaseConfig.projectId && 
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  );
};
