
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA2s0U6wmC-EzL3uuPf1UtsGQAotGPy0c",
  authDomain: "roduct-redux.firebaseapp.com",
  projectId: "roduct-redux",
  storageBucket: "roduct-redux.firebasestorage.app",
  messagingSenderId: "570027914153",
  appId: "1:570027914153:web:bbdbe6e57b47aaa0fa8ab8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)