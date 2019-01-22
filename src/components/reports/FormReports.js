import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, H1, ListItem, Card, Content, Image} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import style5 from './Styles';
export default class FormReports extends Component{
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
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Reporte</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>
                    </Right>
                </Header> 
            
            <Content>
            <View style={style5.view}>
            
            <H1 style={style5.h1}>Nombre operador</H1>
            <Text style={style5.text}>correo_operdor@mucino.com</Text>
            <View>
                <Text style={style5.texto}>más información del operador</Text>
            </View>
        </View>
        <View>
            <Card>
                <ListItem>
                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Proyecto</Text>
                    <Text note>descripcion del proyecto</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto</Text>
                    <Text note>descripcion del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto2</Text>
                    <Text note>descripcion del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto3</Text>
                    <Text note>descripcion del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto4</Text>
                    <Text note>descripcion del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
        </View>
        </Content> 
                
        <StatusBar backgroundColor="black" barStyle="light-content" />
        </Container>
        );
    }
}

//<Icon name='chevron-left' style={{color:'white'}} size={20} />