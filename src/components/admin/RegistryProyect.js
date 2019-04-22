import React, { Component } from 'react';
import { StatusBar,Platform } from 'react-native';
import { List, Toast, Header, Text, Item, Left, Input, Button, Body, Right, Container, Title, Drawer, Card, CardItem, Content, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';
import ModalEmpleados from './ModalEmpleado';

export default class RegistryProyect extends Component{
    constructor(){
        super();
        this.state={
            nomProyecto:'',
            destino:'',
            diasEstimados:'',
            vehiculoAsig:'',      
            userLog:{},
            loggedIn:false,
            data:[],
            empleados:[
                {label:'Empleado...'},
                {label:'empleado 1'},
                {label:'empleado 2'},
                {label:'empleado 3'},
                {label:'empleado 4'},
            ],
            selectedEmpleado:[],
            visibleME:false,
            
        };
    }
   
    onButtonPress=()=>{
        const{  data, selectedEmpleado }= this.state;
        if(Object.keys(data).length >= 3){
            firebase.database().ref('/proyecto/').push({
                nomProyecto: data.nomProyecto,
                destino: data.destino,
                diasEstimados: data.diasEstimados,
                empleado:selectedEmpleado
            })
            Toast.show({ 
                text: 'Datos agregados correctamente ',
                position: 'bottom',
                buttonText: 'OK',
                type: 'success'
                })
        }
        else {
            Toast.show({ 
            text: 'Datos son incorrectos',
            position: 'bottom',
            buttonText: 'OK',
            type: 'danger'
            })
        }
    }
    
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data,nomProyecto,destino,vehiculoAsig,diasEstimados, selectedEmpleado} = this.state
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
        }if(field === 'empleado'){
            selectedEmpleado = value
            this.setState({selectedEmpleado})
        }
        data[field]=value
        this.setState({data})
        console.log('lo que escribo',data)
    }
    openModal=()=>{
        let {visibleME}=this.state
        visibleME =! visibleME
        this.setState({visibleME}) 
    }
    saveEmploys=(data)=>{
        let{selectedEmpleado}=this.state
        selectedEmpleado=data
        this.setState({selectedEmpleado})
    }

    render(){
        closeDrawer = () => {
        this.drawer._root.close()
        };

        openDrawer = () => {
        this.drawer._root.open()
        };
        let {openModal,saveEmploys}=this
        let {userLog,loggedIn, visibleME,selectedEmpleado}=this.state
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
                                {loggedIn ? userLog.username : "Registro de proyectos" }
                            </Title>
                        </Body>

                    </Header>
                        <ModalEmpleados open={visibleME} close={openModal} saveEmploys={saveEmploys}/>
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
                                    <Input 
                                            name='nomProyecto' 
                                            placeholder='Nombre del proyecto'
                                            style={styles6.textoF}  
                                            onChangeText={value=>this.handleChange('nomProyecto',value)}
                                        />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input 
                                            name='destino' 
                                            placeholder='Destino' 
                                            style={styles6.textoF} 
                                            onChangeText={value=>this.handleChange('destino',value)} 
                                        />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input 
                                            name='diasEstimados' 
                                            keyboardType='number-pad'
                                            placeholder='Días estimados' 
                                            style={styles6.textoF} 
                                            onChangeText={value=>this.handleChange('diasEstimados',value)}
                                        />
                                    </Item>
                                </Body>  
                            </CardItem>

                            <CardItem  button onPress={openModal}> 
                                <Body>
                                <Text>
                                    Seleccionar operadores
                                </Text>
                                </Body>     
                            </CardItem>
                            <CardItem > 
                                <Body>
                                    {selectedEmpleado.map((emp,i)=>
                                     <ListItem style={{flexDirection:'column'}}>
                                        <Text>{emp.nombre}</Text>
                                        <Text note >{emp.numEmpleado}</Text>
                                     </ListItem>
                                                                   
                                        )}

                                </Body>     
                            </CardItem>

                            <CardItem>
                            <Button 
                                bordered 
                                dark 
                                style={styles6.boton} 
                                onPress={this.onButtonPress}
                            >
                                    <Text>Registrar</Text>
                                </Button>                            
                            </CardItem>

                        </Card>

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />  

            </Container>
            );
        }//como guardar un arreglo en firebase
    }
