import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkLayCegNYvyrwIlrGYmz8vz0Naikff4g",
    authDomain: "eccomerce-ch.firebaseapp.com",
    projectId: "eccomerce-ch",
    storageBucket: "eccomerce-ch.firebasestorage.app",
    messagingSenderId: "916892056135",
    appId: "1:916892056135:web:f06eee43845150ed9a8f62"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);