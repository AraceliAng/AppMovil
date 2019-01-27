/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileBanner from './src/components/profile/ProfileBanner';
import FormLocation from './src/components/location/FormLocation';
import ComponentLogin from './src/components/login/ComponentLogin';
import FormReports from './src/components/reports/FormReports';
import FormTickets from './src/components/tickets/FormTickets';
import MainPage from './src/components/main/MainPage';
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
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
    },

});
