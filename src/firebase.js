import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI3Pq7fOXCB57CbefRcCdtzFkb-aBetpI",
  authDomain: "clone-ba506.firebaseapp.com",
  projectId: "clone-ba506",
  storageBucket: "clone-ba506.appspot.com",
  messagingSenderId: "357547629587",
  appId: "1:357547629587:web:bb9d8bcf6b2f6a2483f3e6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
