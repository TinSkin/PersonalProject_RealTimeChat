// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBslerUnbVi1KEUyjT8YP6qgR0Lcm-gXDU",
    authDomain: "real-time-chat-2fffe.firebaseapp.com",
    projectId: "real-time-chat-2fffe",
    storageBucket: "real-time-chat-2fffe.firebasestorage.app",
    messagingSenderId: "90272981860",
    appId: "1:90272981860:web:c47e4a785e00bdef841071",
    measurementId: "G-ZZHTLZB3G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
