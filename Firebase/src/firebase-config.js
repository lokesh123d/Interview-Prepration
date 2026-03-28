// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwP-OcHtGdkK5EH_sRBCUdiQSXNUEF1c8",
  authDomain: "reactlearning-9694b.firebaseapp.com",
  projectId: "reactlearning-9694b",
  storageBucket: "reactlearning-9694b.firebasestorage.app",
  messagingSenderId: "807817399797",
  appId: "1:807817399797:web:538bdd5527421ccb1b64bc",
  measurementId: "G-TBKS880E4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);