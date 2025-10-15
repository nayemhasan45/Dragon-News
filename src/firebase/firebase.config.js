// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo8VHwFXcN0KgpvcpBY1HXcgUmNkmp6JM",
  authDomain: "dragon-news-c7718.firebaseapp.com",
  projectId: "dragon-news-c7718",
  storageBucket: "dragon-news-c7718.firebasestorage.app",
  messagingSenderId: "276168772547",
  appId: "1:276168772547:web:5c6eb971e14b3ff34fcb76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)