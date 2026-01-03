// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKBTwk1WoB6qPxCMctukpE7lX9vZkl5n8",
  authDomain: "netflixgpt-79c2e.firebaseapp.com",
  projectId: "netflixgpt-79c2e",
  storageBucket: "netflixgpt-79c2e.firebasestorage.app",
  messagingSenderId: "92821958782",
  appId: "1:92821958782:web:1bf810070d627e334a282f",
  measurementId: "G-EDRNH2DGVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

