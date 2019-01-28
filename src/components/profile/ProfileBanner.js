import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform } from 'react-native';
import { Content, Button, H1, Card, Left, Body, Title, ListItem,Header,Right} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux';
import stylesP from './Styles';
import imgPerfil from '../../assets/photo.jpg';
import imgFondo from '../../assets/negro.jpg';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ProfileContent from './ProfileContent';

export default class ProfileBanner extends Component {
    state={
        user:{}
    }

    render() {
        let {user}=this.state
        return (
            <View style={{flex:1}}>
                
                <Header
                    style={{ backgroundColor: '#000000' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='menu' style={{marginRight: 30, fontSize: 20, color:'#DCDCDC'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Mi perfil</Title>
                    </Body>
                    <Right/>
                </Header> 
            

                
                <HeaderImageScrollView
                    maxHeight={120}
                    headerImage={imgFondo}
                    renderFixedForeground={() => (
                        <View style={{
                            flexDirection: 'row',
                           
                          }}>
                            <View >
                                <Image source={imgPerfil} style={stylesP.thub}/> 
                            </View> 
                            <View style={{flexDirection: 'column'}}>
                                <H1 style={stylesP.h1}>Nombre operador</H1>
                                <Text style={stylesP.text}>correo_operdor@mucino.com</Text>
                                <Text style={stylesP.texto}>más información del operador</Text>
                            </View>
                        </View>
                    )}

                >
                    <Content>
                    <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
                        <ProfileContent {...user}/>
                    </Content>
                </HeaderImageScrollView>
                       
            </View>
        );
    }
}

