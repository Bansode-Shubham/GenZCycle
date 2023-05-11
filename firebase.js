// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7GoO8PKciM31Ck6kQTMQLS4QyWSL-sNk",
  authDomain: "rn-genzcycle.firebaseapp.com",
  projectId: "rn-genzcycle",
  storageBucket: "rn-genzcycle.appspot.com",
  messagingSenderId: "1033755912276",
  appId: "1:1033755912276:web:533ec228a8a982f80a25c1"
};

// Initialize Firebase
!firebase.apps.length ?
 firebase.initializeApp(firebaseConfig):
  firebase.app()

  export default firebase