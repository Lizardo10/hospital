// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.APIKEY_FIREBASE,
  authDomain: process.env.authDomain_FIREBASE,
  projectId: process.env.projectId_FIREBASE,
  storageBucket: process.env.storageBucket_FIREBASE,
  messagingSenderId: process.env.messagingSenderId_FIREBASE,
  appId: process.env.appId_FIREBASE,
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db= getFirestore(app);
