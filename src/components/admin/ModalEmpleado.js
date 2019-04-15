import React, {Component} from 'react'
import {Modal, TouchableHighlight, View, TouchableOpacity} from 'react-native';
import { Input, Text,Item, Content, CheckBox, ListItem, Left, Button, Icon, Body, Right, Thumbnail, Header, Title } from 'native-base';
import imagen from '../../assets/user.png'
import styles6 from './Styles';
import firebase from '../../services/firebase/Firebase'

export default class ModalEmpleados extends Component{
    state={
        empleados:[],
        search:'',
        selectedEmp:[]
    }
    //trae empleados
    getModal = () => {
        try {
                firebase.database().ref('empleado/').once('value',snapshot =>{ 
                    console.log('---------------------------------------------------s',snapshot.val()) 
                    console.log('arreglo',Object.values(snapshot.val()))
                    let empleados = Object.values(snapshot.val())
                    this.setState({empleados})
                });         
               
        } catch (error) {   
        }
    }

    componentWillMount(){
        this.getModal()
    }

    //una funcion para setarlos
    setEmp=(data)=>{
        let{selectedEmp}=this.state
        selectedEmp.push(data)
        this.setState({selectedEmp})
        console.log('esto es lo que se recibe en data', data)
    }
    //una funcion para guardarlos
    saveEmp=()=>{
        let{saveEmploys,close}=this.props
        let{selectedEmp}=this.state
        console.log('funciono!!!!')
        saveEmploys(selectedEmp)
        close()
        this.setState({search:''})

    }
    //una funcion para borrar
    borrarEmp=(id)=>{
        let {selectedEmp}=this.state
        selectedEmp.splice(id,1)
        this.setState({selectedEmp})
        console.log("borrarrrrrrrrrrrrrrrrrr",id)
    }
    //una funcion para filtrar
    handleChange=(field,value)=>{
        console.log('Antes',field,value)
        let {search} = this.state
        search=value
        this.setState({search})
        console.log('lo que escribo',search)
    }
    render(){
        let{close,open}=this.props
        //cosas del state
        let{empleados, search,selectedEmp}=this.state
        //funciones
        let{setEmp,borrarEmp,saveEmp}=this
        return(

        <Modal
          animationType="slide"
          transparent={false}
          visible={open}
          onRequestClose={() => {
            close()
            this.setState({search:''})
          }}>
            <Header style={{ backgroundColor: '#000000'}}
                            androidStatusBarColor="black">
                <Left>
                    <Button transparent >
                        <Text>Cancelar</Text>
                    </Button>
                </Left>

                <Body>
                    <Title style={{color:'#DCDCDC'}}>
                                 Empleados
                    </Title>
                </Body>
                <Right>
                <Button transparent onPress={saveEmp} >
                    <Text>Aceptar</Text>
                </Button>
                </Right>
            </Header>
            <Item regular >
                <Input 
                    name='search' 
                    placeholder='Buscar' 
                    style={styles6.inputs}
                    onChangeText={value=>this.handleChange('search',value)} 
                    value={search}
                />
            </Item>
            <View style={{flexDirection:'row'}}>
                {selectedEmp.map((data,i)=>
                <View key={i} style={{position:'relative',justifyContent:'center',alignItems:'center',width:70}}>
                    <TouchableOpacity onPress={()=>borrarEmp(i)} style={{position:'absolute',top:-5,right:10,justifyContent:'center',alignItems:'center',zIndex:999, backgroundColor:'gray', width:20,height:20, borderColor:'#fff', borderWidth:1, borderRadius:50}}>
                        {/* <Icon name='close' size={2} style={{color:'#fff',}}/> */}
                        <Text style={{color:'#fff',fontSize:10}}>X</Text>
                    </TouchableOpacity>
                    <Thumbnail small source={imagen}/>
                    <Text style={{fontSize:12}}>{data.numEmpleado}</Text>
                </View>)}
               
            </View>
            <Content>
            {empleados.filter(emp=> emp.nombre.toLowerCase().includes(search.toLowerCase()) || emp.numEmpleado.toLowerCase().includes(search.toLowerCase()) ).map((empleado, i)=>
            <ListItem onPress={()=>setEmp(empleado)} key={i} disabled={selectedEmp.includes(empleado)?true:false} >
                <Left style={{flexDirection:'column',justifyContent:'flex-start'}}>
                <Text>{empleado.nombre}</Text>
                <Text note>{empleado.numEmpleado}</Text>
                </Left>
                <Right>
                <CheckBox checked={selectedEmp.includes(empleado)?true:false} />
                </Right>
            </ListItem>)}
            </Content>
         
        </Modal>

       
        )
    }
}