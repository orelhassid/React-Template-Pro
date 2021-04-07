import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAPAhz2EOdTXhDlgGQvA5jOTzy7yegZU6U",
  authDomain: "socialapp-9861f.firebaseapp.com",
  projectId: "socialapp-9861f",
  storageBucket: "socialapp-9861f.appspot.com",
  messagingSenderId: "937978415499",
  appId: "1:937978415499:web:a2fd0ae4b4ebcdee10478e",
  measurementId: "G-36HMCGLWGG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
