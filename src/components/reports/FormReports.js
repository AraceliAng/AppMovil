import React, { Component } from 'react';
import { View} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import style5 from './Styles';
export default class FormReports extends Component{
    render(){
        return(
           <Container>
                <Header
                    style={{ backgroundColor: '#DADADA' }}
                    androidStatusBarColor="black"
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='navicon' style={{color:'#000000'}} size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={style5.textoRs}>Reports</Title>
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