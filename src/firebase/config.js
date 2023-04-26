// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSGkaVsJA7cSC1q1qUQc4adK2tH6Un4t8",
    authDomain: "miniblog-3c64c.firebaseapp.com",
    projectId: "miniblog-3c64c",
    storageBucket: "miniblog-3c64c.appspot.com",
    messagingSenderId: "656697122332",
    appId: "1:656697122332:web:3c84d6016e7c2aa0f509d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}