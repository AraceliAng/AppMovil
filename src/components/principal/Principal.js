import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import styles2 from './styles';


class Principal extends Component{
    render(){
        return(
            <Container>
                <Header > 
                <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View>
                        <Text style ={styles2.texto}>Esto es una prueba</Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full> 
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>  
        );
    }
}
export default Principal;


/*
<Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
*/