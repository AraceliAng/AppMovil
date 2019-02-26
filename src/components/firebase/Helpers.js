import * as firebase from './Firebase';

class Helpers {
    static setUserName(userID, name){
        let userNamePath = "/user/"+userID+"/Datos/name ";
        return firebase.database().ref(userNamePath).set(name)
    }
    static setUserNemp(userID, nemp){
        let userNamePath = "/user/"+userID+"/Datos/nemp ";
        return firebase.database().ref(userNamePath).set(nemp)
    }
    static setUserArea(userID, area){
        let userNamePath = "/user/"+userID+"/Datos/area ";
        return firebase.database().ref(userNamePath).set(area)
    }
    static setUserCargo(userID, cargo){
        let userNamePath = "/user/"+userID+"/Datos/cargo";
        return firebase.database().ref(userNamePath).set(cargo)
    }
    static setUserPass(userID, pass){
        let userNamePath = "/user/"+userID+"/Datos/pass";
        return firebase.database().ref(userNamePath).set(pass)
    }
        static setUserNomProyecto(userID, nomproyecto){
        let userNamePath = "/user/"+userID+"/Datos/nomproyecto";
        return firebase.database().ref(userNamePath).set(nomproyecto)
    }
    static setUserDiasEstim(userID, diasestim){
        let userNamePath = "/user/"+userID+"/Datos/diasestim";
        return firebase.database().ref(userNamePath).set(diasestim)
    }
    static setUserVehiculo(userID, vehiculo){
        let userNamePath = "/user/"+userID+"/Datos/vehiculo";
        return firebase.database().ref(userNamePath).set(vehiculo)
    }
    static setUserDestino(userID, destino){
        let userNamePath = "/user/"+userID+"/Datos/destino ";
        return firebase.database().ref(userNamePath).set(destino)
    }
}
module.export= Helpers
