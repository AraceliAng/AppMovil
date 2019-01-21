import React, {Component} from 'react';
import {View, Text, Image, StatusBar,AsyncStorage} from 'react-native';
import {Container, Content, Button, H1, Card, Left, Body, Title, ListItem,Header,Right} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux';
import stylesP from './Styles';
import imgPerfil from '../../assets/photo.jpg';
import imgFondo from '../../assets/fondo.jpg';

export default class Profile extends Component {

    logOut=()=>{
        AsyncStorage.removeItem("user");
        //AsyncStorage.removeItem("token");
        Actions.login()
    }

    render() {
        return (
            <Container style={stylesP.container}>
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
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Perfil</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>

                    </Right>

                </Header>
                <Content>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <Image source={imgFondo} style={stylesP.img}/>
                    <View style={stylesP.view}>
                        <View style={stylesP.view}>
                            <Image source={imgPerfil} style={stylesP.thub}/>
                        </View>
                        <H1 style={stylesP.h1}>Nombre operador</H1>
                        <Text style={stylesP.text}>correo_operdor@mucino.com</Text>
                        <View>
                            <Text style={stylesP.texto}>más información del operador</Text>
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

                        {/*<Text style={{fontWeight: 'bold'}}>Experiencia</Text>
                        <Card>
                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Backend Developer</Text>
                                <Text note>Mirak Solutions</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>FullStack Developer</Text>
                                <Text note>Fixter Geek</Text>
                                <Text note>oct de 2016 -actualidad . 1 mes</Text>
                                </Body>
                            </ListItem>
                        </Card>*/}
                    </View>

                   {/* <View>
                        <Text style={{fontWeight: 'bold'}}>Educacion</Text>
                        <Card>
                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Unidad Profesional Interdiciplinaria</Text>
                                <Text note>Ingenieria en Telematica</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Unidad Profesional Interdiciplinaria</Text>
                                <Text note>Ingenieria en Mecatronica</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>
                        </Card>
                    </View>

                    <Card>
                        <Text style={{margin: 20, fontWeight: 'bold'}}>Aptitudes y validaciones destacadas</Text>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>Django</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>React</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>Firebase</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>2 APTITUDES MAS</Text>
                        </ListItem>
                    </Card>

                    <Card>
                        <Text style={{margin: 20, fontWeight: 'bold'}}>Contactar</Text>
                        <ListItem>
                            <Icon name="bookmark" style={{marginRight: 20}}/>
                            <Body>
                            <Text style={{fontWeight: 'bold'}}>contacto@fixter.org</Text>
                            </Body>
                        </ListItem>
                    </Card>
                   */}
                </Content>
            </Container>
        );
    }
}

