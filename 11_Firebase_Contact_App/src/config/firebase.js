// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Lbt6Zklxeyufk-orm-p1Xbb8XSWauRc",
  authDomain: "vite-contact-4da5b.firebaseapp.com",
  projectId: "vite-contact-4da5b",
  storageBucket: "vite-contact-4da5b.appspot.com",
  messagingSenderId: "765201842120",
  appId: "1:765201842120:web:4d8e20a2eb55a685234afd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);