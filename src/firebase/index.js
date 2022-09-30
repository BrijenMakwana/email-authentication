// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1MoiXmQ6UF4SdhxkejRDvkvZn1ECWizg",
  authDomain: "react-auth-8b96a.firebaseapp.com",
  projectId: "react-auth-8b96a",
  storageBucket: "react-auth-8b96a.appspot.com",
  messagingSenderId: "990062562222",
  appId: "1:990062562222:web:6cae14c7ad634d3fe0563f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
