import React, { Component } from 'react';
import { View, Text, StatusBar,Platform } from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, H1, ListItem, Card, Content, Image, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import style5 from './Styles';
import SideBar from '../main/SideBar';

export default class FormReports extends Component{
    state={
        user:{},
        logged:false,
    }
    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario",user)
                this.setState({user:user,logged:true})
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            
        }
    }
   
    render(){
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {user,logged}=this.state
        return(
           <Container>
               <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} logged={logged}/>}
                    onClose={this.closeDrawer} >
                <Header style={{ backgroundColor: '#000000', paddingTop:22, height:80}}
                    androidStatusBarColor="black">
                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 30, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {logged ?
                                    user.username :
                                    "Reportes"
                                }
                            </Title>
                        </Body>
                        <Right/>
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
               </Drawer> 
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
           </Container>
        );
    }
}

//<Icon name='chevron-left' style={{color:'white'}} size={20} />