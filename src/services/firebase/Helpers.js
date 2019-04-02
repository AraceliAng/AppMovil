import firebase from './Firebase';


class Helpers {


    static setEvidence(userID, data){
        console.log('data',data)
        let userNamePath = "/evidencia/"+ userID + "/";
        return firebase.database().ref(userNamePath).push({
                                               
            descripcion: data.desc,
            foto: data.url,
            fecha: data.date,
            hora: data.hours
        })
    }

}
module.exports = Helpers
