import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, StatusBar} from 'react-native';
import { Header, Text, Form, Item, Left, Input, Button, Body,Right, Container, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
export default class FormTickets extends Component{
    render(){
        return(
           <Container >
            <Header
                        style={{ backgroundColor: '#000000' }}
                        androidStatusBarColor="black"
            >
                <Left>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='menu' style={{color:'white'}} size={20} />
                    </Button>
                </Left>
                    <Body>
                        <Title>Tickets o facturas</Title>
                        </Body>
                    <Right/>
            </Header>
            
          
                <Form style={styles6.containerF}>
                    <Item regular style={styles6.inputs}>
                        <Icon active name='edit' size={15} style={{marginLeft:12}} />
                        <Input 
                            name='desc'
                            placeholder='Descripción'
                            style={styles6.textoF}
                            onChangeText={Value=>onChange('desc',Value)}
                        />
                    </Item>
                    <Button full bordered dark  style={{borderRadius:25, borderColor:'#5F0003'}}>
                        <Text>Tomar foto</Text>
                    </Button>
                </Form>
           
            <StatusBar backgroundColor="black" barStyle="light-content" />
            </Container>
        );
    }
}

//<Icon name='chevron-left' style={{color:'white'}} size={20} />