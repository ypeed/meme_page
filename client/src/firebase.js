import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4kyCH0c9XgaruFpVaqMi1Gldtwti35D0",
  authDomain: "memepage-e8aaa.firebaseapp.com",
  projectId: "memepage-e8aaa",
  storageBucket: "memepage-e8aaa.appspot.com",
  messagingSenderId: "747833917432",
  appId: "1:747833917432:web:4e77318bc2b463c9de200d"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const memesCollection = db.collection("memes");
const likesCollection = db.collection("likes");
const commentsCollection = db.collection("comments");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  memesCollection,
  likesCollection,
  commentsCollection,
};