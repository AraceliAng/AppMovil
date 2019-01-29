import React, { Component } from 'react';
import { View, Image, Alert, Platform, StatusBar} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Icon, Drawer} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import imgLocation from '../../assets/localizador.png';
import style4 from './Styles';
import {Actions} from "react-native-router-flux";
import SideBar from '../main/SideBar';

export default class FormLocation extends Component{
    location=()=>{
        Actions.main()
    }
    
    showAlert = () =>{
        Alert.alert(
           'Tu ubicación es: '
        )
     }

    render(){
// se agrego esto
            closeDrawer = () => {
                this.drawer._root.close()
            };
            openDrawer = () => {
                this.drawer._root.open()
            };
            //hasta aquí
        
        return(
           <Container>
{/* se agrego la etiqueta drawer  */}
<Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={this.closeDrawer} >

                <Header
                    style={{ backgroundColor: '#000000'}}
                    androidStatusBarColor="black"
                    
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.profile()}>
                            <Icon name='menu' style={{marginRight: 30, fontSize: 30, color:'#DCDCDC'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Location</Title>
                        </Body>
                    <Right/>
                </Header>
           
            <View style={style4.view}>
                <Image source={imgLocation} style={style4.thub}/>
            </View>
            <View>
            
                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Ubicación</Text>
                            <Text note>No has checado tu ubicación</Text>
                        </Body>
                    </ListItem>
                </Card>
            </View>
            <View style={style4.textos}>
                <Button full bordered dark onPress={this.showAlert} style={style4.boton}>
                    <Text>Entrar</Text>
                </Button>
            </View>
            </Drawer>
            <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
          
        </Container>
        );
    }
}

