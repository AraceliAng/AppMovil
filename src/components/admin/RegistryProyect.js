import React, { Component } from 'react';
import { StatusBar,Platform } from 'react-native';
import { Toast, Header, Text, Item, Left, Input, Button, Body,Show, Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';

export default class RegistryProyect extends Component{
	state={
        nomProyecto:'',
        destino:'',
        diasEstimados:'',
        vehiculoAsig:'',    
	    evidenceId:'',
        error:'',	
           
        userLog:{},
        loggedIn:false,
        uid:'',
        data:{}, 
        nuevo:''
    };
   
    onButtonPress=()=>{
        //let nuevo = this.state.data             //------- inserta doble
        let nuevo = this.state.nuevo         //---------------lo va a insertar en blanco

        // if(Object.keys(data).length >= 4){
        //     console.log(this.state.userLog)
        //     console.log(this.state.nomProyecto)
        //     console.log(this.state.destino)
        //     console.log(this.state.diasEstimados)
        //     console.log(this.state.vehiculoAsig)
        // }
        // else {
        //     Toast.show({ 
        //     text: 'Verifique que los datos sean correctos',
        //     position: 'bottom',
        //     buttonText: 'OK',
        //     type: 'danger'
        //     })
        nuevo = {nomProyecto:nuevo,destino:nuevo,diasEstimados:nuevo,vehiculoAsig:nuevo};
        firebase.database().ref('proyecto').push(nuevo);
        // this.state.data.push(nuevo);
        this.setState({data: this.state.data});
        console.log(nuevo)
        
        Toast.show({text: 'Se ha agregado con éxito', position: 'bottom', type: 'success'})
    }
    

    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data,nomProyecto,destino,vehiculoAsig,diasEstimados} = this.state
        if(field === 'nomProyecto'){
            nomProyecto = value
            this.setState({nomProyecto})
        }
        if(field === 'destino'){
            destino = value
            this.setState({destino})
        }
        if(field === 'diasEstimados'){
            diasEstimados = value
            this.setState({diasEstimados})
        }
        if(field === 'vehiculoAsig'){
            vehiculoAsig = value
            this.setState({vehiculoAsig})
        }
        data[field]=value
        this.setState({data})
        console.log('lo que escribo',data)

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
                    content={<SideBar navigator={this.navigator} loggedIn={loggedIn} />}
                    
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
                                {loggedIn ? userLog.username : "Registro de operadores" }
                            </Title>
                        </Body>

                    </Header>

                    <Content>

                        
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
                                        <Input name='nomProyecto' placeholder='Nombre del proyecto' style={styles6.textoF}  onChangeText={value=>this.handleChange('nomProyecto',value)}/>
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='destino' placeholder='Destino' style={styles6.textoF} onChangeText={value=>this.handleChange('destino',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='diasEstimados' placeholder='Número de días' style={styles6.textoF} onChangeText={value=>this.handleChange('diasEstimados',value)}  />
                                    </Item>
                                </Body>  
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='vehiculoAsig' placeholder='Vehículo asignado' style={styles6.textoF} onChangeText={value=>this.handleChange('vehiculoAsig',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                            <Button bordered dark style={styles6.boton} onPress={this.onButtonPress}>
                                    <Text>Registrar</Text>
                                </Button>                            
                            </CardItem>

                        </Card>

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />

            </Container>
            );
        }
    }