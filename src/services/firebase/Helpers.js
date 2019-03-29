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

    static setUserDate(userID, date){
        let userNamePath = "/evidencia/"+ userID +"/fecha";
        return firebase.database().ref(userNamePath).set(date)
    }
    static setUserHours(userID, hours){
        let userNamePath = "/evidencia/"+ userID +"/hora";
        return firebase.database().ref(userNamePath).set(hours)
    }
}
module.exports = Helpers
