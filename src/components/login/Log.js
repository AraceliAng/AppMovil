import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {firebaseAuth} from '../../services/firebase/Firebase';
import ComponentLogin from './ComponentLogin';
import ProfileBanner from '../profile/ProfileBanner';


export default class Log extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((userLog) => {
      if (userLog) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <ProfileBanner/>;
      case false:
        return <ComponentLogin/>;
    }
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  view: {
    flex: 1
  }
});