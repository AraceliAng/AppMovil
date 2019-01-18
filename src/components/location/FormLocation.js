import React, { Component } from 'react';
import { View, ImageBackground, StatusBar} from 'react-native';
import { Header, Left, Button, Icon, Body,Right} from 'native-base';
import style4 from './Styles';
import imgFondo from '../../assets/fondito.jpg'
export default class FormLocation extends Component{
    render(){
        return(
           <ImageBackground source={imgFondo} style={style4.img}>
            <Header
                    {/*style={{ backgroundColor: '#000565' }}
        androidStatusBarColor="black"*/}

                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
            >
                    {/*<Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='leftcirlce' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>*/}
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