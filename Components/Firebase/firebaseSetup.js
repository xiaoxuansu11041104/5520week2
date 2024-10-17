// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6xzKxkP9wTSPi8qzTEZ3JdBMaHzVBwEg",
  authDomain: "new-app-7f7c9.firebaseapp.com",
  projectId: "new-app-7f7c9",
  storageBucket: "new-app-7f7c9.appspot.com",
  messagingSenderId: "853910295365",
  appId: "1:853910295365:web:9088b159efc9672f8a642c",
  measurementId: "G-FR3FK2TC98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getFirestore(app);