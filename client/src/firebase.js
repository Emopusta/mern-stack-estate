// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9fb79.firebaseapp.com",
  projectId: "mern-estate-9fb79",
  storageBucket: "mern-estate-9fb79.appspot.com",
  messagingSenderId: "458859709038",
  appId: "1:458859709038:web:27acfb4effc7a1abd7dc7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);