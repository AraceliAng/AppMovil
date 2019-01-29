import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, StatusBar,Platform} from 'react-native';
import { Header, Text, Form, Item, Left, Input, Button, Body,Right, Container, Title, Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';

export default class FormTickets extends Component{
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
            <Container >
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
                                {logged ? user.username : "Tickets o Facturas" }
                            </Title>
                        </Body>
                        <Right/>
                    </Header>
            
          
                <Form style={styles6.containerF}>
                    <Item regular style={styles6.inputs}>
                        <Icon active name='edit' size={15} style={{marginLeft:12}} />
                        <Input 
                            name='desc'
                            placeholder='Descripción'
                            style={styles6.textoF}
                            onChangeText={Value=>onChange('desc',Value)}
                        />
                    </Item>
                    <Button full bordered dark  style={{borderRadius:25, borderColor:'#5F0003'}}>
                        <Text>Tomar foto</Text>
                    </Button>
                </Form>
                </Drawer>
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>
        );
    }
}