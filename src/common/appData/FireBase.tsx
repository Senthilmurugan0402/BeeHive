import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBMcyaj3fqZsZF6aUKJdPrMFAqMxvm-U-k",
  authDomain: "beehive-6b4a6.firebaseapp.com",
  projectId: "beehive-6b4a6",
  storageBucket: "beehive-6b4a6.appspot.com",
  messagingSenderId: "271766998854",
  appId: "1:271766998854:web:67736251156ba8268b5f47",
  measurementId: "G-NKXQJGSV67",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const firestore = firebase.firestore();

