import * as firebase from 'firebase';

var config = {
//aquí va la conexión de firebase
    apiKey: "AIzaSyBNZBL0qaPxA3KhNfd965YgCHdVoYoUaA8",
    authDomain: "firecast-app-5c373.firebaseapp.com",
    databaseURL: "https://firecast-app-5c373.firebaseio.com",
    projectId: "firecast-app-5c373",
    storageBucket: "firecast-app-5c373.appspot.com",
    messagingSenderId: "858605576470"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
