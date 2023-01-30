// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxbm_44YmI4w0E8hqkNp_PZWI3RJVUgyU",
  authDomain: "your-movie-final-year.firebaseapp.com",
  projectId: "your-movie-final-year",
  storageBucket: "your-movie-final-year.appspot.com",
  messagingSenderId: "360987440317",
  appId: "1:360987440317:web:23904eca699adbaab933d4",
  measurementId: "G-QL6FVF15SS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth,db}