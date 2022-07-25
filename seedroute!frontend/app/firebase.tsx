// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS2jqy3AkL35WbnFaEh3jjcyGr3FYvJmw",
  authDomain: "seedroute.firebaseapp.com",
  projectId: "seedroute",
  storageBucket: "seedroute.appspot.com",
  messagingSenderId: "29822922969",
  appId: "1:29822922969:web:3049b65517a1653a468ec8",
  measurementId: "G-WD6G8MXPRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);