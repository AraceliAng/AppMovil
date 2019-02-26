import React, { Component } from 'react';
import styles3 from './Styles';
import { Image, KeyboardAvoidingView, StatusBar, Platform} from 'react-native';
import { Header, Input, Button, Item, Form,Text, View} from 'native-base';
import imgLogo from '../../assets/m.jpg';

export default class FormLoginNuevo extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding">
                <Header style={{backgroundColor: '#000000'}} ></Header>
                <View style = {styles3.containerF}>
                    <Image source={imgLogo} style={styles3.img}/>
                </View>
            
                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "dark-content": "default"}/>
            </KeyboardAvoidingView>
        );
    }
}