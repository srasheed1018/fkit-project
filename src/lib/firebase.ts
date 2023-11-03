import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyaUzF52qIPTJ7y7DfD5CFkiFSEmwQ9kw",
    authDomain: "fkit-project-918ef.firebaseapp.com",
    projectId: "fkit-project-918ef",
    storageBucket: "fkit-project-918ef.appspot.com",
    messagingSenderId: "637390069219",
    appId: "1:637390069219:web:1697b6bf1cb5a0e23f14d6"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();