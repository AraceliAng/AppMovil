import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform } from 'react-native';
import { Content, Button, H1, Left, Body, Title, Header,Right, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import stylesP from './Styles';
import imgPerfil from '../../assets/photo.jpg';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ProfileContent from './ProfileContent';

export default class ProfileBanner extends Component {
    state={
        user:{},
        logged:false,
    }

    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario",user)
                this.setState({user:user,logged:true})
            } else{
                console.log("no hay nada")
            }
        } catch (error) {   
        }
    }

    render() {

        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {user,logged}=this.state
        return (

            <View style={{flex:1}}>

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} logged={logged}/>}
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
                                {logged ?
                                    user.username :
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
                        <ProfileContent {...user}/>
                    </Content>

                </HeaderImageScrollView>

                </Drawer>  

                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />  
                 
            </View>
            
        );
    }
}

