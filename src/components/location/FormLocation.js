import React, { Component } from 'react';
import { View, Image, Alert, Platform, StatusBar} from 'react-native';
import { Header, Left, Button, Body,Right, Container, Title, Card, Text, ListItem, Icon, Drawer} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import imgLocation from '../../assets/localizador.png';
import SideBar from '../main/SideBar';
import style4 from './Styles';


type Props={};
export default class FormLocation extends Component <Props>{
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

                    <Header style={{ backgroundColor: '#000000',paddingTop:22, height:80}}
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
                                    "Localizador"
                                }
                            </Title>
                        </Body>
                        <Right/>
                    </Header>
            
                    <View style={style4.view}>
                        <Image source={imgLocation} style={style4.thub}/>
                    </View>
                    <View>
                        <Card>
                            <ListItem>
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>Ubicación</Text>
                                    <Text note>No has checado tu ubicación</Text>
                                </Body>
                            </ListItem>
                        </Card>
                    </View>
                    <View style={style4.textos}>
                        <Button full bordered dark onPress={this.showAlert} style={style4.boton}>
                            <Text>Entrar</Text>
                        </Button>
                    </View>
                </Drawer>
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>
        );
    }
}

