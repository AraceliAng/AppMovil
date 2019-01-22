import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import imgLocation from '../../assets/localizador.png';
import style4 from './Styles';

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
        return(
           <Container>
                <Header
                    style={{ backgroundColor: '#000000' }}
                    androidStatusBarColor="black"
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='navicon' style={{color:'white'}} size={20} />
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
           
          
        </Container>
        );
    }
}

//<Icon name='chevron-left' style={{color:'white'}} size={20} />