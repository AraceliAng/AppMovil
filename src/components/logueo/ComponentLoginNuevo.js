import React, { Component } from 'react';
import { KeyboardAvoidingView, touchableOpacity, StatusBar } from 'react-native';
import {Container, Content, Text, Toast, Input, Button, Item, Form, View, Spinner} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles3 from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormLoginNuevo from './FormLoginNuevo';
import firebase, {firebaseAuth} from '../firebase/Firebase';

export default class ComponentLoginNuevo extends Component {
	state = {
		email:"",
		contraseña:"",
		credential:"",
		loading:"",
		loadingF:"",
		error:"",
        userLog:{
            correo: "",
            password: "",
        }
    }
    constructor(props){
        super(props);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFailed= this.onLoginFailed.bind(this);
    }
    onButtonPress(){
        const{correo, password} = this.state.userLog;
        this.setState({error:"", loading:true});
        firebaseAuth.signEmailAndPassword(correo, password)
        .then(this.onLoginSuccess)
        .catch(this.onLoginFailed);
    }
    onLoginFailed(){
        this.setState({error: 'Autenticación Fallida', loading: false })
        //Toast.show ({ text:error.response.data.msg, position: "top", type:"danger"})
        Toast.show({text: 'Usuario/contraseña inválidos', position: 'bottom', buttonText: 'OK', type: 'danger'})
    }
    onLoginSuccess(r){
        console.log(r);
        this.setState({ email: "", contraseña: "", error:"", loading:false });
        Actions.Log();
    Toast.show({ text:'Bienvenido', position:'bottom', type:'success'})
    }
    
    spinnerInicio() {
        if (this.state.loading) {
          return (
            <Button rounded block style={styles3.botonSpiner}>
              <Spinner color='white'/>
            </Button>
          );
        }
        return(
          <Button bordered dark style={styles3.boton} onPress={this.onButtonPress.bind(this)} >
            <Text>Iniciar</Text>
          </Button>


            // <Button 
            //  disabled={correo.length !== 0 && password.length !== 0 ? false:true}
            //  full bordered dark onPress={this.onButtonPress.bind(this)} style={styles3.boton}>
            //  <Text>Entrar</Text>
            //  </Button> 
        );
      }
    
      handleChange = (field, value) => {
      const userLog = this.state.userLog;
      userLog[field] = value;
      this.setState({userLog});
    };
    

	render(){
        return(
            <Container>
                <Content>
                    <KeyboardAvoidingView behavior="padding">
                    <FormLoginNuevo/>
                        <View>
                            <Form style={styles3.containerF}>
                                <Item regular style={styles3.inputs}>
                                    <Icon active name='user' size={15} style={{marginLeft:12}}/>
                                    <Input 
                                        name='correo'
                                        placeholder='Correo Electrónico'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        value={this.state.correo}
                                        autoCapitalize='none'
                                        style={styles3.textoF}
                                        onChangeText= {value=>onChange('correo',Value)}
                                        onChangeText={value=>this.handleChange("correo", value)}

                                    />
                                </Item>
                                <Item regular style={styles3.inputs}>
                                    <Icon active name='unlock-alt' size={15} style={{marginLeft:12}}/>
                                    <Input 
                                        name='password'
                                        placeholder='Contraseña'
                                        secureTextEntry={true}
                                        style={styles3.textoF}
                                        value={this.state.password}
                                        onChangeText={value=>this.handleChange("password", value)}
                                    />
                                </Item>
                                
                                {this.spinnerInicio()}
                            </Form>
                        </View>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        )
    }
}