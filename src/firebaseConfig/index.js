// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPapfrjvfOAUGMIp4vkCXMFYtfRfPb4Y",
  authDomain: "batien-e061a.firebaseapp.com",
  projectId: "batien-e061a",
  storageBucket: "batien-e061a.appspot.com",
  messagingSenderId: "800061656878",
  appId: "1:800061656878:web:7b10fbc61f5cb8289ff4bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);