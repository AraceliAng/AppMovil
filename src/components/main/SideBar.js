import React, { Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text,Body, Left,Thumbnail,Right,Button, Toast } from 'native-base';
import logo from '../../assets/m.jpg';
import { Actions } from 'react-native-router-flux';
import firebase,{firebaseAuth} from '../../services/firebase/Firebase';
import Icon from 'react-native-vector-icons/EvilIcons';
import stylesM from './Styles';

export default class SideBar extends Component {
    state={
        user:{}
    }

    logOut=()=>{
            firebase.auth().signOut()
        .then(r=>Toast.show({text: 'Hasta pronto', position: 'bottom', type: 'success'}))
        AsyncStorage.removeItem("userId");
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("userInfo");
        Actions.login()
    }
    componentWillMount(){
        this.getUSer(this.props)
    }
    componentWillReceiveProps(nextProps){
        //console.log('me ejecuto')
        this.getUSer(nextProps)
    }

    getUSer=async(item)=>{
        try {
    
            let userIfno = await AsyncStorage.getItem('userInfo');
            let user = JSON.parse(userIfno)
            this.setState({user})
        } catch (error) {   
        }
    }
    render() {
        let {user}= this.state
        //console.log('user info----------------------',user)
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

                    <ListItem icon onPress={()=>Actions.profile()}>
                        <Left>
                            <Icon name="user" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body>
                            <Text style={{color:'white'}}>Perfil</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=>Actions.location()}>
                        <Left>
                            <Icon name="location" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}>Checador</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.evidence()}>
                        <Left>
                            <Icon name="camera" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body >
                            <Text style={{color:'white'}}>Evidencias</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={()=> Actions.reports()} >
                        <Left>
                            <Icon name="archive" style={{color:'white', fontSize:30}}/>
                        </Left>

                        <Body>
                            <Text style={{color:'white'}}>Reporte</Text>
                        </Body>
                    </ListItem>
                    {
        user.rol === "Administrador" ?
                    <View>
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
                    </View> 
                    :
                    null
        
    }

                </Content>
                
                <View style={stylesM.boton}>                                                                                                                                                                                                                                                                                                                                                                        
                        <Button full bordered light onPress={this.logOut} style={stylesM.boton}>
                            <Text>Cerrar Sesión</Text>
                        </Button>
                </View>

            </Container>
        );
    }
}