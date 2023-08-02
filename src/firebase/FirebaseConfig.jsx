import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  // measurementId: import.meta.env.VITE_measurementId,

  apiKey: "AIzaSyCQuw3EGfbh1pytsbHog9Vtei58GRCVEcI",

  authDomain: "project-tracker-a4e49.firebaseapp.com",

  projectId: "project-tracker-a4e49",

  storageBucket: "project-tracker-a4e49.appspot.com",

  messagingSenderId: "980704303039",

  appId: "1:980704303039:web:4a3be0a65f14ced09f730a",

  measurementId: "G-BHJSXSL354",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
