// Import the functions you need from the SDKs you need
import { getApps,getApp, initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_UUoVfxKwpXGURbbwCPKScuiAuHqnNw0",
  authDomain: "interview-b617f.firebaseapp.com",
  projectId: "interview-b617f",
  storageBucket: "interview-b617f.firebasestorage.app",
  messagingSenderId: "235611180324",
  appId: "1:235611180324:web:6d200469d4cfb1d674f7b1",
  measurementId: "G-DN739N60WG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth =getAuth(app)
export const db = getFirestore(app);

