import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqI05G6MuxJ9eILJmvVk-_sYdcMJxOngs",
    authDomain: "library-27788.firebaseapp.com",
    databaseURL: "https://library-27788.firebaseio.com",
    projectId: "library-27788",
    storageBucket: "library-27788.appspot.com",
    messagingSenderId: "700975606227",
    appId: "1:700975606227:web:23a6d3bfa53cc391daa726"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();