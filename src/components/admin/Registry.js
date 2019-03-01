import React, { Component } from 'react';
import { View, Image, StatusBar,Platform} from 'react-native';
import { Header, Text, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase, {firebaseAuth} from '../../services/firebase/Firebase';
import {Actions} from 'react-native-router-flux';

export default class Registry extends Components{
	state={
        correo:'',
        name: '',
	    noEmp:'',
	    pass:'',
	    passw:'',
	    area:'',
	    cargo:'',
	    loading: false,
        nombrePro:'',
        vehiculo:'',
        proDias:'',
        destino:''
    };
    constructor(props){
        super(props);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFailed= this.onLoginFailed.bind(this);
    }
    onButtonPress(){
        const{name, noEmp, pass, passw, area, cargo,loading, finder,  nombrePro, vehiculo, proDias, destino}= this.state;
        this.setState({error: '', loading:true});
        if (pass == passw && pass != null && passw != null && correo != null && name != null && noEmp != null && area != null && cargo !=null && nombrePro != null && vehiculo != null && proDias != null && destino != null ) {
            console.log(this.state.passw)
            console.log(this.state.pass)
            console.log(this.state.correo)
            firebaseAuth.createUserWithEmailAndPassword(correo,password);
        }
        else {
            Toast.show({ 
            text: 'Llene los campos correctamente',
            position: 'bottom',
            buttonText: 'OK',
            type: 'danger'
            })
        }
    }
    buttonRegistry(){
        if (this.state.loading) {
            return (
            <Button full rounded style={styles6.boton} onPress={this.onButtonPress.bind(this)}  >
            <Text style={{color:'#FFFFFF'}}>Registrar</Text>
            </Button>
            );
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
                    <Icon name='menu' style={{marginRight: 5, fontSize: 30, color:'#DCDCDC'}} />
                </Button>
            </Left>

            <Body>
                <Title style={{color:'#DCDCDC'}}>
                    {logged ? user.username : "Registro" }
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
                                                <Input name='nomb' placeholder='Nombre completo' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>     
                                </CardItem>

                                <CardItem>
                                    <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='num' placeholder='Número de empleado' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>     
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
    <Input name='pass' placeholder='Password' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body> 
                                </CardItem>

                                <CardItem>
    {this.buttonRegistry() }                                
                                </CardItem>

                            </Card>

                            <Card style={styles6.containerF}>
                                <CardItem>
                                    <Left>
                                        <Text>PROYECTOS</Text>
                                    </Left>
                                    <Right/>
                                </CardItem>

                                <CardItem>
                                    <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='nomProyecto' placeholder='Nombre del proyecto' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>     
                                </CardItem>

                                <CardItem>
                                <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='vehiculo' placeholder='Vehículo asignado' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>     
                                </CardItem>

                                <CardItem>
                                    <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='destino' placeholder='Destino' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>     
                                </CardItem>

                                <CardItem>
                                    <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='dias' placeholder='Número de días' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>  
                                </CardItem>

                            <CardItem>
    {this.buttonRegistry() }                                
                                </CardItem>

                                </Card>

    </Content>

    </Drawer>

    <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />

    </Container>
    )
    }


