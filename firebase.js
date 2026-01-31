// Import Firebase modules safely
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNxqfJN8CG8FRWtdqNW_A70hW6qjYuIdY",
    authDomain: "my-stylist-ai.firebaseapp.com",
    projectId: "my-stylist-ai",
    storageBucket: "my-stylist-ai.firebasestorage.app",
    messagingSenderId: "1057946425346",
    appId: "1:1057946425346:web:dc1ea3fd7297a0f454ef1b",
    measurementId: "G-V37GWVNL0Q"
  };

// ✅ Initialize only if no app already exists
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("🔥 Firebase connected successfully");