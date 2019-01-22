import React, { Component } from 'react';
import { View} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
export default class FormTickets extends Component{
    render(){
        return(
           <Container>
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
                        <Title> Tickets</Title>
                        </Body>
                    <Right/>
                </Header>
            <View >
            
                
            </View>
        </Container>
        );
    }
}

//<Icon name='chevron-left' style={{color:'white'}} size={20} />