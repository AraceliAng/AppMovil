import React,{ Component } from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles3 from './Styles';
import { FormLogin } from './FormLogin';




export default class ComponentLogin extends Component{
    state={
        userLog:{
            email:"",
            password:""
        },
        
    }
    
    login=()=>{
        Actions.main()
        // let {userLog,buttonD} = this.state;
        // if(userLog.email.length == 0){
        //     Toast.show({
        //         text: "Llena los campos!",
        //         position: "top",
        //         type: "danger"
        //     })
        //     console.log("no se puede",userLog)
        // }else{
        //     login(userLog)
        //         .then(r => {
        //             Actions.main()
        //             Toast.show({
        //                 text: "Bienvenido!",
        //                 position: "top",
        //                 type: "success"
        //             })
        //             console.log("si se pudo")
        //         })
        //         .catch(error => {
        //             Toast.show({
        //                 text: "Error!",
        //                 position: "top",
        //                 type: "danger"
        //             })
        //             console.log(error);
        //         })
        // }



        // // console.log("Datos",this.state.login)
    }
    handleChange = (field, value) => {
        let {userLog} = this.state;
        userLog[field] = value;
        this.setState({userLog});

    };

    render(){

        return(
            <Container>
                <Content>
                <FormLogin login={this.login} onChange={this.handleChange}/>
                <View style={styles3.containerF}>
                    <TouchableOpacity onPress={()=>Actions.recover()} >
                        <Text style={styles3.textoF}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles3.textoF}>Registrate</Text>
                    </TouchableOpacity>
                </View>
                </Content>
            </Container>
        )
    }
}