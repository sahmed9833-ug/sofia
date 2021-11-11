import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sofia-e897d.firebaseapp.com",
  projectId: "sofia-e897d",
  storageBucket: "sofia-e897d.appspot.com",
  messagingSenderId: "93587052045",
  appId: "1:93587052045:web:af05fe967dca50fbb72744"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();