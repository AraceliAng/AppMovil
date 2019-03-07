import React, {Component} from 'react';
import {View, Text, StatusBar,StyleSheet, Platform } from 'react-native';
import { Content, Card,Body, List,Left, Input, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

export default class ProfileContent extends Component {

    render() {
        return (

        <Content>
           <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
        
        <View>
        <List >
        <ListItem itemDivider>
          <Text>Informacion</Text>
        </ListItem>

        <ListItem last style={styles.tamaño} >
        <Left>
         <Text>Nombre</Text>
       </Left>
       <Text style={styles.texto} >{this.props.nombre}</Text>
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Numero de empleado</Text>
         </Left>
          <Input style={styles.texto} disabled value={this.props.numEmpleado} />
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Area</Text>
         </Left>
          <Input style={styles.texto} value={this.props.area} />
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Cargo</Text>
         </Left>
          <Input style={styles.texto} value={this.props.cargo} />
        </ListItem>
        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Email</Text>
         </Left>
          <Input style={styles.texto} value={this.props.email}  />
        </ListItem>
        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>password</Text>
         </Left>
          <Input style={styles.texto} value={this.props.password}  />
        </ListItem>
      </List>
        </View>
        </Content> 
        );
    }
}

const styles = StyleSheet.create({
    view: {
      backgroundColor: 'rgb(0,0,0)',
      opacity: 0.6
    },
    img: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 180
    },
    texto:{
      textAlign:'right'
    },
    tamaño:{
      height:47,
    }
  })

{/*<Container style={stylesP.container}>
 <Header
     style={{ backgroundColor: '#000000' }}
     androidStatusBarColor="black"
 >
     <Left >
         <Button transparent onPress={()=>Actions.pop()}>
             <Icon name='menu' style={{marginRight: 30, fontSize: 20, color:'#DCDCDC'}} />
         </Button>
     </Left>
     <Body>
         <Title style={{color:'#DCDCDC', fontSize: 20}}>Perfil</Title>
     </Body>
     <Right>
         <Button transparent  onPress={this.logOut}>
             <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
         </Button>
     </Right>
 </Header> 
 
 <Content>
     <StatusBar backgroundColor={"#4D4D4D"} barStyle="light-content" />
     <Image source={imgFondo} style={stylesP.img}/>
     <View style={stylesP.view}>
         <View style={stylesP.view}>
             <Image source={imgPerfil} style={stylesP.thub}/>
         </View>
         <H1 style={stylesP.h1}>Nombre operador</H1>
         <Text style={stylesP.text}>correo_operdor@mucino.com</Text>
         <View>
             <Text style={stylesP.texto}>más información del operador</Text>
         </View>
     </View>
     <View>
         <Card>
             <ListItem>
                 <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                 <Body>
                 <Text style={{fontWeight: 'bold'}}>Proyecto</Text>
                 <Text note>descripcion del proyecto</Text>
                 </Body>
             </ListItem>
         </Card>

         <Card>
             <ListItem>
                 <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                 <Body>
                 <Text style={{fontWeight: 'bold'}}>Lugar del proyecto</Text>
                 <Text note>descripcion del lugar</Text>
                 </Body>
             </ListItem>
         </Card>

         <Card>
             <ListItem>
                 <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                 <Body>
                 <Text style={{fontWeight: 'bold'}}>Lugar del proyecto2</Text>
                 <Text note>descripcion del lugar</Text>
                 </Body>
             </ListItem>
         </Card>

         <Card>
             <ListItem>
                 <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                 <Body>
                 <Text style={{fontWeight: 'bold'}}>Lugar del proyecto3</Text>
                 <Text note>descripcion del lugar</Text>
                 </Body>
             </ListItem>
         </Card>

         <Card>
             <ListItem>
                 <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                 <Body>
                 <Text style={{fontWeight: 'bold'}}>Lugar del proyecto4</Text>
                 <Text note>descripcion del lugar</Text>
                 </Body>
             </ListItem>
         </Card>
     </View>
 </Content>
</Container> */}
