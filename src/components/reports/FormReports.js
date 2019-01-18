import React, { Component } from 'react';
import { View} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FormReports extends Component{
    render(){
        return(
           <Container>
                <Header
                    style={{ backgroundColor: '#000565' }}
                    androidStatusBarColor="black"
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='navicon' style={{color:'white'}} size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Reports</Title>
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