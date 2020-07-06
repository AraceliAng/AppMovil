import * as firebase from 'firebase';

var config = {
//aquí va la conexión de firebase

// firecast
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: ""
//termina firecast

//mucino
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
//termina mucino
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
