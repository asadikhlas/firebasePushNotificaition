import firebase from 'firebase'


export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCpNs1JRwe1fHkzrxd0yTRy2XGU_38FUks",
        authDomain: "pushnoti-c41d2.firebaseapp.com",
        databaseURL: "https://pushnoti-c41d2.firebaseio.com",
        projectId: "pushnoti-c41d2",
        storageBucket: "pushnoti-c41d2.appspot.com",
        messagingSenderId: "181560822156",
        appId: "1:181560822156:web:8a506b604f893625df6ea9",
        measurementId: "G-PJVXPHFYYK"
    })
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }
