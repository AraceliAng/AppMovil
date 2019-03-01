import * as firebase from './Firebase';

class Helpers {
    static setUserName(userID, nombre){
        let userNamePath = "/empleado/"+userID+"/nombre ";
        return firebase.database().ref(userNamePath).set(nombre)
    }
    static setUserNemp(userID, numEmpleado){
        let userNamePath = "/empleado/"+userID+"/numEmpleado ";
        return firebase.database().ref(userNamePath).set(numEmpleado)
    }
    static setUserArea(userID, area){
        let userNamePath = "/area/"+userID+"/area ";
        return firebase.database().ref(userNamePath).set(area)
    }
    static setUserCargo(userID, cargo){
        let userNamePath = "/empleado/"+userID+"/cargo";
        return firebase.database().ref(userNamePath).set(cargo)
    }
    static setUserPass(userID, contraseña){
        let userNamePath = "/empleado/"+userID+"/contraseña";
        return firebase.database().ref(userNamePath).set(contraseña)
    }
        static setUserNomProyecto(userID, nomproyecto){
        let userNamePath = "/proyecto/"+userID+"/nomproyecto";
        return firebase.database().ref(userNamePath).set(nomproyecto)
    }
    static setUserDiasEstim(userID, diasEstimados){
        let userNamePath = "/proyecto/"+userID+"/diasEstimados";
        return firebase.database().ref(userNamePath).set(diasEstimados)
    }
    static setUserVehiculo(userID, vehiculoAsig){
        let userNamePath = "/proyecto/"+userID+"/vehiculoAsig";
        return firebase.database().ref(userNamePath).set(vehiculoAsig)
    }
    static setUserDestino(userID, destino){
        let userNamePath = "/proyecto/"+userID+"/destino ";
        return firebase.database().ref(userNamePath).set(destino)
    }
}
module.export= Helpers
