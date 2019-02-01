import React, { Component } from 'react';
import { Image } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import fondo from '../../assets/fondo.jpg';
import logo from '../../assets/logo.png';
import stylesM from './Styles';
export const PageWelcome =({ open })=> (

    <Card>
        
        <CardItem>
            <Left>
                <Thumbnail source={logo}/>
                <Body>
                <Text note>Aplicación móvil para el monitoreo y control de los operadores de tractocamión</Text>
                </Body>
            </Left>
        </CardItem>

        <CardItem cardBody>
            <Image source={fondo} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>

        <CardItem>
            <Left >
                <Button transparent onPress={() => open()}>
                    <Text style={stylesM.textito2}>Más información</Text>
                </Button>
            </Left>
            <Body/>
            <Right>
                <Text>Prueba</Text>
            </Right>
        </CardItem>

    </Card>
)

