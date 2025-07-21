// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-qHqPk-MA5MOW3kyhX-QZVirsrKQCwRY",
  authDomain: "react-crud-project-c5f3a.firebaseapp.com",
  projectId: "react-crud-project-c5f3a",
  storageBucket: "react-crud-project-c5f3a.firebasestorage.app",
  messagingSenderId: "916869004033",
  appId: "1:916869004033:web:b57b106d805bbc5312b900",
  measurementId: "G-5NFYCPCGWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDB = getFirestore(app)