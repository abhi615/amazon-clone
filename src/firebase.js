import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAFqhid9nRwvHapVoBHtKnWTxbdDm-itEo",
    authDomain: "amzon-challenge-7a646.firebaseapp.com",
    projectId: "amzon-challenge-7a646",
    storageBucket: "amzon-challenge-7a646.appspot.com",
    messagingSenderId: "124008050581",
    appId: "1:124008050581:web:79b36afab3fce3bd08109c",
    measurementId: "G-XHN3CKWVX8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };