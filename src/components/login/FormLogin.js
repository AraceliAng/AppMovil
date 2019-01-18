import React from 'react';
import styles3 from './Styles';
import { Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import { Header, Input, Button, Item, Form,Text, View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import imgLogo from '../../assets/m.jpg'
import { BorderlessButton } from 'react-native-gesture-handler';

export const FormLogin = ({login, onChange})=>(
    
    <KeyboardAvoidingView behavior="padding">
        <Header
                    style={{ backgroundColor: '#5F0003' }}
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
                <Button full bordered dark onPress={login} style={{borderRadius:25, borderColor:'#5F0003'}}>
                    <Text>Entrar</Text>
                </Button>
            </Form>
        </View>
        <StatusBar backgroundColor="#00194B" barStyle="light-content" />
    </KeyboardAvoidingView>
);
export default  FormLogin;

/*
https://codeburst.io/linear-gradient-for-border-color-in-react-native-5bcab3eea1c9

export default class FormLogin extends Component{
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