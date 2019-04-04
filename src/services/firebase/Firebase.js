import * as firebase from 'firebase';

var config = {
//aquí va la conexión de firebase
   
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
