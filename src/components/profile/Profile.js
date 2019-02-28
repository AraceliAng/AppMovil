import React, { Component } from 'react';
import { View } from 'react-native';
import ContentP from './ContentP';

export default class Profile extends Component{
  render() {
    return (

        <View>
          {this.props.lista.map(item =>
             <ContentP key={item.id}
                            item={item}

                          />
                  )}
        </View>
    );
  }
}