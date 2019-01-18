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
import FormLocation from './src/components/location/FormLocation';
 
type Props = {};
export default class App extends Component <Props> {
  render() {
    return (
      <View style={style1.container}>
        <FormLocation/>
      </View>
    );
  }
}

const style1= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#F7F7F7',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }
});
