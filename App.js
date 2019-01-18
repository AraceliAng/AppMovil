/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ComponentLogin from './src/components/login/ComponentLogin';
import Menu from './src/components/main/Menu';
 
type Props = {};
export default class App extends Component <Props> {
  render() {
    return (
      <View style={style1.container}>
        <Menu/>
      </View>
    );
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
