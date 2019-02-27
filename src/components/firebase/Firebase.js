import  firebase from 'firebase';

var config = {

apiKey: "AIzaSyD3zquo4QBuD0_y7fqYRihhZ7myxFqamxg",
    authDomain: "firecast-app-5c373.firebaseapp.com",
    databaseURL: "https://firecast-app-5c373.firebaseio.com",
    projectId: "firecast-app-5c373",
    storageBucket: "firecast-app-5c373.appspot.com",
    messagingSenderId: "858605576470"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
