import React,{ Component } from 'react'
import { View,TouchableOpacity, StatusBar} from 'react-native'
import { Container, Content, Text, Toast} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles3 from './Styles';
import { FormLogin } from './FormLogin';
import {login} from '../../services/auth'



export default class ComponentLogin extends Component{
    state={
        userLog:{
            email:"",
            password:""
        },
    }
    
    login=()=>{
        let {userLog}=this.state;
        // if(userLog.email == "ara@gmail.com" && userLog.password == "12345"){
        //     Actions.main()
        // }else{
        //     Toast.show({
        //         text: 'Datos invalidos',
        //         position:'bottom',
        //     })
        // }

        console.log("userLog",userLog)
        //Actions.main()
        // let {userLog,buttonD} = this.state;
        // if(userLog.email.length == 0){
        //     Toast.show({
        //         text: "Llena los campos!",
        //         position: "top",
        //         type: "danger"
        //     })
        //     console.log("no se puede",userLog)
        // }else{
            login(userLog)
                .then(r => {
                    Actions.main()
                    Toast.show({
                        text: "Bienvenido!",
                        position: "bottom",
                        type: "success"
                    })
                    console.log("si se pudo",r)
                })
                .catch(error => {
                    console.log("error",error.response)
                    Toast.show({
                        text: error.response.data.msg,
                        position: "top",
                        type: "danger"
                    })
                    console.log(error);
                })
        //}
        // // console.log("Datos",this.state.login)
    }
    handleChange = (field, value) => {
        let {userLog} = this.state;
        userLog[field] = value;
        this.setState({userLog});
        console.log("hols",userLog)
    };

    render(){
        let {userLog}=this.state
        return(
            <Container>
                
                <Content>
                <FormLogin login={this.login} onChange={this.handleChange} {...userLog}/>
                <View style={styles3.containerF}>
                    {/*<TouchableOpacity onPress={()=>Actions.recover()} >
                        <Text style={styles3.textoF}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles3.textoF}>Registrate</Text>
                    </TouchableOpacity>*/}
                </View>
                </Content>
            </Container>
        )
    }
}