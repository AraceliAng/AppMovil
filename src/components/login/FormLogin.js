import React, { Component } from 'react';
//import { TouchableOpacity, TextInput, View, Text } from 'react-native'
//import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import styles3 from './styles';
import { KeyboardAvoidingView} from 'react-native';
import { Input, Button, Item, Form,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FormLogin = ({login, onChange})=>(
    <KeyboardAvoidingView behavior="padding">
        <Form>
            <Item regular style={styles3.inputs}>
                <Icon active name='user' size={15} style={{marginLeft:12}} />
                <Input 
                    name='correo'
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    style={styles3.texto}
                    onChangeText={Value=>onChange('email',Value)}
                />
            </Item>
            <Item regular style={styles3.inputs}> 
                <Icon active name='unlock-alt' size={15} style={{marginLeft:12}}/>
                <Input 
                    name='password'
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    style={styles3.texto}
                    onChangeText={value=>onChange('password',value)}
                />
            </Item>
            <Button full bordered dark onPress={login} style={{borderRadius:25}}>
                <Text>Entrar</Text>
            </Button>
        </Form>
    </KeyboardAvoidingView>
);


















/*export default class FormLogin extends Component{
    //state = { isLoggedIn: false, otherState: '' }
    doLoginStuff = () => {
      this.setState({ isLoggedIn: true });
    }
    render(){
        return (
            <Container> 
               <Header/>
                <Content>
                    <Form>
                        <View style={styles3.loginTextSection}>
                            <TextInput placeholder='UserName' style={styles3.inputText} />
                            <TextInput placeholder='Password' style={styles3.inputText} secureTextEntry={true}/>
                        </View>

                        <View style={styles3.loginButtonSection}>
                            <TouchableOpacity  onPress={() => doLoginStuff()} >
                                <Button style={styles3.loginButton}>
                                    <Text style={styles3.texto}>Iniciar Sesiòn</Text>
                                </Button>
                            </TouchableOpacity >
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}*/