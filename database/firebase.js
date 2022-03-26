import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDm2cFwWHaRscy7Cw5XXX4eWPhPDQGQ9YI",
    authDomain: "users-gastroteam.firebaseapp.com",
    projectId: "users-gastroteam",
    storageBucket: "users-gastroteam.appspot.com",
    messagingSenderId: "668242699671",
    appId: "1:668242699671:web:217f1a1c012a0be52190d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export default {
      firebase,
      db,
      auth
  };