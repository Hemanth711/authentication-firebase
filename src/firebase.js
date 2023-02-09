// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK1pVVMlf_PIZnl-xBIfBSfg1xGuxEaU8",
  authDomain: "react-f8cbe.firebaseapp.com",
  projectId: "react-f8cbe",
  storageBucket: "react-f8cbe.appspot.com",
  messagingSenderId: "119126008462",
  appId: "1:119126008462:web:a642fd80655afe12391fdf",
  measurementId: "G-0JGK5RXGMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth()
export {app, auth}