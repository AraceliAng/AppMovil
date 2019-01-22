import React, { Component } from 'react';
import { View, StatusBar} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Input, Item, Form, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
export default class FormTickets extends Component{
    render(){
        return(
           <Container>
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
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Tickets o facturas</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>
                    </Right>
                </Header>

                <Form style={styles6.containerF}>
                <Item regular style={styles6.inputs}>
                    <Icon active name='user' size={15} style={{marginLeft:12}} />
                    <Input 
                        name='descripcion'
                        placeholder='Escribre una descripción'
                        keyboardType='descripcion'
                        style={styles6.textoF}
                        onChangeText={Value=>onChange('descripcion',Value)}
                    />
                </Item>
                <Button full bordered dark onPress={} style={{borderRadius:25, borderColor:'#5F0003'}}>
                    <Text>Subir imagen</Text>
                </Button>
            </Form>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </Container>
        );
    }
}
