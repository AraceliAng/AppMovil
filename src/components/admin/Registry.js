import React, { Component } from 'react';
import { View, Image, StatusBar,Platform} from 'react-native';
import { Header, Text, Item, Left, Input, Button, Body,Right, Container, Title, Drawer, Card, CardItem, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles6 from './Styles';
import SideBar from '../main/SideBar';


export default class Registry extends Component{
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
<<<<<<< HEAD

=======
// aquí empieza el codigo de foto e imagenes
>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7
    constructor(props){
        super(props);
        this.state={
            datos:{
                nomb:"",
                num:"",
                area:"",
                pass:"",

                nomProyecto:"",
                vehiculo:"",
                destino:"",
                dias:"",
                
                busca:"",       
            }
        }
    }

    handleChange = (field, value) => {
        let {datos} = this.state;
        datos[field] = value;
        this.setState({datos});
        console.log("hola", datos)
    };
   
    render(){
<<<<<<< HEAD
// para abrr  y cerrar el menú
=======

>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7
        closeDrawer = () => {
            this.drawer._root.close()
        };

        openDrawer = () => {
            this.drawer._root.open()
        };
<<<<<<< HEAD
// hasta aquí abrir y cerrar menú
=======

>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7
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
                                    <Body>
                                        <Item regular style={styles6.inputs}>
                                            {/* <Icon active name='buscar' size={15} style={{marginLeft:12}} /> */}
                                                <Input name='buscar' placeholder='Buscar' style={styles6.textoF} onChange={this.handleChange} />
                                        </Item>
                                    </Body>
                            </CardItem>
                            <CardItem>
                                    <Button full bordered dark  onPress={this.myfun} style={{borderRadius:25, borderColor:'#5F0003'}}>
                                            <Text>Buscar</Text>
                                        </Button>     
                                </CardItem>
                        </Card>

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
                                <Button full bordered dark  onPress={this.myfun} style={{borderRadius:25, borderColor:'#5F0003'}}>
                                        <Text>Guardar</Text>
                                    </Button>    
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
                                <Button full bordered dark  onPress={this.myfun} style={{borderRadius:25, borderColor:'#5F0003'}}>
                                        <Text>Guardar</Text>
                                    </Button>   
                            </CardItem>
                        </Card>

                    </Content>

                </Drawer>

                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" } />
                
            </Container>
        )
    }
}