import React, { Component } from 'react';
import { View, Alert, Platform, StatusBar, AsyncStorage} from 'react-native';
import { Toast, Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SideBar from '../main/SideBar';
import style4 from './Styles';
import MapView ,{ PROVIDER_GOOGLE }from 'react-native-maps';
import firebase from '../../services/firebase/Firebase';
import moment from 'moment';
import { getNamePosition } from '../../services/Geocode';
;

export default class FormLocation extends Component{
  constructor(){
      super()
        this.state={
            loggedIn:false,
            region:{
                latitude:null,
                longitude:null,
                latitudeDelta:null,
                longitudeDelta:null,
            },
            data:{
                  //date:new Date ()
                  date : moment(new Date()).format("YYYY/MM/DD"),
                  hours : moment(new Date()).format('HH:mm:ss')
            },
            token:""
        }   
  }
    onButtonPress=async (userID) =>{
        let{region,data}=this.state
        const userUid = await AsyncStorage.getItem('userID');
        if(userUid){
            console.log("Existe un usuario",userUid)
            this.setState({token:userUid})
            try{
                getNamePosition(region).then(res=>{
                    console.log(res)
                    if(res.data.status == "OK"){
                        if(Object.keys(region && data)){
                            console.log(this.state.region)
                            console.log(this.state.data)
                            firebase.database().ref('/checador/'+userUid+"/").push({
                                direccion: res.data.results[0].formated_address, // es para convertir las coordenadas a dirección                       
                                latitude: region.latitude,
                                longitude: region.longitude,
                                latitudeDelta: region.latitudeDelta,
                                longitudeDelta: region.longitudeDelta,
                                fecha: data.date,
                                hora: data.hours
                            })
                            Toast.show({ 
                                text: 'Se ha guardado su ubicación correctamente',
                                position: 'bottom',
                                buttonText: 'OK',
                                type: 'success'
                                })
                        }else{
                            console.log("Error al guardar la ubicación")
                            Toast.show({ 
                                text: "Error al guardar la ubicación",
                                position: 'bottom',
                                buttonText: 'OK',
                                type: 'danger'
                                })
                        }
                    }else{// empieza if en caso de que no haya la conversion de las coordenadas, solo va a guardar las coordenadas
                        if(Object.keys(region && data)){
                            console.log(this.state.region)
                            console.log(this.state.data)
                            firebase.database().ref("/checador/"+userUid+"/").push({
                                                
                                latitude: region.latitude,
                                longitude: region.longitude,
                                latitudeDelta: region.latitudeDelta,
                                longitudeDelta: region.longitudeDelta,
                                fecha: data.date,
                                hora: data.hours
                            })
                            Toast.show({ 
                                text: 'Se ha guardado su ubicación correctamente',
                                position: 'bottom',
                                buttonText: 'OK',
                                type: 'success'
                                })
                        }else{
                            console.log("Error al guardar la ubicación")
                            Toast.show({ 
                                text: "Error al guardar la ubicación",
                                position: 'bottom',
                                buttonText: 'OK',
                                type: 'danger'
                                })
                        }
                    }
               }).catch(e=>{console.log("error",e)})
            }catch(error){
                console.log("Fatal error")
                Toast.show({ 
                    text: "No existe ninguna ubicación",
                    position: 'bottom',
                    buttonText: 'OK',
                    type: 'danger'
                    })
            }
    }else{
        console.log("Fatal error 222222")
    }
    }

    calcDelta(lat, lon, accuracy){
        const oneDegreeOfLongitudInMeters = 111.32;
        const circumference = (40075 / 360);

        const latDelta = accuracy * (1 /(Math.cos(lat) * circumference))
        const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)

        this.setState({
            region:{
                latitude: lat,
                longitude: lon,
                latitudeDelta:latDelta,
                longitudeDelta: lonDelta
            }
        })
    }

    componentWillMount(){
        this.getPosition(this.props)
     
    }
    componentWillReceiveProps(nextProps){
        this.getPosition(nextProps)
     
    }

    getPosition=(item)=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                const accuracy = position.coords.accuracy
                this.calcDelta(lat, lon, accuracy)
            }
        )
    }

    marker(){
        return{
            latitude:this.state.region.latitude,
            longitude:this.state.region.longitude
            
        }
    }
   
    render(){
        //esto es para el drawer
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        //aqui termina 
        let {userLog,loggedIn}=this.state
        
       return(
           <Container>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} loggedIn={loggedIn}/>}
                    onClose={this.closeDrawer} >

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80}}
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
                                    "Checador"
                                }
                            </Title>
                        </Body>
                       
                        <Right/>
                    
                    </Header>
            
                    <View style={style4.container} >
                        {this.state.region.latitude ? 
                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={style4.map}
                                initialRegion={this.state.region}
                                // showsUserLocation={true}
                                // followsUserLocation={true}
                            >
                                <MapView.Marker
                                    coordinate={this.marker()}
                                    tittle="¡Estás aquí!"
                                    description="Ubicación"
                                />
                            </MapView>
                            : null
                        }
                    </View>

                    <View>
                    
                    
                        <Card>
                            <ListItem>
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}> 
                                        <Icon active name='location' size={25} style={{marginLeft:12}} />
                                         Ubicación
                                    </Text>
                                    <Text note>¿No has guardado tu ubicación?</Text>
                                </Body>
                                
                            </ListItem>
                        </Card>
                    </View>
                    
                    <View  style={style4.view}>
                        <Button bordered dark onPress={this.onButtonPress} style={style4.boton}>
                       
                            <Text>Checador</Text>
                        </Button>
                    
                    </View>
                
                </Drawer>
                
                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />  
            
            </Container>
        );
    }
}
