import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMYNtQ6UVaxq99Yzj191AKgCMn1MXrxco",
  authDomain: "react-storedb-74e0d.firebaseapp.com",
  projectId: "react-storedb-74e0d",
  storageBucket: "react-storedb-74e0d.appspot.com",
  messagingSenderId: "814003140710",
  appId: "1:814003140710:web:82c0175e03bce6fb05d5a7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Auth
const googleProvider = new GoogleAuthProvider();

// Custom Rule
googleProvider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  // check user data not existed
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
