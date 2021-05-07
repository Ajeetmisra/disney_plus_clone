import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDA3CasitHeoxzelNt98gFu1jrlRCH9yz4",
  authDomain: "disneyplusc-63fdf.firebaseapp.com",
  projectId: "disneyplusc-63fdf",
  storageBucket: "disneyplusc-63fdf.appspot.com",
  messagingSenderId: "353577323299",
  appId: "1:353577323299:web:d8122ecac2e7c890339a96",
  measurementId: "G-337440ENL0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
export { storage };
export default db;
