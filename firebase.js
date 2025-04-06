import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  authDomain: import.meta.env.VITE_FBASE_AUTHDOMAIN,
  apiKey: import.meta.env.VITE_FBASE_APIKEY,
  projectId: import.meta.env.VITE_FBASE_PROJECID,
  storageBucket: import.meta.env.VITE_FBASE_STORAGEBUCEKT,
  messagingSenderId: import.meta.env.VITE_FBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FBASE_APPID,
  measurementId: import.meta.env.VITE_FBASE_MEASURMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {db,auth};
