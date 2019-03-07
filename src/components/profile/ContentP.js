
  
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ProfileContent from './ProfileContent';
export default class ContenidoP extends Component{
  render() {
    return (

        <View>
            
         { this.props.lista.map(function(item){
             <ProfileContent key={item.uid}
                            item={item}

                          />
                  })
                  }
        </View>
    );
  }
}