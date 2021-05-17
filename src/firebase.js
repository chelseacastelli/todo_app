
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUP8Ffhf5zhbQvZ7P8-vygC1lgoW0Qgd4",
    authDomain: "todo-app-df454.firebaseapp.com",
    projectId: "todo-app-df454",
    storageBucket: "todo-app-df454.appspot.com",
    messagingSenderId: "387441631272",
    appId: "1:387441631272:web:6c603363af616b88a6d51d"
});

const db = firebaseApp.firestore();

export default db;
