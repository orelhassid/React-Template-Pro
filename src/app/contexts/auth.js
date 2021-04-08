import React, { useEffect } from "react";
import firebase from "../firebase/firebase";

import useAuth from "../hooks/useAuth";

export function AuthContextProvider({ children, setIsReady }) {
  const { restore } = useAuth();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // console.log("User is signed in", user);
    } else {
      // console.log("No user is signed in.", user);
      // No user is signed in.
    }
  });

  useEffect(() => {
    restore();
  }, []);

  return <>{children}</>;
}
