// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7k_J92BSIKMviSWH7XD-Cvhu_23mfg6Q",
  authDomain: "appcompras-331aa.firebaseapp.com",
  projectId: "appcompras-331aa",
  storageBucket: "appcompras-331aa.appspot.com",
  messagingSenderId: "689315214662",
  appId: "1:689315214662:web:1892d33d66d3646ac96147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)