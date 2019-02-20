import React, { Component } from 'react';
import { View, Image, StatusBar,Platform} from 'react-native';
import { Header, Text, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import Helpers from '../../services/Helpers';
import firebase from '../../services/Fire';
import RNFetchBlob from 'react-native-fetch-blob';
import 'core-js/es6/symbol'; 
import 'core-js/fn/symbol/iterator';

const options={
    title: 'Elige una opción:',
    takePhotoButtonTitle: 'Tomar  foto con su cámara',
    chooseFromLibraryButtonTitle: 'Elegir una foto de su galería',
  }

  const Blob = RNFetchBlob.polyfill.Blob
  const fs = RNFetchBlob.fs
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
  window.Blob = Blob

  const uploadImage=(uri, imageName, mime='images/jpg')=>{
      return new Promise((resolve, reject)=>{
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://',''): uri
          let uploadBlob = null
          const imageRef = firebase.storage().ref('images').child(imageName)
          fs.readFile(uploadUri,'base64')
            .then((data)=>{
                return Blob.build(data, {type: `${mime};BASE64`})
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, {contentType: mime})
            })
            .then(() =>{
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url)=>{
                resolve(url)
            })
            .catch((error)=>{
                reject(error)
            })
      })
  }

export default class FormEvidence extends Component{
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
            } else{
                console.log("no hay nada")
            }
        } catch (error) {
        }
    }
// aquí empieza el codigo de foto e imagenes
    constructor(props){
        super(props);
        this.state={
            avatarSource: "",
            pic: "",
            descripcion:{
                desc:""
            },
            uid: ""
        }
      }

     async componentWillMount(){
        try{
            let user = await firebase.auth().currentUser ;
            this.setState({
                uid: user.uid
            })
        }catch(error){
            console.log(error)
        }
    }

    myfun=()=>{
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
    
    saveData(){
        if(this.state.uid){
            try{
                this.state.desc ? Helpers.setUserDesc(this.state.uid, this.state.desc): null
                this.state.imagePath ?
                uploadImage(this.state.imagePath, `${this.state.uid}.jpg`)
                    .then((responseData)=>{
                        Helpers.setImageUrl(this.state.uid, responseData)
                    })
                    .done()
                : null
                
                this.props.navigator.push({
                    id:'App'
                })
            }catch(error){
                console.log(error)
            }
        }f
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
                                <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>

                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {logged ? user.username : "Evidencias" }
                            </Title>
                        </Body>

                    </Header>

                    <Content>

                        <Card style={styles6.containerF}>

                            <CardItem>
                                <Left>
                                    <Text>Presione el botón para elegir una opción</Text>
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
                                <Button full bordered dark   style={styles6.boton} onPress={() => alert("¿Se ha agregado ?")}>
                                    <Text>Guardar</Text> 
                                    {/* agregar una condicion con alerta */}
                                </Button>
                        </Card>

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />
                
            </Container>
        )
    }
}