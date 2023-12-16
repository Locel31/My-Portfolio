// Import the functions you need from the SDKs you need
import {Timestamp as firestireTimestamp, getFirestore, deleteDoc as firestoreDeleteDoc, setDoc as firestoreSetDoc, doc as firestoreDoc ,collection as firestoreCollection, addDoc as firestoreAddDoc, onSnapshot as firestoreOnSnapshot, orderBy as firestoreOrderBy, getDocs as firestoreGetDocs, getDoc as firestoreGetDoc} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5uYUhwxxrtEc-WESei2JaTHp1LjI2JDA",
  authDomain: "my-portfolio-d954f.firebaseapp.com",
  projectId: "my-portfolio-d954f",
  storageBucket: "my-portfolio-d954f.appspot.com",
  messagingSenderId: "465187039045",
  appId: "1:465187039045:web:c528a2fa96a900ff9fc02c",
  measurementId: "G-CWBCH6X83H"
};
const dateTimetampNow = firestireTimestamp.now();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, firestoreSetDoc as setDoc, firestoreDoc as doc, firestoreOrderBy as orderBy, firestoreCollection as collection, firestoreAddDoc as addDoc, firestoreOnSnapshot as onSnapshot, firestoreGetDocs as  getDocs, firestoreGetDoc as getDoc, firestoreDeleteDoc as deleteDoc, dateTimetampNow as Timestamp};
