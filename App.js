/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './Routes';

 

export default class App extends Component{
  render() {
    return (
      <View style={style1.container}>
          <Routes/>
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
