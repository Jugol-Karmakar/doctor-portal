// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMqSc-JTE9Xh4BwUZHvbI_li9JN_9q5ZE",
  authDomain: "doctor-portal-client-2b461.firebaseapp.com",
  projectId: "doctor-portal-client-2b461",
  storageBucket: "doctor-portal-client-2b461.appspot.com",
  messagingSenderId: "290055580311",
  appId: "1:290055580311:web:6863b2d3fa7c53644097d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
