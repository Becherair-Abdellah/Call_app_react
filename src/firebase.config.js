import {getApps,getApp,initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {

    apiKey: "AIzaSyB9EUKnFAlT5XpIrASEXuYsIjq_ME5mlQM",
    authDomain: "food-2aa05.firebaseapp.com",
    databaseURL: "https://food-2aa05-default-rtdb.firebaseio.com",
    projectId: "food-2aa05",
    storageBucket: "food-2aa05.appspot.com",
    messagingSenderId: "130229561008",
    appId: "1:130229561008:web:da3751eae60e7afd9dfd75",
    measurementId: "G-VDBR0GYEVR"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const  firestore = getFirestore(app);
  const storage = getStorage(app);
  export {app,firestore,storage}