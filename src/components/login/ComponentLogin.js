import React, { Component } from 'react';
import { KeyboardAvoidingView,AsyncStorage, StatusBar, Platform } from 'react-native';
import {Container, Content, Text, Toast, Input, Button, Item, Form, View} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles3 from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormLogin from './FormLogin';
import firebase, {firebaseAuth} from '../../services/firebase/Firebase';



export default class ComponentLogin extends Component{
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
        let{userLog} = this.state
        this.setState({error:"", loading:true});
        console.log('data',userLog)
        firebase.auth().signInWithEmailAndPassword(userLog.correo,userLog.password)
        .then(this.onLoginSuccess)
        .catch(this.onLoginFailed);
    }

    onLoginFailed(){
        this.setState({error: 'Autenticación Fallida', loading: false })
        Toast.show({text: 'Usuario/contraseña inválidos', position: 'bottom', buttonText: 'OK', type: 'danger'})
    }
    onLoginSuccess(r){
        console.log('Se ha autenticado',r);
        this.saveUid(r.user.uid)
        //this.getUser(r.user.uid)
        this.setState({ email: "", contraseña: "", error:"", loading:false });
        //Actions.Log();
    Toast.show({ text:'¡Bienvenido!', position:'bottom', type:'success'})
    }
    
      handleChange = (field, value) => {
      const userLog = this.state.userLog;
      userLog[field] = value;
      this.setState({userLog});
    };

    saveUid = async (idUSer) => {
        try {
          await AsyncStorage.setItem('userID', idUSer);
        } catch (error) {
          // Error saving data
          console.log('Error',error)
        }
      };
    
      //getUSer
    //   getUser= async (idUSer) => {
    //     try {
        /// hacer peticion de 
        // firebase.database().ref('empleado/'+userUid+"/").once('value',snapshot =>{ 
        //     console.log('Esto es una prueba, dento de lo asincrono',snapshot.val()) 
        //     let user = snapshot.val()
         //       await AsyncStorage.setItem('userInfo', user);
         //       await AsyncStorage.setItem('userInfo', JSON.stringify(user));
   
    //     } catch (error) {
    //       // Error saving data
    //       console.log('Error',error)
    //     }
    //   };
    //

	render(){
        return(
            <Container>
                <Content>
                    <KeyboardAvoidingView behavior="padding">
                    <FormLogin/>
                        <View>
                            <Form style={styles3.containerF}>
                                <Item regular style={styles3.inputs}>
                                    {/* <Icon active name='phone' size={15} style={{marginLeft:12}}/> */}
                                    <Icon active name='user' size={15} style={{marginLeft:12}}/>
                                    <Input 
                                        name='correo'
                                        // placeholder='Número de teléfono'
                                        placeholder='Correo electrónico'
                                        keyboardType='email-address'
                                        // keyboardType='phone-pad'
                                        returnKeyType='next'
                                        value={this.state.correo}
                                        autoCapitalize='none'
                                        style={styles3.textoF}
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

                                <Button 
                                    full bordered dark onPress={this.onButtonPress.bind(this)} style={styles3.boton}>
                                    <Text>Entrar</Text>
                                </Button> 
                            </Form>
                        </View>
                    </KeyboardAvoidingView>
                </Content>
                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />  
            </Container>
        )
    }
}