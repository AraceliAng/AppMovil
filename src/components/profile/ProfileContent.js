import React, {Component} from 'react';
import {View, Text, StatusBar, Platform } from 'react-native';
import { Content, Card,Body, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

export default class ProfileContent extends Component {

    render() {
        return (

        <Content>
           <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
        
        <View>
            <Card>
                <ListItem>
                    <Icon name="clipboard" style={{marginRight: 30, fontSize: 20}} />
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Proyecto</Text>
                    <Text note>descripción del proyecto</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto2</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto3</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
   
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto4</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
            
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto5</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
            
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto6</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
            
            <Card>
                <ListItem>
                    <Icon name="location" style={{marginRight: 30, fontSize: 20}}/>
                    <Body>
                    <Text style={{fontWeight: 'bold'}}>Lugar del proyecto7</Text>
                    <Text note>descripción del lugar</Text>
                    </Body>
                </ListItem>
            </Card>
        </View>
        </Content> 
        );
    }
}

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
