// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt28ChYLH63eHC7GHhCv9eAaM7v75ahl8",
  authDomain: "weedinga-5c4fa.firebaseapp.com",
  projectId: "weedinga-5c4fa",
  storageBucket: "weedinga-5c4fa.firebasestorage.app",
  messagingSenderId: "29238902591",
  appId: "1:29238902591:web:45078310e3beba3cf21d8a",
  measurementId: "G-NQGRMC1V56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);