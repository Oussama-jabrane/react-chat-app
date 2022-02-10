import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcdRDiH6sJ0FYUqMBm6OvQHcnqmvfgrXw",
    authDomain: "chat50-1.firebaseapp.com",
    projectId: "chat50-1",
    storageBucket: "chat50-1.appspot.com",
    messagingSenderId: "630631832280",
    appId: "1:630631832280:web:b62931d44eb0bc401b15ad",
    measurementId: "G-7ZGHKSHK0Y",
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { auth, db }