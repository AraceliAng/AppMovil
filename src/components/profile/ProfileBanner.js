import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform } from 'react-native';
import { Content, Button, H1, Left, Body, Title, Header,Right, Card, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import stylesP from './Styles';
import imgPerfil from '../../assets/photo.jpg';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

import firebase from '../../services/firebase/Firebase';
import ProfileContent from './ProfileContent';

export default class ProfileBanner extends Component {
    state={
        userLog:{},
        loggedIn:false,
    }

    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('userLog');
            let userLog= JSON.parse(userLocal)
            if(userLog){
                console.log("hay usuario",userLog)
                this.setState({userLog:userLog,loggedIn:true})
            } else{
                console.log("no hay nada")
            }
        } catch (error) {   
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
              cargo:child.val().cargo,
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
    render() {

        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {userLog,loggedIn}=this.state
        return (

            <View style={{flex:1}}>

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} loggedIn={loggedIn}/>}
                    onClose={this.closeDrawer} >

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80 }} 
                            androidStatusBarColor="black">

                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>

                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {loggedIn ?
                                    userLog.username :
                                    "Mi perfil"
                                }
                            </Title>
                        </Body>

                        
                    </Header>
               
                <HeaderImageScrollView
                    maxHeight={120}
                    renderFixedForeground={() => (
                        <View style={{
                                flexDirection:'row',
                                backgroundColor: "black"
                            }}>
                            <View >
                                <Image source={imgPerfil} style={stylesP.thub}/> 
                            </View> 
                            <View style={{flexDirection:'column'}}>
                                <H1 style={stylesP.h1}>Nombre operador</H1>
                                <Text style={stylesP.text}>correo_operdor@mucino.com</Text>
                                <Text style={stylesP.texto}>más información del operador</Text>
                            </View>
                        </View>
                    )}
                >   

                    <Content>
                            <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                            
                            <View>
                                <Card>
                                
                                    <ProfileContent lista={this.state.lista} />
                                </Card>            


                            </View>
                            </Content> 

                </HeaderImageScrollView>

                </Drawer>  

                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />  
                 
            </View>
            
        );
    }
}

