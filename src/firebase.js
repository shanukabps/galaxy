import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRugC21IJps52R_frR2VmDMuYeCgYuDs4",
    authDomain: "galaxy-79390.firebaseapp.com",
    databaseURL: "https://galaxy-79390.firebaseio.com",
    projectId: "galaxy-79390",
    storageBucket: "galaxy-79390.appspot.com",
    messagingSenderId: "347605580270",
    appId: "1:347605580270:web:5c30952f4af5c442f3b6ff",
    measurementId: "G-Y2WY7L28WK"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();


export{db,auth};