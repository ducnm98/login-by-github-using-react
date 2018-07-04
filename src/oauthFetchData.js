import firebase from "firebase";
import base, { firebaseApp } from "./base";

export const authenticate = provider => {
  console.log(provider);
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  return firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    // .then(this.authHandler);
};