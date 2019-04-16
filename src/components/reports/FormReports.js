import React, {Component} from 'react';
import {View, Text, Image, StatusBar,Platform,AsyncStorage } from 'react-native';
import { Content, Button,Left, Body, Title, Header, Card, ListItem, Drawer, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';
import MapView ,{ PROVIDER_GOOGLE }from 'react-native-maps';


export default class FormReports extends Component {
   constructor(props){
       super(props);
        this.state={
            token:'',
            loggedIn:false,
            data:{},
            evi:[],
            evid:{},
            check:[],
            i:"",
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
            console.log("Existe un usuario envi",userUid)
            
           const evi = firebase.database().ref('evidencia/'+userUid+"/").once('value',snapshot =>{ 
                console.log('---------------------------------------------------s',snapshot.val()) 
                console.log('arreglo',Object.values(snapshot.val()))
                let evi = Object.values(snapshot.val())
                this.setState({evi})
            }); 
            //const evid = Object .keys (evi) .map (i => evi [i])  
            //forEach filter indexOf ...
            // for in exmplae => for dylan in llavecit
            //console.log(evid,"evddddddddd")      
           
        } else{
            console.log("no hay nada")
        }
    } catch (error) {   
    }
}

getCheck=async(item)=>{
    try {

        const userUid = await AsyncStorage.getItem('userID');
        if(userUid){
            console.log("Existe un usuario envi",userUid)
            
           const check = firebase.database().ref('checador/'+userUid+"/").once('value',snapshot =>{ 
                console.log('---------------checador------------------------------------s',snapshot.val()) 
                console.log('arreglo checador',Object.values(snapshot.val()))
                let check = Object.values(snapshot.val())
                this.setState({check})
            }); 
            //const evid = Object .keys (evi) .map (i => evi [i])  
            //forEach filter indexOf ...
            // for in exmplae => for dylan in llavecit
            //console.log(evid,"evddddddddd")      
           
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
     this.getCheck(this.props)
    }

    //con esto es cuando haya un cambio
    componentWillReciveProps(nextPros){
        this.getUID(nextPros)
        this.getEvi(nextPros)
        this.getCheck(nextPros)
    }   
    
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {data,evi,loggedIn,check}=this.state
        return (

            <View style={{flex:1}}>

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar  navigator={this.navigator} loggedIn={loggedIn}/>}
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
                                            {data.nombre}
                                        </Text>
                                    </Body>
                                </ListItem>
                            
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Número de empleado</Text>
                                        <Text note> 
                                            {data.numEmpleado}
                                        </Text>
                                    </Body>
                                </ListItem>
                        
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Área</Text>
                                        <Text note> 
                                            {data.area}
                                        </Text>
                                    </Body>
                                </ListItem>
                            
                                <ListItem>
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Cargo</Text>
                                        <Text note> 
                                            {data.cargo}
                                        </Text>
                                    </Body>
                                </ListItem>
                            </Card>
                            <Card>
                                <ListItem>
                                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Información de evidencia</Text>
                                        
                                    </Body>
                                </ListItem>
                                <View>
                                    {evi.map((data,i)=>
                                    <Card key={i}>
                                        <CardItem > 
                                            <Body>
                                                <Image source={{uri:data.foto}} style={{width:375,height:200}} />
                                                <Text>{data.descripcion}</Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Text note>{data.fecha} {data.hora}</Text>
                                            </Body>
                                        </CardItem>
                                    </Card>)}
                                </View>
                            </Card>
                            <Card>
                                <ListItem>
                                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>Información de checador</Text>
                                    </Body>
                                </ListItem>
                                <View>
                                    {check.map((data, i)=>
                                    <Card key={i}>
                                        <CardItem > 
                                            <Body>
                                                <MapView 
                                                    provider={PROVIDER_GOOGLE}
                                                    pitchEnabled={false}
                                                    rotateEnabled={false}
                                                    scrollEnabled={false}
                                                    style={{width:'100%',height:200}}
                                                    initialRegion={{latitude:data.latitude,longitude:data.longitude,
                                                        latitudeDelta:data.latitudeDelta,
                                                        longitudeDelta:data.longitudeDelta,
                                                    }}
                                                >
                                                    <MapView.Marker
                                                        coordinate={{latitude:data.latitude,longitude:data.longitude}}
                                                        tittle="¡Aquí checaste!"
                                                        description="Ubicación"
                                                    />
                                                 </MapView>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Text note>{data.fecha} {data.hora}</Text>
                                            </Body>
                                        </CardItem>
                                    </Card>)}
                                </View>                            
                                </Card>
                           
                        </View>
                        
                    </Content> 
                </Drawer>  
                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />                   
            </View>
            
        );
    }
}

