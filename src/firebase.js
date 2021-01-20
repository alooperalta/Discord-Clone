import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyByHGP2jI1c2KhQOply783ji1LKzx4iysQ",
  authDomain: "discord-clone-b2fef.firebaseapp.com",
  projectId: "discord-clone-b2fef",
  storageBucket: "discord-clone-b2fef.appspot.com",
  messagingSenderId: "177889485160",
  appId: "1:177889485160:web:eb3b60ebefe7ea4edfb6dd",
  measurementId: "G-HBSEF024L2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider }
export default db;
