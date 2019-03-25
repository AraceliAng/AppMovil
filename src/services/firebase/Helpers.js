import firebase from './Firebase';


class Helpers {

    static setUserDesc(userID, desc){
        let userNamePath = "/evidencia/"+ userID + "/descripcion";
        return firebase.database().ref(userNamePath).set(desc)
    }

    static setImageUrl(userID, url){
        let userNamePath = "/evidencia/"+ userID +"/foto";
        return firebase.database().ref(userNamePath).set(url)
    }
}
module.exports = Helpers
