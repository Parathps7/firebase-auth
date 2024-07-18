import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTqDbRQPSLidb4JDqykCgZ65tZsbX1GMY",
  authDomain: "authenticationsystem-71d10.firebaseapp.com",
  projectId: "authenticationsystem-71d10",
  storageBucket: "authenticationsystem-71d10.appspot.com",
  messagingSenderId: "364525021185",
  appId: "1:364525021185:web:ff3b3b97f182bd0838f800",
  measurementId: "G-TNMZVSWCLP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
