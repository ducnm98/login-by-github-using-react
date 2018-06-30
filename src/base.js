import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWoWx70m2n5ydlZ8vwYolg72-Zybgf_mQ",
  authDomain: "vietnamoi-e2de2.firebaseapp.com",
  databaseURL: "https://vietnamoi-e2de2.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;