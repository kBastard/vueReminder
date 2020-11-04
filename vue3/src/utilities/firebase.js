// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6gVUWqZsV5WZTgnW8VJzTdEQwHrK0z88",
  authDomain: "vue-reminder.firebaseapp.com",
  databaseURL: "https://vue-reminder.firebaseio.com",
  projectId: "vue-reminder",
  storageBucket: "vue-reminder.appspot.com",
  messagingSenderId: "680268072168",
  appId: "1:680268072168:web:b89467f226d2833fe8355d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
