import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0zNmAgaLgEOV9AMqoI3fE5qCKg1HKr4c",
  authDomain: "web-messenger-562e4.firebaseapp.com",
  databaseURL: "https://web-messenger-562e4.firebaseio.com",
  projectId: "web-messenger-562e4",
  storageBucket: "web-messenger-562e4.appspot.com",
  messagingSenderId: "429686422541",
  appId: "1:429686422541:web:8e51e7df0d85057482e944",
  measurementId: "G-QV7Y9P1YDB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
