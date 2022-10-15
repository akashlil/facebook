import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlvX7Pv3H_wGK4P_PyeLtzOmV7pdFgihg",
  authDomain: "facebook-8a1fa.firebaseapp.com",
  projectId: "facebook-8a1fa",
  storageBucket: "facebook-8a1fa.appspot.com",
  messagingSenderId: "304439424433",
  appId: "1:304439424433:web:923fab136ae3e7079fb990",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const stroage = getStorage();
export {
  db,
  auth,
  provider,
  signInWithPopup,
  stroage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
};
