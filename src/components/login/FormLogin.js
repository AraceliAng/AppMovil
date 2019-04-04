import React, { Component } from 'react';
import styles3 from './Styles';
import { Image, KeyboardAvoidingView} from 'react-native';
import { Header, View} from 'native-base';
import imgLogo from '../../assets/m.jpg';

export default class FormLogin extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding">
                <Header style={{backgroundColor: '#000000'}} ></Header>
                <View style = {styles3.containerF}>
                    <Image source={imgLogo} style={styles3.img}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}