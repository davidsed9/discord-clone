// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIp3LaXvMvVOdkY8lbacAUlglkzkBgUWI",
    authDomain: "discord-clone-69eb5.firebaseapp.com",
    projectId: "discord-clone-69eb5",
    storageBucket: "discord-clone-69eb5.appspot.com",
    messagingSenderId: "981944950688",
    appId: "1:981944950688:web:6c73e6fc5fed4112fa4ec5",
    measurementId: "G-FXNH7H0W49"
  };



  export const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  export const auth = getAuth(firebaseApp);
  export const provider = new GoogleAuthProvider();

  