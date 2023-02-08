// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvLbNp_gvAvguylAbr6anye9rzF7f6fo",
  authDomain: "react-capstone-crown.firebaseapp.com",
  projectId: "react-capstone-crown",
  storageBucket: "react-capstone-crown.appspot.com",
  messagingSenderId: "51123480418",
  appId: "1:51123480418:web:62e23a7edd62ba5f9d2e3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const newUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const authUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, args = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...args,
      });
    } catch (error) {
      console.log(`There was an error creating user: ${error.message}`);
    }
  }

  return userDocRef;
};
