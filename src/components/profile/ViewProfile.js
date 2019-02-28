import React, { Component } from 'react';
import {StatusBar, Platform} from 'react-native'
import { Container, Content, Header,Button, SideBar, Body, Title, Left, View, Drawer} from 'native-base';
import firebase,{firebaseAuth} from '../../services/firebase/Firebase';
import Icon from 'react-native-vector-icons/Entypo';
import Profile from './Profile';

export default class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nuevo: '',
            lista: [],
            user:{},
            loggedIn:false,
        }
    }

    listenForItems = (itemsRef) => {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var lista = [];
            snap.forEach((child) => {
                lista.push({
                    nombre: child.val().nombre,
                    emailE: child.val().emailE,
                    numEmpleado: child.val().numEmpleado,
                    foto:child.val().foto,
                    cargo: child.val().cargo,
                    area: child.val().area,
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
        firebaseAuth.onAuthStateChanged(function(userLog) {
        console.log('userLog', userLog)
        if (userLog) {
            var uid = userLog.uid;
            var key = userLog.key;
        }
        console.log(uid)
        console.log(key)
        const itemsRef = firebase.database().ref('empleado/' + uid + '/');
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
                            <Title style={{color:'#DCDCDC'}}> Mi perfil
                                {/* {loggedIn ?
                                    userLog.username :
                                    "Mi perfil"
                                } */}
                            </Title>
                        </Body>
                    </Header>
                    <Content>
                        <Profile lista={this.state.lista} />
                    </Content>
                        
                </Drawer>  
                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                
            </View>
        </Container>

    );
  }
}