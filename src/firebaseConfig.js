// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-LzjXrj6VChm1b4NRS6YFl0k_POo1zpw",
  authDomain: "artem-1b7ff.firebaseapp.com",
  projectId: "artem-1b7ff",
  storageBucket: "artem-1b7ff.appspot.com",
  messagingSenderId: "416312819586",
  appId: "1:416312819586:web:e019c101df70b2ac55999b",
  measurementId: "G-C8K4QRBLP1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };