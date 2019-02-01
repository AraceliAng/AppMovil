import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options={
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
}

export default class Foto extends Component<Props> {
    
  constructor(props){
        super(props);
        this.state={
            avatarSource: null,
            pic:null,
        }
      }

myfun=()=>{
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('Image Picker Error: ', response.error);
    } else {
      let source = { uri: response.uri };

      // Tambien se puede hacer asi:  let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
        pic:response.data
      });
    }
  });
}
  render(){
    return (

        <View style={styles.container}>
        
            <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Image source={this.state.avatarSource}
                        style={{width:'100%',height:300,margin:10}}/>
                <Button full bordered dark onPress={this.myfun} style={{borderRadius:25, borderColor:'#5F0003'}} title='agregar '>
                    <Text>Tomar foto</Text>
                </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
});