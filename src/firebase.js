import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuYLc2YkYRmstTeKgCMPU3iZqWHLkT-EI",
  authDomain: "portofolio-jars.firebaseapp.com",
  projectId: "portofolio-jars",
  storageBucket: "portofolio-jars.appspot.com",
  messagingSenderId: "53651685528",
  appId: "1:53651685528:web:389652ff2c5de93f6bd0ed",
  measurementId: "G-CW39WGB8GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };