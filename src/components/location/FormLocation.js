import React, { Component } from 'react';
import { View, ImageBackground, KeyboardAvoidingView, StatusBar} from 'react-native';
import { Header, Left, Button, Icon, Body,Right} from 'native-base';
import style4 from './Styles';
import imgFondo from '../../assets/images/m.jpg'

export default class FormLocation extends Component{
    render(){
        return(
           <ImageBackground source={imgFondo} style={style4.img}>
            <Header
                    style={{ backgroundColor: '#000565' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
            <View >
                

                <StatusBar backgroundColor="black" barStyle="light-content" /> 

                <View >
                    
                </View>
                
            </View>
        </ImageBackground>
        );
    }
}