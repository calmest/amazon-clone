// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNhQ-BgeZzKXr7Rk27SErd4Q3SCn6lfeI",
  authDomain: "clone-4ab0f.firebaseapp.com",
  projectId: "clone-4ab0f",
  storageBucket: "clone-4ab0f.appspot.com",
  messagingSenderId: "201321728779",
  appId: "1:201321728779:web:4192fc2464191fc9b7f00e",
  measurementId: "G-EXE49ZGT7B",
};

/*
const firebaseConfig = {
  apiKey: "AIzaSyD4k8oOTqEcxWm3I0mqULzr4CWamFwJ4-w",
  authDomain: "clones-4aeb3.firebaseapp.com",
  projectId: "clones-4aeb3",
  storageBucket: "clones-4aeb3.appspot.com",
  messagingSenderId: "405958859689",
  appId: "1:405958859689:web:dd3f95d2c64de7bad302b8",
  measurementId: "G-Q7LFZQY3RD",
};
*/

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
