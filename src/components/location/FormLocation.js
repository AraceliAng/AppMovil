import React, { Component } from 'react';
import { View, Image, Alert, Platform, StatusBar} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Icon, Drawer} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import imgLocation from '../../assets/localizador.png';
import style4 from './Styles';


type Props={};
export default class FormLocation extends Component <Props>{

    render(){
       return(
           <Container>
                   
            
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
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>
        );
    }
}

