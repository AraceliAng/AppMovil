import React from 'react';
import styles3 from './Styles';
import { Image, KeyboardAvoidingView, StatusBar, Platform} from 'react-native';
import { Header, Input, Button, Item, Form,Text, View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import imgLogo from '../../assets/m.jpg';

export const FormLogin = ({login, onChange, email, password})=>(
    
    <KeyboardAvoidingView behavior="padding">
        <Header
                    style={{ backgroundColor: '#000000'}}
                    androidStatusBarColor="black"
        ></Header>
        <View style={styles3.containerF}>
            <Image source={imgLogo} style={styles3.img} />
        </View>
        <View>
            <Form style={styles3.containerF}>
                <Item regular style={styles3.inputs}>
                    <Icon active name='user' size={15} style={{marginLeft:12}} />
                    <Input 
                        name='email'
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        style={styles3.textoF}
                        onChangeText={Value=>onChange('email',Value)}
                    />
                </Item>
                <Item regular style={styles3.inputs}> 
                    <Icon active name='unlock-alt' size={15} style={{marginLeft:12}}/>
                    <Input 
                        name='password'
                        placeholder='Contraseña'
                        secureTextEntry={true}
                        style={styles3.textoF}
                        onChangeText={value=>onChange('password',value)}
                    />
                </Item>
                <Button 
                    disabled={email.length !== 0 && password.length !== 0 ? false:true}
                    full bordered dark onPress={login} style={styles3.boton}>
                    <Text>Entrar</Text>
                </Button> 
                 
            </Form>
        </View>
        <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
    </KeyboardAvoidingView>
);