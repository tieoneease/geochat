import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBOUorlNpLb7KvUzUsqsc-qOzBvpvM7uLk",
  authDomain: "mingeesabitch.firebaseapp.com",
  databaseURL: "https://mingeesabitch.firebaseio.com",
  projectId: "mingeesabitch",
  storageBucket: "mingeesabitch.appspot.com",
  messagingSenderId: "395632500090"
}
firebase.initializeApp(config)
const db = firebase.database()

export default db
