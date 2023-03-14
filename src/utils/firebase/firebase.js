// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCf5An4mbn1gZct8vAT2TmFmyBtD-oFc6M",
  authDomain: "crwn-db-c5f03.firebaseapp.com",
  projectId: "crwn-db-c5f03",
  storageBucket: "crwn-db-c5f03.appspot.com",
  messagingSenderId: "1018175140190",
  appId: "1:1018175140190:web:90cf4bf69fca182bbf5fcf",
  measurementId: "G-PJC1R313NB",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error cateating the user ", error.message);
    }
  }
  return userDocRef;
};
