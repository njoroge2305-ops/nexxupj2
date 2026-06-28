import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRqsGlEQxKEiaEgBuZPFBn_9eHgnqfM5I",
    authDomain: "log-in-nexx-41628.firebaseapp.com",
    projectId: "log-in-nexx-41628",
    storageBucket: "log-in-nexx-41628.firebasestorage.app",
    messagingSenderId: "639480730659",
    appId: "1:639480730659:web:8299afe51001557070cd96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Auth
export const auth = getAuth(app);