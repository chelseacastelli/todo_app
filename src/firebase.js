
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVYjJqUz_UyRwxEVVFilJ7cvDH0caMjb4",
    authDomain: "todo-app-d2bd8.firebaseapp.com",
    projectId: "todo-app-d2bd8",
    storageBucket: "todo-app-d2bd8.appspot.com",
    messagingSenderId: "101661764949",
    appId: "1:101661764949:web:8329ba71fe8251f1de53dc"
});

const db = firebaseApp.firestore();

export default db;
