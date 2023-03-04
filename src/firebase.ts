import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHkZcbGGMm7a-LMe_MwWNL3K84AdjyfwM",
  authDomain: "progoti-news.firebaseapp.com",
  projectId: "progoti-news",
  storageBucket: "progoti-news.appspot.com",
  messagingSenderId: "600874200449",
  appId: "1:600874200449:web:54d0dc67aace99fbcccc80",
  measurementId: "G-S9Y4BLXSPV",
  databaseURL:'https://progoti-news-default-rtdb.asia-southeast1.firebasedatabase.app/'
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_MESUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export default { db, analytics,auth}