import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, StatusBar,Platform} from 'react-native';
import { Header, Text, Form, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, ListItem, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import styles6 from './Styles';
import SideBar from '../main/SideBar';

const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  }

export default class FormTickets extends Component{
    // state={
    //     descripcion:{
    //         desc:""
    //     },
    // }

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
// aquí empieza el codigo de foto e imagenes
    constructor(props){
        super(props);
        this.state={
            avatarSource: null,
            pic:null,
            descripcion:{
                desc:""
            },
        }
      }

    myfun=()=>{
      //alert('clicked');
    
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image Picker Error: ', response.error);
        } else {
          let source = { uri: response.uri };
          // Tambien se puede poner asi: let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            avatarSource: source,
            pic:response.data
          });
        }
      });
    }
//aquí termina la parte de fotos    

    handleChange = (field, value) => {
        let {descripcion} = this.state;
        descripcion[field] = value;
        this.setState({descripcion});
        console.log("hola", descripcion)
    };
   
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

                    <Content>
                        <Card style={styles6.containerF}>
                            <CardItem>
                                <Left>
                                    <Text>Precione el botón para elegir una opción</Text>
                                    {/* <Text note>tomar una foto o elegir de la galería</Text> */}
                                </Left>
                                <Right>
                                    <Button full bordered dark  onPress={this.myfun} style={{borderRadius:25, borderColor:'#5F0003'}}>
                                        <Text>Presioname</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={this.state.avatarSource} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Icon active name='edit' size={15} style={{marginLeft:12}} />
                                            <Input name='desc' placeholder='Descripción' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>
                        </Card>
                        <View style={styles6.containerR}>
                            <Button full bordered dark   style={styles6.boton} onPress={() => alert("¿Se ha agregado ?")}>
                                <Text>Guardar</Text> 
                                {/* agregar una condicion con alerta */}
                            </Button>
                        </View>
                    </Content>
                </Drawer>
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />
            </Container>
        )
    }
}