// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
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
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = initializeFirestore(app, { ExperimentalForceLongPolling: true });
// export const  = getFirestore(app)





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics"; // Import isSupported
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCSKAt6m7dbAh_joRz1A-b32H8b_SVDL6s",
//     authDomain: "xskool-3c260.firebaseapp.com",
//     projectId: "xskool-3c260",
//     storageBucket: "xskool-3c260.firebasestorage.app",
//     messagingSenderId: "840368804685",
//     appId: "1:840368804685:web:8176f7c5cf580e59055d04",
//     measurementId: "G-P403SPVMJF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// let analytics; // Declare analytics outside the isSupported() block

// isSupported().then((supported) => {
//     if (supported) {
//         analytics = getAnalytics(app);
//         console.log("Firebase analytics initialized");
//     } else {
//         console.log('Firebase Analytics is not supported in this environment.');
//     }
// }).catch((error) => {
//     console.error("Error during isSupported check", error);
// });

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics }; // Export the analytics instance