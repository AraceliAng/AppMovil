import React, { Component } from 'react';
import { StatusBar,Platform} from 'react-native';
import { Toast, Header, Text, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase, {firebaseAuth} from '../../services/firebase/Firebase';
import {Actions} from 'react-native-router-flux';

export default class Registry extends Component{
	state={
        area:'',
        cargo:'',
        contraseña:'',
        emailE:'',
        nombre: '',
	    numEmpleado:'',
	    loading: false,
        error:'',	    
        nomProyecto:'',
        vehiculoAsig:'',
        diasEstimados:'',
        destino:'',
    };
    

    constructor(props) {
        super(props);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFailed = this.onLoginFailed.bind(this);
    }


    onButtonPress(){
        const{ area, cargo, contraseña, emailE, nombre,  numEmpleado }= this.state;
        //   nomProyecto, vehiculoAsig, diasEstimados, destino
        //this.setState({error: '', loading:true});
        if ( area != null && cargo != null && contraseña != null  && emailE != null && nombre != null  && numEmpleado != null  /**  && nomProyecto != null && vehiculoAsig != null && diasEstimados != null && destino != null  */  ) {
            console.log(this.state.contraseña)
            console.log(this.state.emailE)
            firebaseAuth.createUserWithEmailAndPassword(emailE, contraseña).then(this.onLoginSuccess).catch(this.onLoginFailed);
        }
        else {
            Toast.show({ 
            text: 'Verifique que los datos sean correctos',
            position: 'bottom',
            buttonText: 'OK',
            type: 'danger'
            })
        }
    }
    onLoginFailed() {
        this.setState({error: 'Autenticación Fallida', loading:false});
        Toast.show({ text: 'Verifique los campos',position: 'bottom', buttonText: 'OK', type: 'danger'})
    }

    onLoginSuccess(userLog) {
        var uid = userLog.uid;
        console.log(userLog)
      try{
        firebase.database().ref('/empleado/' + uid +"/").set({
            area: this.state.area,
            cargo: this.state.cargo,
            contraseña: this.state.contraseña,
            emailE: this.state.emailE,
            nombre: this.state.nombre,
            numEmpleado: this.state.numEmpleado,
       });
        this.setState({emailE: '', contraseña: '', error: '', loading: false});
        Toast.show({text: 'Bienvenido', position: 'bottom', duration: 3000, type: 'success'})
      }catch(error){
        console.log(error)
      }
  
    }

    render(){

        closeDrawer = () => {
        this.drawer._root.close()
        };

        openDrawer = () => {
        this.drawer._root.open()
        };

        // let {userLog,loggedIn}=this.state
        return(

            <Container >

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    // loggedIn={loggedIn}
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
                                {/* {loggedIn ? userLog.username : "Registro" } */}
                            </Title>
                        </Body>

                    </Header>

                    <Content>

                        <Card style={styles6.containerF}>

                            <CardItem>
                                <Left>
                                    <Text>OPERADORES</Text>
                                </Left>
                                <Right/>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='area' placeholder='Área' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='cargo' placeholder='Cargo dentro de proyecto' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='contraseña' placeholder='Password' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body> 
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='emailE' placeholder='Correo electrónico' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>                       

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='nombre' placeholder='Nombre completo' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='numEmpleado' placeholder='Número de empleado' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>
                            
                            <CardItem>
                                <Button bordered dark style={styles6.boton} onPress={this.onButtonPress.bind(this)}>
                                    <Text>Registrar</Text>
                                </Button>                           
                            </CardItem>

                        </Card>
                        {/* <Card style={styles6.containerF}>
                            <CardItem>
                                <Left>
                                    <Text>PROYECTOS</Text>
                                </Left>
                                <Right/>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='nomProyecto' placeholder='Nombre del proyecto' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='vehiculoAsig' placeholder='Vehículo asignado' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='destino' placeholder='Destino' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='diasEstimados' placeholder='Número de días' style={styles6.textoF} onChange={this.handleChange} />
                                    </Item>
                                </Body>  
                            </CardItem>

                            <CardItem>
                                <Button full rounded style={styles6.boton} onPress={this.onButtonPress.bind(this)}  >
                                    <Text style={{color:'#FFFFFF'}}>Registrar</Text>
                                </Button>                            
                            </CardItem>

                        </Card> */}

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />

            </Container>
            );
        }
    }