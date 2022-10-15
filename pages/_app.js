import { useEffect } from "react";
import AuthUser from "../hook/AuthUser";
import "../styles/globals.css";
import Login from "./login";

import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const { loadUser, usr, db } = AuthUser();

  // useEffect(() => {
  //   if (usr) {
  //     const postUserRef = collection(db, "postuser");
  //     const data = {
  //       displayName: usr.displayName,
  //       email: usr.email,
  //       lastSeen: serverTimestamp(),
  //       photoURL: usr.photoURL,
  //     };
  //     setDoc(doc(postUserRef, usr.uid), data, { merge: true }).catch(alert);
  //   }
  // }, [usr]);

  if (loadUser) return <h1>ok</h1>;

  if (!usr) {
    return <Login></Login>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
