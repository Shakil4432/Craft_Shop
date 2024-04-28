// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wICE-wbIh84_2LcA0hZb7Puj1XYCgwc",
  authDomain: "jute-and-wooden-craft-auth.firebaseapp.com",
  projectId: "jute-and-wooden-craft-auth",
  storageBucket: "jute-and-wooden-craft-auth.appspot.com",
  messagingSenderId: "127093749956",
  appId: "1:127093749956:web:3646286a7c06d56bceb191",
  measurementId: "G-R45GDMLQNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;