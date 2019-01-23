import React,{Component} from 'react';
import { StatusBar, Platform } from 'react-native';
import {Container,Content,Header,Left,Right,Body,Title,Button } from 'native-base';
import Drawer from 'react-native-drawer';
import SideBar from './SideBar';
import FormLocation from '../location/FormLocation';
import Icon from 'react-native-vector-icons/FontAwesome';


  export default class Menu extends Component{
    state={
        user:{},
        logged:false,
        modalDetalle:false,
        detalle:{},
        // promos:[]
    }

    render(){
      closeDrawer = () => {
          this.drawer._root.close()
      };
      openDrawer = () => {
          this.drawer._root.open()
      };

      let {user,logged }=this.state
      return (
          <Container >
              <Drawer ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} logged={logged}/>}
                    onClose={this.closeDrawer} >
                  
                  
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
                        <Title style={{color:'#DCDCDC', fontSize: 20}}>Reporte</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={this.logOut}>
                            <Text style={{color:'#DCDCDC', fontSize: 17}}>Cerrar sesión</Text>
                        </Button>
                    </Right>
                </Header> 
                  

                  <Content style={{padding:20}}>
                      <FormLocation open={modalDetalle} close={this.closeDetalle}/>
                  </Content>
              </Drawer>
              <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
          </Container>

      );
  }
}
    