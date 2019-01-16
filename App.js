/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';
import styles from './styles';
import { FormLogin } from './src/components/login/FormLogin';
 
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <FormLogin/>
        
      </View>
    );
  }
}


