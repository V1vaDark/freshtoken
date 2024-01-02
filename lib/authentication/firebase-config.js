import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, deleteDoc, updateDoc, query, orderBy, limit, getDocs, addDoc } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKXUc_ebvBVvrI9ctyil6JcnIL17ZVgfw",
  authDomain: "fresh-token-d3bc1.firebaseapp.com",
  projectId: "fresh-token-d3bc1",
  storageBucket: "fresh-token-d3bc1.appspot.com",
  messagingSenderId: "1076235205916",
  appId: "1:1076235205916:web:b948978d4407ec67fa4ed9",
  measurementId: "G-9EKS2B9DQZ"
};

const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export { collection, doc, deleteDoc, updateDoc, query, orderBy, limit, getDocs, addDoc };