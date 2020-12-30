import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDkcpMUjZ9MCMMej7QVZGq3q-3EqHnKJgo",
    authDomain: "saeed-dev.firebaseapp.com",
    projectId: "saeed-dev",
    storageBucket: "saeed-dev.appspot.com",
    messagingSenderId: "432753949214",
    appId: "1:432753949214:web:6bbb586691d55634420c0f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();