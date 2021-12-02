// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfb1EZYnIMX6cXz1EOpxoIZJCLq77JGjg",
  authDomain: "classbits-b0db4.firebaseapp.com",
  projectId: "classbits-b0db4",
  storageBucket: "classbits-b0db4.appspot.com",
  messagingSenderId: "456649547900",
  appId: "1:456649547900:web:d9b55104be27827a1ca9f9",
  measurementId: "G-VLCHEDV3GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();