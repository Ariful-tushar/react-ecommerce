import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBApbp_O4tPNUaoDkqS0Fh36HzkKMLjMkY",
  authDomain: "crwn-clothing-45c58.firebaseapp.com",
  databaseURL: "https://crwn-clothing-45c58.firebaseio.com",
  projectId: "crwn-clothing-45c58",
  storageBucket: "crwn-clothing-45c58.appspot.com",
  messagingSenderId: "979151920971",
  appId: "1:979151920971:web:6d7b4d98ef7873e39212ce",
  measurementId: "G-3X3NS5ZKNB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        phoneNumber,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
