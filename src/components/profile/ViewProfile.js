import React, { Component } from 'react';
import {StatusBar, Platform} from 'react-native'
import { Container, Content, Header,Button, SideBar, Body, Title, Left, View} from 'native-base';
import firebase from '../../services/firebase/Firebase';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer'
import ContentP from './ContentP';

export default class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nuevo: '',
            lista: [],
            state:{
                userLog:{},
                loggedIn:false,

            }
        }
    }

    listenForItems = (itemsRef) => {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var lista = [];
            snap.forEach((child) => {
                lista.push({
                    nombre: child.val().nombre,
                    numEmpleado: child.val().numEmpleado,
                    area: child.val().area,
                    cargo: child.val().cargo,
                    email: child.val().email,
                    password: child.val().password,
                    key: child.key
                });
            });
            this.setState({
            lista: lista
            });
        });
    }

    componentDidMount() {
        var that = this;
        firebase.auth().onAuthStateChanged(function(userLog) {
        console.log('userLog', userLog)
        if (userLog) {
            var uid = userLog.uid;
            var key = userLog.key;
        }
        console.log(uid)
        console.log(key)
        const itemsRef = firebase.database().ref('/empleado/' + uid + '/');
        that.listenForItems(itemsRef);
        });
    }

    

  render() {
   
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    
    return (
        <Container>
            <View style={{flex:1}}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator}
                    //  loggedIn={loggedIn}
                     
                     />}
                    onClose={this.closeDrawer} >

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80 }} 
                            androidStatusBarColor="black">

                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>

                        <Body>
                            <Title style={{color:'#DCDCDC'}}>  Mi perfil
                                {/* {loggedIn ?
                                    userLog.username :
                                    "Mi perfil"
                                } */}
                            </Title>
                        </Body>
                    </Header>
                    <Content>
                        <ContentP />
                    </Content>
                        
                </Drawer>  
                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                
            </View>
        </Container>

    );
  }
}