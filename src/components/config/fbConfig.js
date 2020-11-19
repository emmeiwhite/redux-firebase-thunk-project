import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBoMaad1b3DAzwuu-JrNHfxyPr2dzWyI-w",
  authDomain: "emmeisoft-marioplan.firebaseapp.com",
  databaseURL: "https://emmeisoft-marioplan.firebaseio.com",
  projectId: "emmeisoft-marioplan",
  storageBucket: "emmeisoft-marioplan.appspot.com",
  messagingSenderId: "772417969238",
  appId: "1:772417969238:web:e874e32c45289c14a4aff7",
  measurementId: "G-KXPFMWS4RE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
