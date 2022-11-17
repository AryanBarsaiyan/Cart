import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJqerW-M18QUEfi_qzEID73YUTjExw8M",
  authDomain: "cart-8e5c9.firebaseapp.com",
  projectId: "cart-8e5c9",
  storageBucket: "cart-8e5c9.appspot.com",
  messagingSenderId: "158660777013",
  appId: "1:158660777013:web:09334ea49dc279a6efcd7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ReactDOM.render(<App />, document.getElementById("root"));
createRoot(document.getElementById('root')).render(<App />);
