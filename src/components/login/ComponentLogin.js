import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Toast } from 'native-base';
import FormLogin from './FormLogin';
import styles3 from './Styles';

export default class ComponentLogin extends Component{
    state={
        userLog:{
            email:"",
            password:""
        },
    }
    
    login=()=>{
        let { userLog } = this.state;
        if(userLog.email.length == 0){
            Toast.show({
                text: "Ingresa tus datos",
                position: "top",
                type: "danger"
            })
            console.log("No puede ingresar", userLog)
        } else{
            login(userLog)
                .then( r =>{
                    Actions.main()
                    Toast.show({
                        text: "Bienvenido",
                        position: "top",
                        type: "success"
                    })
                    console.log("Ingreso correctamente")
                })
                .catch(error => {
                    Toast.show({
                        text:"Error",
                        position: "top",
                        type:"danger"
                    })
                    console.log(error);
                })
        }
    }
    handleChange = (field, value) =>{
        let {userLog} = this.state;
        userLog[field] = value;
        this.setState({userLog});
    };


    render(){
        return(
            <Container>
                <Content>
                <FormLogin />
                <View style={styles3.containerF}>
                    <TouchableOpacity onPress={()=>Actions.recover()} >
                        <Text style={styles3.textoF}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>
                </Content>
            </Container>
        )
    }
};