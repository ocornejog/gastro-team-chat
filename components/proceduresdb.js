import React, {useState, useEffect} from 'react';
//import * as auth from '@react-native-firebase/auth';
//import firebase from '../database/firebase';
//import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/firestore';
import firebase from '../database/firebase';
import { db } from '../models/task';
//import { signIn, signOut } from '../components/context';
//import firebase from '../database/firebase';

export function signingup( email, password ) {
  //const authForDefaultApp = firebase.auth();
  //authForDefaultApp
  //const db = firebase.firestore()
  firebase.auth
  /*
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
  const db = firebase.firestore()
  */
  //firebase.db.collection('users').auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    //const val = true;
    console.log(user);
    alert('User saved!');
    global.isAcorrectSignUp = true;
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('The email is already in use');
      alert('The email is already in use');
      //const val = false;
    }
    if (error.code === 'auth/invalid-email') {
      console.log('The email is not valid');
      alert('The email is not valid');
      //const val = false;
    }
    if (error.code === 'auth/operation-not-allowed') {
      console.log('User not allowed to enter');
      alert('User not allowed to enter');
      //const val = false;
    }
    if (error.code === 'auth/weak-password') {
      console.log('Weak password');
      alert('Weak password (You must use at least 6 characters)');
      //const val = false;
    }
    console.log('error', error);
    global.isAcorrectSignUp = true;
    //const val = false;
  });
}

//export default { val }
/*
export function loggingIn({ email, password }) {
    //const { signIn, signOut } = React.useContext(AuthContext);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value)
        signIn();
      })
      .catch(error=>{
          //alert('Not valid email');
          console.log('error',error);
          //navigation.navigate("SignUp");  
      })
  }
  */
  export function forgotpassword( email, password ) {
    //const authForDefaultApp = firebase.auth();
    //authForDefaultApp
    //const db = firebase.firestore()
    //const [fruit, setFruit] = useState(null);
    firebase.auth
    /*
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
    const db = firebase.firestore()
    */
    //firebase.db.collection('users').auth()
    .currentUser.sendEmailVerification(email, password)
    .then(() => {
      console.log('User account verified');
      //const { signIn } = React.useContext(AuthContext);
      //signIn();
      alert('User account verified');
      global.isAcorrectLogin = true;
      //console.log(global.isAcorrectLogin)
      //setFruit('sdgh')
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid');
        alert('That email address is invalid')
      }
  
      if (error.code === 'auth/user-not-found') {
        console.log('There is no user corresponding to the given email');
        alert('There is no user corresponding to the given email')
      }
      if (error.code === 'auth/wrong-password') {
        console.log('Wrong password');
        alert('The password is wrong');
        //const val = false;
      }
      console.log('error', error);
      global.isAcorrectLogin = false;
      //console.log(global.isAcorrectLogin)
    });
  }

  export function loggingIn( email, password ) {
    //const authForDefaultApp = firebase.auth();
    //authForDefaultApp
    //const db = firebase.firestore()
    //const [fruit, setFruit] = useState(null);
    firebase.auth
    /*
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
    const db = firebase.firestore()
    */
    //firebase.db.collection('users').auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account verified');
      //const { signIn } = React.useContext(AuthContext);
      //signIn();
      alert('User account verified');
      global.isAcorrectLogin = true;
      //console.log(global.isAcorrectLogin)
      //setFruit('sdgh')
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid');
        alert('That email address is invalid')
      }
  
      if (error.code === 'auth/user-not-found') {
        console.log('There is no user corresponding to the given email');
        alert('There is no user corresponding to the given email')
      }
      if (error.code === 'auth/wrong-password') {
        console.log('Wrong password');
        alert('The password is wrong');
        //const val = false;
      }
      console.log('error', error);
      global.isAcorrectLogin = false;
      //console.log(global.isAcorrectLogin)
    });
  }

  export function gettinginfo( email ) {
    //const authForDefaultApp = firebase.auth();
    //authForDefaultApp
    //const db = firebase.firestore()
    //const [fruit, setFruit] = useState(null);
    var user = firebase.auth.currentUser;

    /*
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
    const db = firebase.firestore()
    */
    //firebase.db.collection('users').auth()
    db.collection("users").where("email", "==", user.email ).get()
    .then(() => {
      console.log('User found');
      //const { signIn } = React.useContext(AuthContext);
      //signIn();
      alert('User account verified');
      global.isAcorrectLogin = true;
      //console.log(global.isAcorrectLogin)
      //setFruit('sdgh')
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid');
        alert('That email address is invalid')
      }
  
      if (error.code === 'auth/user-not-found') {
        console.log('There is no user corresponding to the given email');
        alert('There is no user corresponding to the given email')
      }
      if (error.code === 'auth/wrong-password') {
        console.log('Wrong password');
        alert('The password is wrong');
        //const val = false;
      }
      console.log('error', error);
      global.isAcorrectLogin = false;
      //console.log(global.isAcorrectLogin)
    });
  }