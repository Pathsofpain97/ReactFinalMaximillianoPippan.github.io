import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDvAV0gu7Zt51lxW3dmkCC562AOufbE74U",
  authDomain: "rain-donuts-6ed00.firebaseapp.com",
  projectId: "rain-donuts-6ed00",
  storageBucket: "rain-donuts-6ed00.appspot.com",
  messagingSenderId: "931079435141",
  appId: "1:931079435141:web:ad437ff984c5f00ad60aec"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
