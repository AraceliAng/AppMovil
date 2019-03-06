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
	    loading: false,
        error:'',	
        data:{},    
        userLog:{},
        loggedIn:false,
    };
   
    onButtonPress(){
        const{ nomProyecto, destino,diasEstimados, vehiculoAsig, data }= this.state;
        if(Object.keys(data).length >= 4){
            console.log(this.state.nomProyecto)
            console.log(this.state.destino)
            firebase.database().ref('proyecto/' + userId).set({
                nomProyecto: nomProyecto,
                destino: destino,
                diasEstimados: diasEstimados,
                vehiculoAsig: vehiculoAsig
              });
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
    // onFailed=(e)=> {
    //     console.log('el Error: ',e)
    //     this.setState({error: 'Autenticación Fallida', loading:false});
    //     Toast.show({ text: 'Error al ingresar los datos',position: 'bottom', buttonText: 'OK', type: 'danger'})
    // }

    // onSuccess=(data)=> {
        
    //     let{data}=this.state
    //     console.log('------------------------------------',data)
    //   try{
    //     firebase.database().ref('proyecto/' + uid +'/').set({
    //         area: data.area,
    //         cargo: data.cargo,
    //         password: data.password,
    //         email: data.email,
    //         nombre: data.nombre,
    //         numEmpleado: data.numEmpleado
    //    });
    
    //     this.setState({email: '', password: '', error: '', loading: false});
    //     Toast.show({text: 'Se ha agregado con éxito', position: 'bottom', type: 'success'})
    
    //   }catch(error){
    //     console.log(error)
    //   }
  
    //}
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data} = this.state
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
                                <Button full rounded style={styles6.boton} onPress={this.onButtonPress.bind(this)}  >
                                    <Text style={{color:'#FFFFFF'}}>Registrar</Text>
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