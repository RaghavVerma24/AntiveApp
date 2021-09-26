import firebase from 'firebase'
import 'firebase/firestore'
import "firebase/storage";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

const apiResponse = (status, message, data) => {
  return {
    status,
    message,
    data,
  };
};

export const database = {
    folders: db.collection("folders"),
    files: db.collection("files"),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
    formatDoc: (doc) => {
      return { id: doc.id, ...doc.data() };
    },
  };

export { auth, provider, storage, firebaseApp, apiResponse};
export default db;