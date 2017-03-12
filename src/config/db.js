import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCO8CCnoLhpKoUJGz0wuYUXKN2sabvOxpE",
  authDomain: "chatrooms-aa9cd.firebaseapp.com",
  databaseURL: "https://chatrooms-aa9cd.firebaseio.com",
  storageBucket: "chatrooms-aa9cd.appspot.com",
  messagingSenderId: "398866758840"
};
firebase.initializeApp(config);
const db = firebase.database();

export default db
