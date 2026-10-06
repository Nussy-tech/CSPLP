import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBT9qeWTlj3aAwbT-FkuJIQ4oM2fSS5s4k",
    authDomain: "csplp-research-project.firebaseapp.com",
    projectId: "csplp-research-project",
    storageBucket: "csplp-research-project.firebasestorage.app",
    messagingSenderId: "973889731583",
    appId: "1:973889731583:web:cc0f266e1f5436f22845ca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    auth,
    db,
    collection,
    addDoc,
    getDoc,
    getDocs,
    serverTimestamp,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
};