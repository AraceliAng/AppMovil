/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from './src/components/main/Menu';
 

export default class App extends Component{
  render() {
    return (
      <View style={style1.container}>
        <Menu />
      </View>
    )
  }
}

const style1= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
    },

});
