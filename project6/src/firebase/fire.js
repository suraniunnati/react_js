// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPJO-yCQVJEqXnrki28__Jxm3qTAsTfQ",
  authDomain: "project6-1c356.firebaseapp.com",
  projectId: "project6-1c356",
  storageBucket: "project6-1c356.firebasestorage.app",
  messagingSenderId: "1055274988556",
  appId: "1:1055274988556:web:92f5b7e99f016109816a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)