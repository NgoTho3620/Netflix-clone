import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBBG928uYIVekd_f5kOlwmMEsAtURFB3xU",
  authDomain: "nvt-netflix.firebaseapp.com",
  projectId: "nvt-netflix",
  storageBucket: "nvt-netflix.appspot.com",
  messagingSenderId: "391831019951",
  appId: "1:391831019951:web:f0828b1184aa10b6de4f5a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth(firebaseApp)

export { auth }
export default db