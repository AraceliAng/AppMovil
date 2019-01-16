import React, { Component} from 'react';
import { Text, ImageBackground, StatusBar} from 'react-native';
import { Content, Header, Left, Body, Right, Button, Icon, Item, Input, Card, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Recovery extends Component <Props>{
    render(){
        return(
            <Header
                style={{ backgroundColor: 'black'}}
                androidStatusBarColor= 'black'
            >
                <Left>
                    <Button>
                        <Icon name='arrow-black' style={{color:'white'}} />
                    </Button>
                </Left>
                <Body/>
                <Right/>
            </Header>
            <StatusBar backgroundColor='black' barStyle='Light-content' />

        );
    }
}