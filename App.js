/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FormLocation from './src/components/location/FormLocation';
import Routes from './Routes';
import { Drawer } from 'react-native-router-flux';
import ComponentLogin from './src/components/login/ComponentLogin';
import { FormLogin } from './src/components/login/FormLogin';
import ProfileBanner from './src/components/profile/ProfileBanner';

 

export default class App extends Component{
  render() {
    return (
      <View style={style1.container}>

          <FormLocation/>
   
      </View>
    )
  }
}

const style1= StyleSheet.create({
    container: {
      flex: 5,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
    },

});
