// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWTIRYpfJu3LFHbUAxrvl4ckVsagjCL0",
  authDomain: "crudlibros-32cf9.firebaseapp.com",
  projectId: "crudlibros-32cf9",
  storageBucket: "crudlibros-32cf9.appspot.com",
  messagingSenderId: "511464040464",
  appId: "1:511464040464:web:647c70d921684138594295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
export {db}