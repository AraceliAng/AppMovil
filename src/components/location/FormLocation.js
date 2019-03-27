import React, { Component } from 'react';
import { Dimensions, View, Image, Alert, Platform, StatusBar} from 'react-native';
import { Toast, Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import imgLocation from '../../assets/localizador.png';
import SideBar from '../main/SideBar';
import style4 from './Styles';
import MapView ,{ PROVIDER_GOOGLE }from 'react-native-maps';
import firebase from '../../services/firebase/Firebase';

const {width, height}= Dimensions.get('window')

export default class FormLocation extends Component{
  constructor(){
      super()

      this.state={
            user:{},
            logged:false,
            region:{
                latitude:null,
                longitude:null,
                latitudeDelta:null,
                longitudeDelta:null
            },
            miFecha:'',
            data:{},
            
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

    onButtonPress=()=>{
        const{  data }= this.state;
        
        if(Object.keys(data).length >= 3){
            firebase.database().ref('/checador/').push({
                latitude: data.latitude,
                longitude: data.longitude,
                miFecha: data.miFecha,
            })
            Toast.show({ 
                text: 'Datos agregados correctamente ',
                position: 'bottom',
                buttonText: 'OK',
                type: 'success'
                })
        }
        else {
            Toast.show({ 
            text: 'Los datos son incorrectos',
            position: 'bottom',
            buttonText: 'OK',
            type: 'danger'
            })
        }
    }
    
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        miFecha=new Date();
        data[field]=value
        this.setState({data})
        console.log('lo que escribo',data)
    }

    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario",user)
                this.setState({user:user,logged:true})
            } else{
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

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80}}
                            androidStatusBarColor="black">
                    
                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>
                    
                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {logged ?
                                    user.username :
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
                            >
                                <MapView.Marker
                                    coordinate={this.marker()}
                                    tittle="I'm here!"
                                    description="Home"
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
                    
                    <View style={style4.textos}>
                        {/* <Button full bordered dark onPress={() => Alert.alert(
                                    'Tu ubicación es: ',
                                    'se ha guardado correctamente',
                                    [
                                        {text: 'Ok', onPress: () => console.log('Ok')},
                                    ],
                                    { cancel: null }
                                )} style={style4.boton}
                        > */}
                        <Button full bordered dark onPress={this.onButtonPress}>
                            <Text>Checador</Text>
                        </Button>
                    
                    </View>
                
                </Drawer>
                
                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            
            </Container>
        );
    }
}
