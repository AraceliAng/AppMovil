import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform } from 'react-native';
import { Content, Button, H1, snap ,Left, Body, Title, Header,Right, Card, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import stylesP from './Styles';
import imgFondo from '../../assets/mas.jpg';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ProfileContent from './ProfileContent';
import firebase from '../../services/firebase/Firebase';

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

    
    
    readUserData () { 
        firebase.database().ref('empleado/').once('value',function(snapshot) { 
            console.log(snapshot.val()) 
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
                        <View style={{ flexDirection:'row', backgroundColor: "black" }}> 
                            <Image source={imgFondo} style={stylesP.img}/>
                        </View>
                    )}
                >   

                    <Content>
                        <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                        <View>
                <Card>
                    <ListItem>
                        <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Información</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            {/* <Text style={{fontWeight: 'bold'}}>Nombre</Text> */}
                            <Text note >{this.state.readUserData} </Text>
                        </Body>
                    </ListItem>
                </Card>
{/* 
                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Número de empleado</Text>
                            <Text note> {this.state.lista}</Text>
                        </Body>
                    </ListItem>
                </Card>
        
                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Área</Text>
                            <Text note> {this.state.area}</Text>
                        </Body>
                    </ListItem>
                </Card>
        
                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Cargo</Text>
                            <Text note> {this.state.cargo}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                        <Text style={{fontWeight: 'bold'}}>Correo Electrónico</Text>
                        <Text note> {this.state.email}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Contraseña</Text>
                            <Text note> {this.state.password}</Text>
                        </Body>
                    </ListItem>
                </Card> */}
            </View>
                    </Content> 

                </HeaderImageScrollView>

                </Drawer>  

                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />  
                 
            </View>
            
        );
    }
}

