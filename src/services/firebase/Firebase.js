import * as firebase from 'firebase';

var config = {
//aquí va la conexión de firebase

// firecast
    apiKey: "AIzaSyBNZBL0qaPxA3KhNfd965YgCHdVoYoUaA8",
    authDomain: "firecast-app-5c373.firebaseapp.com",
    databaseURL: "https://firecast-app-5c373.firebaseio.com",
    projectId: "firecast-app-5c373",
    storageBucket: "firecast-app-5c373.appspot.com",
    messagingSenderId: "858605576470"
//termina firecast

//mucino
    // apiKey: "AIzaSyAoPwTNMZiG3YC9BxYM0uuu-rmmp-8AM8I",
    // authDomain: "app-mucino.firebaseapp.com",
    // databaseURL: "https://app-mucino.firebaseio.com",
    // projectId: "app-mucino",
    // storageBucket: "app-mucino.appspot.com",
    // messagingSenderId: "1032807052376"
//termina mucino
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
