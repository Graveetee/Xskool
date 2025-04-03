// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSKAt6m7dbAh_joRz1A-b32H8b_SVDL6s",
    authDomain: "xskool-3c260.firebaseapp.com",
    projectId: "xskool-3c260",
    storageBucket: "xskool-3c260.firebasestorage.app",
    messagingSenderId: "840368804685",
    appId: "1:840368804685:web:8176f7c5cf580e59055d04",
    measurementId: "G-P403SPVMJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)