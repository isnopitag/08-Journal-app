import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpEdTkkC3-iN3grEavk_sfxTGT98RDpFc",
    authDomain: "react-app-cursos-2022.firebaseapp.com",
    projectId: "react-app-cursos-2022",
    storageBucket: "react-app-cursos-2022.appspot.com",
    messagingSenderId: "471250161505",
    appId: "1:471250161505:web:c957b3c702536da9237f20",
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}