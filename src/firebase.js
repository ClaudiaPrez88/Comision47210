// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3tBd8RBEygSRohLS6ymb23kMbXzMlf6Q",
  authDomain: "tienda-ropa-d7b88.firebaseapp.com",
  projectId: "tienda-ropa-d7b88",
  storageBucket: "tienda-ropa-d7b88.appspot.com",
  messagingSenderId: "303101192101",
  appId: "1:303101192101:web:933570707be543753f2a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)