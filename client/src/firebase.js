// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f5473.firebaseapp.com",
  projectId: "mern-estate-f5473",
  storageBucket: "mern-estate-f5473.appspot.com",
  messagingSenderId: "347461427686",
  appId: "1:347461427686:web:d9f852a8e35b3fcb697627"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);