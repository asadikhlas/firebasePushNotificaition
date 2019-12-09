import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCpNs1JRwe1fHkzrxd0yTRy2XGU_38FUks",
    authDomain: "pushnoti-c41d2.firebaseapp.com",
    databaseURL: "https://pushnoti-c41d2.firebaseio.com",
    projectId: "pushnoti-c41d2",
    storageBucket: "pushnoti-c41d2.appspot.com",
    messagingSenderId: "181560822156",
    appId: "1:181560822156:web:8a506b604f893625df6ea9",
    measurementId: "G-PJVXPHFYYK"
  };


firebase.initializeApp(config)

export {firebase}   