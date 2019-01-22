import React, {Component} from 'react';
import {View, Text, Image, StatusBar,AsyncStorage, } from 'react-native';
import {Container, Content, Button, H1, Card, Left, Body, Title, ListItem,Header,Right} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux';
import stylesP from './Styles';
import imgPerfil from '../../assets/photo.jpg';
import imgFondo from '../../assets/fondo.jpg';
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
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>
                    </Right>
                </Header> 
            

                
                <HeaderImageScrollView
                    maxHeight={200}
                    headerImage={imgFondo}
                    // renderFixedForeground={() => (
                    //     <View style={stylesP.view}>
                    //         <View style={stylesP.view}>
                    //             <H1 style={stylesP.h1}>Nombre operador</H1>
                    //         </View>
                    //     </View>
                    // )}

                >
                    <Content>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <ProfileContent {...user}/>
                    </Content>
                </HeaderImageScrollView>
                       
            </View>
        );
    }
}

