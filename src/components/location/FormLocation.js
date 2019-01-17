import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView} from 'react-native';
import style4 from './Styles';
import imgLogo from '../../assets/m.jpg'

class FormLocation extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding">
                    <View style={style4.containerF}>
                        <Image source={imgLogo} style={style4.img}  />
                    </View>
            </KeyboardAvoidingView>
        );
    }
}
export default FormLocation;