import React, { Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text,Body, Left,Thumbnail,Right,Button, Toast } from 'native-base';
import logo from '../../assets/m.jpg';
import { Actions } from 'react-native-router-flux';
import firebase,{firebaseAuth} from '../../services/firebase/Firebase';
import Icon from 'react-native-vector-icons/EvilIcons';
import stylesM from './Styles';

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.salir = this.salir.bind(this);
       }
       // para el boton cerrar sesion del menu
       salir() {
        firebaseAuth.signOut()
        .then(r=>Toast.show({text: 'Hasta pronto', position: 'bottom', type: 'success'}))
        Actions.login();
      }
            

    // logOut=()=>{
    //     AsyncStorage.removeItem("user");
    //     AsyncStorage.removeItem("token");
    //     Actions.login()
    // }

    render() {

        return (
            <Container style={{backgroundColor:"rgba(0,0,0,0.8)",flex:1}}>

                <Header transparent style={{marginBottom:20}}>
                    <Left style={{flex:1, paddingTop:10 }}>
                        <Thumbnail source={logo} style={stylesM.logo}/>
                    </Left>
                    <Body style={{flex:1, alignItems:"center",justifyContent:'center' }}>
                        <Text style={stylesM.title}>Transportes Muciño</Text>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    {/* <ListItem icon onPress={()=>Actions.main()}>
                        <Left>
                            <Icon name="heart" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}>Ir a vista principal</Text>
                        </Body>
                    </ListItem> */}

                    <ListItem icon onPress={()=>Actions.profile()}>
                        <Left>
                            <Icon name="user" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body>
                            <Text style={{color:'white'}}>Mi perfil</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=>Actions.location()}>
                        <Left>
                            <Icon name="location" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}>Ir a checador</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.evidence()}>
                        <Left>
                            <Icon name="camera" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body >
                            <Text style={{color:'white'}}>Agregar Evidencia</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.reports()} >
                        <Left>
                            <Icon name="archive" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}> Generar reporte</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.registryEmployee()} >
                        <Left>
                            <Icon name="pencil" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}> Registro de operadores</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.registryProyect()} >
                        <Left>
                            <Icon name="pencil" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}> Registro de proyectos</Text>
                        </Body>
                    </ListItem>

                </Content>
                
                <View style={stylesM.boton}>                                                                                                                                                                                                                                                                                                                                                                        
                        <Button full bordered light onPress={this.salir}>
                            <Text>Cerrar Sesión</Text>
                        </Button>
                </View>

            </Container>
        );
    }
}

