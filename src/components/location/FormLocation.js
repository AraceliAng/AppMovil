import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Image, Alert, Platform, StatusBar} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import imgLocation from '../../assets/localizador.png';
import SideBar from '../main/SideBar';
import style4 from './Styles';
import MapView from 'react-native-maps'

const {width, height}= Dimensions.get('window')

export default class FormLocation extends Component{
  constructor(){
      super()

      this.state={
            user:{},
            logged:false,
            region={
                latitude:null,
                longitude:null,
                latitudeDelta:null,
                longitudeDelta:null
            },
            
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
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                const accuracy = position.coords.accuracy
                this.calcDelta(lat, lon, accuracy)
            }
        )
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
            
                    <View style={style4.container}>
                        {this.state.region.latitude ? <MapView
                                                        style={style4.map}
                                                        initialRegion={this.state.region}
                                                       /> 
                            : null
                        }
                    </View>
                
                </Drawer>
                
                <StatusBar backgroundColor="#DEDEDE" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            
            </Container>
        );
    }
}

