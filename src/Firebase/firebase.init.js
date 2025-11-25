// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4mmhSo16Y7JJe0fjR82vcsVg5SY2ehLg",
  authDomain: "warm-paws-cd697.firebaseapp.com",
  projectId: "warm-paws-cd697",
  storageBucket: "warm-paws-cd697.firebasestorage.app",
  messagingSenderId: "294437728938",
  appId: "1:294437728938:web:eae1c0207ed616be6696d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;