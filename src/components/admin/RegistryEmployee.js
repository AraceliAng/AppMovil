import React, { Component } from 'react';
import { StatusBar,Platform } from 'react-native';
import { Picker,Toast, Header, Text, Item, Left, Input, Button, Body, Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';
import firebase from '../../services/firebase/Firebase';

export default class RegistryEmployee extends Component{
	state={
        password:'',
        email:'',
        nombre: '',
        numEmpleado:'',
        telefono:'',
	    loading: false,
        error:'',	    
        userLog:{},
        loggedIn:false,
        data:{},
        areas:[
            {label:'Áreas ...'},
            {label:'Sistemas'},
            {label:'Diseño'},
            {label:'Pesado'},
            {label:'Mantenimiento'},
        ],
        cargos:[
            {label:'Cargos ...'},
            {label:'Jefe de área'},
            {label:'Auxiliar de área'},
            {label:'Personal de apoyo'},
            {label:'Prácticante'},
            {label:'Otro'},
        ],
        selectedCargo:'',
        selectedArea:''
    };
    

    onButtonPress(){
        const{ password, email, data }= this.state;
        
        if(Object.keys(data).length >= 7){
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
        console.log('Usuario: ',userLog)
        try{
            firebase.database().ref('empleado/' + uid +'/').set({
                area: data.area,
                cargo: data.cargo,
                password: data.password,
                email: data.email,
                nombre: data.nombre,
                numEmpleado: data.numEmpleado,
                telefono: data.telefono
                
        });
        this.setState({data:{},uid:'',password:'',email:'',selectedArea:'',selectedCargo:'',telefono:'', error:'', loading:false})
            // this.setState({email: '', password: '', error: '', loading: false});
            Toast.show({text: 'Se ha agregado con éxito', position: 'bottom', type: 'success'})
        
        }catch(error){
            console.log(error)
        }
    
    }
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {data,email,password,selectedCargo,selectedArea} = this.state
        if(field === 'email'){
            email = value
            this.setState({email})
        }
        if(field === 'password'){
            password = value
            this.setState({password})
        }   
        if(field === 'cargo'){
            selectedCargo=value
            this.setState({selectedCargo})
        }if(field === 'area'){
            selectedArea = value
            this.setState({selectedArea})
        }
        if(field === 'telefono'){
            telefono = value
            this.setState({telefono})
        }
        data[field]=value
        this.setState({data})
        console.log('Lo que se está escribiendo',data)

    }

    render(){

        closeDrawer = () => {
        this.drawer._root.close()
        };

        openDrawer = () => {
        this.drawer._root.open()
        };
        let {userLog,loggedIn,cargos,areas}=this.state
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
                                {loggedIn ? userLog.username : "Registro de operadores" }
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
                                        <Input name='nombre' placeholder='Nombre completo' style={styles6.textoF} onChangeText={value=>this.handleChange('nombre',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='numEmpleado' keyboardType='number-pad' placeholder='Número de empleado' style={styles6.textoF} onChangeText={value=>this.handleChange('numEmpleado',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Picker
                                        note
                                        mode="dropdown"
                                        style={{width:'100%'}}
                                        selectedValue={this.state.selectedArea}
                                        onValueChange={value=>this.handleChange('area',value)}
                                        >
                                        {areas.map((area,i)=> <Picker.Item label={area.label} value={area.label} key={i}/> )}

                                    </Picker>
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{width:'100%'}}
                                        selectedValue={this.state.selectedCargo}
                                        onValueChange={value=>this.handleChange('cargo',value)}
                                        >
                                        {cargos.map((cargo,i)=> <Picker.Item label={cargo.label} value={cargo.label} key={i}/> )}

                                    </Picker>
                                    {/* <Item regular style={styles6.inputs}>
                                        <Input name='cargo' placeholder='Cargo dentro del proyecto' style={styles6.textoF} onChangeText={value=>this.handleChange('cargo',value)} />
                                    </Item> */}
                                </Body>     
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='email' keyboardType='email-address' placeholder='Correo electrónico' style={styles6.textoF} onChangeText={value=>this.handleChange('email',value)} />
                                    </Item>
                                </Body>     
                            </CardItem>  

                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='password' secureTextEntry={true} placeholder='Password' style={styles6.textoF} onChangeText={value=>this.handleChange('password',value)} />
                                    </Item>
                                </Body> 
                            </CardItem>      
                            
                            <CardItem>
                                <Body>
                                    <Item regular style={styles6.inputs}>
                                        <Input name='telefono' keyboardType='phone-pad' placeholder='Número de teléfono' style={styles6.textoF} onChangeText={value=>this.handleChange('telefono',value)} />
                                    </Item>
                                </Body> 
                            </CardItem>      

                            <CardItem>
                                <Button bordered dark style={styles6.boton} onPress={this.onButtonPress.bind(this)}>
                                    <Text>Registrar</Text>
                                </Button>                           
                            </CardItem>

                        </Card>
                      
                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#000000" barStyle={Platform.OS === 'android' ? "light-content": "default" }  />  

            </Container>
            );
        }
    }