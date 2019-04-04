import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform,AsyncStorage } from 'react-native';
import { Content, Button,Left, Body, Title, Header, Card, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import stylesP from './Styles';
import imgFondo from '../../assets/mas.jpg';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import firebase from '../../services/firebase/Firebase';

export default class ProfileBanner extends Component {
    state={
        token:'',
        loggedIn:false,
        data:{},
    }

    getUID = async (item) => {
        try {
            const userUid = await AsyncStorage.getItem('userID');
            if(userUid){
                console.log("Existe un usuario",userUid)
                this.setState({token:userUid})
                firebase.database().ref('empleado/'+userUid+"/").once('value',snapshot =>{ 
                    console.log('Esto es una prueba, dento de lo asincrono',snapshot.val()) 
                    let user = snapshot.val()
                    this.setState({data:user})
                    console.log('Es una prueba dento de lo asincrono',user) 
                
                }); 
              
            } else{
                console.log("no hay nada")
            }
        } catch (error) {   
        }
    }


    //con esto vas a ejecutar la funcion cuando entres a la pantalla
    componentWillMount(){
     this.getUID(this.props)
    }

    //con esto es cuando haya un cambio
    componentWillReciveProps(nextPros){
        this.getUID(nextPros)
    }   
    
    render() {

        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {data,loggedIn}=this.state
        return (

            <View style={{flex:1}}>

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} loggedIn={loggedIn}/>}
                    onClose={this.closeDrawer} >

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80 }} 
                            androidStatusBarColor="black">

                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>

                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {loggedIn ?
                                    userLog.username :
                                    "Mi perfil"
                                }
                            </Title>
                        </Body>
                    </Header>
               
                <HeaderImageScrollView
                    maxHeight={120}
                    renderFixedForeground={() => (
                        <View style={{ flexDirection:'row', backgroundColor: "black" }}> 
                            <Image source={imgFondo} style={stylesP.img}/>
                        </View>
                    )}
                >   

                    <Content>
                        <View>
                <Card>
                    <ListItem>
                        <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Información</Text>
                        </Body>
                    </ListItem>
               
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Nombre</Text>
                            <Text note> {data.nombre}</Text>
                        </Body>
                    </ListItem>
                
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Número de empleado</Text>
                            <Text note> {data.numEmpleado}</Text>
                        </Body>
                    </ListItem>
               
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Área</Text>
                            <Text note> {data.area}</Text>
                        </Body>
                    </ListItem>
                
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Cargo</Text>
                            <Text note> {data.cargo}</Text>
                        </Body>
                    </ListItem>
                
                    {/* <ListItem>
                        <Body>
                        <Text style={{fontWeight: 'bold'}}>Correo Electrónico</Text>
                        <Text note> {data.email}</Text>
                        </Body>
                    </ListItem> */}

                    <ListItem>
                        <Body>
                        <Text style={{fontWeight: 'bold'}}>Número de teléfono</Text>
                        <Text note> {data.telefono}</Text>
                        </Body>
                    </ListItem>
                </Card>

                {/* <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Contraseña</Text>
                            <Text note> {data.password}</Text>
                        </Body>
                    </ListItem>
                </Card> */}
            </View>
                    </Content> 

                </HeaderImageScrollView>

                </Drawer>  

                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "white-content": "default" }  />  
                 
            </View>
            
        );
    }
}

