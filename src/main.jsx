import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC3tBd8RBEygSRohLS6ymb23kMbXzMlf6Q",
  authDomain: "tienda-ropa-d7b88.firebaseapp.com",
  projectId: "tienda-ropa-d7b88",
  storageBucket: "tienda-ropa-d7b88.appspot.com",
  messagingSenderId: "303101192101",
  appId: "1:303101192101:web:933570707be543753f2a4c"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
