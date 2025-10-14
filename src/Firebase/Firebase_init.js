// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALy91MrWQPYCzgdfXl2FVodN2gqzi-ZQA",
  authDomain: "b11-a11-ecdf8.firebaseapp.com",
  projectId: "b11-a11-ecdf8",
  storageBucket: "b11-a11-ecdf8.firebasestorage.app",
  messagingSenderId: "41644621935",
  appId: "1:41644621935:web:920607f5f38d12050f4d9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)