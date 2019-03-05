import React, { Component } from 'react';
import { StatusBar,Platform } from 'react-native';
import { Toast, Header, Text, Item, Left, Input, Button, Body,Show, Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';
import ReactNativePickerModule from 'react-native-picker-module'
import {Actions} from 'react-native-router-flux';

export default class Registry extends Component{
	state={
        area:'',
        cargo:'',
        password:'',
        email:'',
        nombre: '',
	    numEmpleado:'',
	    loading: false,
        error:'',	    
        nomProyecto:'',
        vehiculoAsig:'',
        diasEstimados:'',
        destino:'',
        // selectedValue: null,
        //     cargo: [
        //         "Lider de proyecto",
        //         "Ayudante",
        //         "Segundo al mando",
        //     ],
        data:{}
    };
    
    

    constructor(props) {
        super(props);
    }


    onButtonPress(){
        const{ area, selectedValue, password, email, nombre,  numEmpleado, data }= this.state;
        //   nomProyecto, vehiculoAsig, diasEstimados, destino
        //this.setState({error: '', loading:true});
        if(Object.keys(data).length >= 6){
        // if ( area != null && cargo != null && password != null  && email != null && nombre != null  && numEmpleado != null  /**  && nomProyecto != null && vehiculoAsig != null && diasEstimados != null && destino != null  */  ) {
            console.log(this.state.password)
            console.log(this.state.email)
            firebase.auth().createUserWithEmailAndPassword(email, password).then(r=>this.onSignupSuccess(r)).catch(e=>this.onSignupFailed(e));
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
    onSignupFailed=(e)=> {
        console.log('el Error: ',e)
        this.setState({error: 'Autenticación Fallida', loading:false});
        Toast.show({ text: 'Error al ingresar los datos',position: 'bottom', buttonText: 'OK', type: 'danger'})
    }

    onSignupSuccess=(userLog)=> {
        var uid = userLog.user.uid;
        let{data}=this.state
        console.log('------------------------------------',userLog)
      try{
        firebase.database().ref('empleado/' + uid +'/').set({
            area: data.area,
            selectedValue: data.selectedValue,
            password: data.password,
            email: data.email,
            nombre: data.nombre,
            numEmpleado: data.numEmpleado
       });
    
        this.setState({email: '', password: '', error: '', loading: false});
        Toast.show({text: 'Bienvenido', position: 'bottom', type: 'success'})
    
      }catch(error){
        console.log(error)
      }
  
    }
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data,email,password} = this.state
        if(field === 'email'){
            email = value
            this.setState({email})
        }
        if(field === 'password'){
            password = value
            this.setState({password})
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
                                        <Input name='nombre' placeholder='Nombre completo' style={styles6.textoF} onChangeText={value=>this.handleChange('nombre',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='numEmpleado' placeholder='Número de empleado' style={styles6.textoF} onChangeText={value=>this.handleChange('numEmpleado',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='area' placeholder='Área' style={styles6.textoF} onChangeText={value=>this.handleChange('area',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='cargo' placeholder='Cargo dentro de proyecto' style={styles6.textoF} onChangeText={value=>this.handleChange('cargo',value)} />
                                    </Item>
                                    {/* <Button bordered dark onPress={() => {this.pickerRef.show()}}>
                                        <Text>Selecciona el cargo dentro del proyecto</Text>
                                    </Button>

                                        <ReactNativePickerModule
                                        pickerRef={e => this.pickerRef = e}
                                        value={this.state.selectedValue}
                                        title={"Selecciona un cargo"}
                                        items={this.state.cargo}
                                        onValueChange={(index) => {
                                            this.setState({
                                            selectedValue: index
                                            })
                                        }}
                                        style={styles6.textoF} 
                                        onChangeText={value=>this.handleChange('selectedValue',value)}  
                                        />
                                        */}
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='email' keyboardType='email-address' placeholder='Correo electrónico' style={styles6.textoF} onChangeText={value=>this.handleChange('email',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>  

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        {/* <Icon active name='edit' size={15} style={{marginLeft:12}} /> */}
                                        <Input name='password' secureTextEntry={true} placeholder='Password' style={styles6.textoF} onChangeText={value=>this.handleChange('password',value)} />
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