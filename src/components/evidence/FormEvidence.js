import React, { Component } from 'react';
import { Image, StatusBar,Platform, AsyncStorage} from 'react-native';
import { Toast, Header, Text, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import RNFetchBlob from 'react-native-fetch-blob';
import 'core-js/es6/symbol'; 
import 'core-js/fn/symbol/iterator';
import Helpers from '../../services/firebase/Helpers';
import firebase from '../../services/firebase/Firebase';
import moment from 'moment';

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
          const imageRef = firebase.storage().ref('evidence').child(imageName)
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
    constructor(props){
        super(props);
       
        this.state={
            data:{
                date : moment(new Date()).format("YYYY/MM/DD"),
                hours : moment(new Date()).format('HH:mm:ss'),
                desc:''
            },
            avatarSource: "",
            pic: "",
            desc:"",
            uid: "",
            userLog:{},
            loggedIn:false,
            source:'',
            token:'',
            
        }
      }

    //   _retrieveData = async () => {
    //     try {
    //         const userLocal = await AsyncStorage.getItem('userLog');
    //         let userLog= JSON.parse(userLocal)
    //         if(userLog){
    //             console.log("hay usuario",userLog)
    //             this.setState({userLog:userLog,loggedIn:true})
    //         } else{
    //             console.log("no hay nada")
    //         }
    //     } catch (error) {   
    //     }
    // }

    // async componentWillMount(){
    //     try{
    //         let user= await firebase.auth().currentUser;
    //         this.setState({                                                                                                                                                                                 
    //             uid: user.uid
    //         })
    //     }catch(error){
    //         console.log("no se tiene usuario", error)
    //     }
    // }

// aquí empieza el codigo de foto e imagenes
    myfun=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                console.log("la imagen",response)
                let source = { uri: response.uri };
                // Tambien se puede poner asi: let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                source:source.uri,
                avatarSource: source,
                pic:response.data
                });
            }
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data,desc} = this.state
        if(field === 'desc'){
            desc = value
            this.setState({desc})
        }
        
        data[field]=value
        this.setState({data})
        console.log('lo que escribo',data)
    }
  
    saveForm =async(userID)=>{
        const userUid = await AsyncStorage.getItem('userID');
        if(userUid){
            console.log(" useruid...................´´´´´.")
                    // if(this.state.uid){
                        try{
                        let {data,source}=this.state 
                            console.log("-----------",data)
                            source ?
                                uploadImage(this.state.source, `${this.state.desc}.jpg`)
                                    .then((responseData) =>{
                                        console.log("que es---------", responseData)
                                        data['url']=responseData
                                        Helpers.setEvidence(userUid, data)
                                        this.setState({data:{},desc:'',responseData:'',response:"",pic:'', uri:"",source:'',avatarSource:''})
                                        Toast.show({text: 'Se ha agregado con éxito', position: 'bottom', type: 'success'})
                                    })
                                    .catch((error)=>{
                                        Toast.show({text: 'Error, no se puede agregar', position: 'bottom', buttonText: 'OK', type: 'danger'})
                                        console.log('No se agrego nada', error)
                                    })
                                    :null
                            console.log("Se agrego con exito")
                            
                        }catch(error){
                            console.log('Fatal error', error)
                            Toast.show({text: 'Error, no se puede agregar', position: 'bottom', buttonText: 'OK', type: 'danger'})
                        }
                    // }else{
                    //     console.log('No hay uid')
                    //         Toast.show({text: 'Error, no hay uid', position: 'bottom', buttonText: 'OK', type: 'danger'})
                    // }
        }
        else{
            console.log("no hay nada de useruid.............")
        }
    }

    render(){

        closeDrawer = () => {
            this.drawer._root.close()
        };

        openDrawer = () => {
            this.drawer._root.open()
        };

        let {userLog,loggedIn}=this.state
        return(

            <Container >

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} loggedIn={loggedIn}/>}
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
                                {loggedIn ? userLog.username : "Evidencias" }
                            </Title>
                        </Body>

                    </Header>

                    <Content>

                        <Card style={styles6.containerF}>

                            <CardItem>
                                <Left>
                                    <Text>Presione el botón para elegir una opción</Text>
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
                                            <Input
                                                name='desc' 
                                                placeholder='Descripción' 
                                                style={styles6.textoF} 
                                                value={this.state.desc}
                                                onChangeText={value=>this.handleChange('desc',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>
                                <Button 
                                    full bordered dark   
                                    style={styles6.boton} 
                                    onPress={this.saveForm}
                                >
                                    <Text>Guardar</Text> 
                                </Button>
                        </Card>

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />  
                
            </Container>
        )
    }
}
