import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect,
    signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword
 } from "firebase/auth";

 import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
 } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClqr5i8eBlVjbNigNK-lgLq_6fAyufjI0",
  authDomain: "clothing-db-4afae.firebaseapp.com",
  projectId: "clothing-db-4afae",
  storageBucket: "clothing-db-4afae.appspot.com",
  messagingSenderId: "1058812294065",
  appId: "1:1058812294065:web:7a3690a2e3a712103f0390"
};

// Initialize Firebase instance
const firebaseApp = initializeApp(firebaseConfig);

// in order to use Google auth, 
// we first need to use aoogle provider

// this is initialing a google provider instance
const provider = new GoogleAuthProvider();

//the setCustomParameters will take some config objects
// with this we can set different ways of 
// how you want the Google Auth Provider to behave

provider.setCustomParameters({
    //every time someone
    //interacts with our google provider
    //we want to always force them 
    //to select an account
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if(!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch (error){
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password ) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}