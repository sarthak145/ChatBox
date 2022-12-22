
import { initializeApp } from "firebase/app";

import * as firebase from "firebase/auth";
import{getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAlDdeSmaHeio6l4SatpNGXKnEBH2w9Ois",
  authDomain: "chat-app-yt-dee99.firebaseapp.com",
  projectId: "chat-app-yt-dee99",
  storageBucket: "chat-app-yt-dee99.appspot.com",
  messagingSenderId: "251746999381",
  appId: "1:251746999381:web:052857f5fd01e9c94288dc"
};


const app = initializeApp(firebaseConfig);
export const auth= firebase.getAuth(app);
export const db = getFirestore(app)