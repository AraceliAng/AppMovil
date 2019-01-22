import React, {Component} from 'react'
import { StatusBar, View, Header} from 'react-native';
import { Content,Text, Left,Button,Icon,Body,Title,Right } from 'native-base'
import {Actions} from "react-native-router-flux";
import imgFondo from '../../assets/fondo.jpg'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import Profile from './Profile';
import stylesP from './Styles';

export default class PageProfile extends Component{
    state={
        user:{}
    }

    // componentWillMount(){

    //     this._retrieveData()
    // }
    // _retrieveData = async () => {
    //     try {
    //         const userLocal = await AsyncStorage.getItem('user');
    //         let user = JSON.parse(userLocal)
    //         if(user){
    //             console.log("hay usuario",user)
    //             this.setState({user:user})
    //         }else{
    //             console.log("no hay nada")
    //         }
    //     } catch (error) {
    //         // Error retrieving data
    //     }
    // }
    render(){
        let {user}=this.state
        return(
            <View style={{flex:1}}>
                <View style={{position:'absolute',zIndex:9,marginTop:20}}>
                <Header
                    style={{ backgroundColor: '#000000' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='menu' style={{marginRight: 30, fontSize: 20, color:'#DCDCDC'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Perfil</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>
                    </Right>
                </Header> 
                </View>

                <HeaderImageScrollView
                    maxHeight={200}
                    headerImage={imgFondo}
                    

                >
                    <Content>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <Profile {...user}/>
                    </Content>
                </HeaderImageScrollView>

            </View>
        );
    }
}
