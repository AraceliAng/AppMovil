import * as firebase from 'firebase';

class Helpers {
    static setUserDesc(userId, desc){
        let userNamePath = "/user/" + userId + "/details/name"
        return firebase.database().ref(userNamePath).set(desc)
    }

    static setImageUrl(userId, url){
        let userNamePath = "/user/" + userId + "/details/url"
        return firebase.database().ref(userNamePath).set(url)
    }
}