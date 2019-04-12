import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform,AsyncStorage } from 'react-native';
import { Content, Button,Left, Body, Title, Header, Card, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';


export default class FormReports extends Component {
   constructor(props){
       super(props);
        this.state={
            token:'',
            loggedIn:false,
            data:{},
            evi:{},
        }
   }
    

    getUID = async (item) => {
        try {
            const userUid = await AsyncStorage.getItem('userID');
            if(userUid){
                console.log("Existe un usuario",userUid)
                this.setState({token:userUid})
                firebase.database().ref('empleado/'+userUid+"/").once('value',snapshot =>{ 
                    console.log('Esto es una prueba, dentro de lo asincrono',snapshot.val()) 
                    let user = snapshot.val()
                    this.setState({data:user})
                    console.log('Es una prueba dentro de lo asincrono',user) 
                });         
               
            } else{
                console.log("no hay nada")
            }
        } catch (error) {   
        }
    }

getEvi=async(item)=>{
    try {
        const userUid = await AsyncStorage.getItem('userID');
        if(userUid){
            console.log("Existe un usuario",userUid)
            this.setState({token:userUid})
            firebase.database().ref('evidencia/'+userUid+"/").once('value',snapshot =>{ 
                console.log('Dentro de lo asincrono Evidencias',snapshot.val()) 
                let user = snapshot.val()
                console.log("usuario",user)
                this.setState({evi:user})
                console.log('Dentro de lo asincrono Evidenciasssss',user) 
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
     this.getEvi(this.props)
    }

    //con esto es cuando haya un cambio
    componentWillReciveProps(nextPros){
        this.getUID(nextPros)
        this.getEvi(nextPros)
    }   
    
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {data,evi,loggedIn}=this.state
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
                                    "Reporte"
                                }
                            </Title>
                        </Body>
                    </Header>
               
               
                    <Content>
                        <View>
                            <Card>
                                <ListItem>
                                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Información del operador</Text>
                                    </Body>
                                </ListItem>
                        
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Nombre</Text>
                                        <Text note> 
                                            {/* Araceli Olguin Angeles */}
                                            {data.nombre}
                                        </Text>
                                    </Body>
                                </ListItem>
                            
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Número de empleado</Text>
                                        <Text note> 
                                            {/* 5044 */}
                                            {data.numEmpleado}
                                        </Text>
                                    </Body>
                                </ListItem>
                        
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Área</Text>
                                        <Text note> 
                                            {/* Sistemas */}
                                            {data.area}
                                        </Text>
                                    </Body>
                                </ListItem>
                            
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Cargo</Text>
                                        <Text note> 
                                            {/* Prácticante */}
                                            {data.cargo}
                                        </Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Información de evidencia</Text>
                                        {evi}
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text note> {evi} </Text>
                                        
                                    </Body>
                                </ListItem>
                            
                                
                            </Card> 
                        </View>
                        
                    </Content> 
                </Drawer>  
                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />                   
            </View>
            
        );
    }
}

