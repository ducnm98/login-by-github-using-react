import firebase from "firebase";
import base, { firebaseApp } from "../base";

authHandler = async authData => {
  const user = authData.user;
  return {
    email: user.email,
    name: user.displayName,
    picture: user.photoURL,
  };
};

export const authenticate = provider => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
};

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHandler({ user });
  //     }
  //   });
  // }

 

