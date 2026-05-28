// js/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';

let db = null;
let app = null;

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("🔥 Firebase Firestore initialized successfully!");
  } catch (e) {
    console.error("❌ Failed to initialize Firebase:", e);
  }
} else {
  console.warn("⚠️ Firebase is not configured yet. Switched to offline LocalStorage mode. Open 'js/firebase-config.js' to add your keys!");
}

export { db };
