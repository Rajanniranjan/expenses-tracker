import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXgtsidLjio0LqWythsfCk5xtKvW-Wj6c",
  authDomain: "finance-2ae6a.firebaseapp.com",
  projectId: "finance-2ae6a",
  storageBucket: "finance-2ae6a.appspot.com",
  messagingSenderId: "485855670862",
  appId: "1:485855670862:web:cfa494ac8ece1e795c891f",
  measurementId: "G-0XE5LZY66V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
