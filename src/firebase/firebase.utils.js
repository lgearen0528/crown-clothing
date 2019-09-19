import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbXo3EVAPHstl6qDp_GGZ8xZNIje_JIvY",
  authDomain: "crown-clothing-d65e6.firebaseapp.com",
  databaseURL: "https://crown-clothing-d65e6.firebaseio.com",
  projectId: "crown-clothing-d65e6",
  storageBucket: "",
  messagingSenderId: "618926919875",
  appId: "1:618926919875:web:6a3f4307c6a08be5b81276"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;