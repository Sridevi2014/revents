import firebase from "firebase";
import "firebase/firestore";

//firebaseconfigiration
const firebaseConfig = {
  apiKey: "AIzaSyBtKxIaALrBL2sSTnNozRKoUBzLqCznn34",
  authDomain: "revents-29eed.firebaseapp.com",
  databaseURL: "https://revents-29eed.firebaseio.com",
  projectId: "revents-29eed",
  storageBucket: "revents-29eed.appspot.com",
  messagingSenderId: "830024610146"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;
