import React, { Component} from 'react';
import { Text, ImageBackground, StatusBar} from 'react-native';
import { Content, Header, Left, Body, Right, Button, Icon, Item, Input, Card, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgFondo from '../../assets/fondito.jpg'
import styles3 from './Styles';

export default class Recovery extends Component <Props>{
    render(){
        return(
            <ImageBackground source={imgFondo} style={styles3.img}>
                <Header
                    style={{ backgroundColor: 'black'}}
                    androidStatusBarColor= 'black'
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-black' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <StatusBar backgroundColor='black' barStyle='Light-content' />
                <Content style={styles3.containerR}>
                    <Card style={{marginTop:100}}>
                        <CardItem header>
                            <Text> ¿Has olvidado tu contraseña?</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles3.inputs}>
                                    Para restablecer tu contraseña debes ingresar tu correo
                                </Text>
                                <Item regular style={styles3.inputs} >
                                        <Input
                                            name="correo"
                                            placeholder="Correo electrónico"
                                            keyboardType='email-address'
                                            style={{color:'black'}}

                                        />
                                </Item>
                                <Button full bordered dark style={styles3.inputs}>
                                    <Text>Enviar</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </ImageBackground>
        );
    }
}