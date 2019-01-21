import React,{Component} from 'react';
import { StatusBar, Platform } from 'react-native';
import {Container,Content,Header,Left,Right,Body,Title,Button,Icon,Drawer} from 'native-base';


  export default class Menu extends Component{
    ender(){
      closeDrawer = () => {
          this.drawer._root.close()
      };
      openDrawer = () => {
          this.drawer._root.open()
      };

      let {user,logged,modalDetalle,promos}=this.state
      return (
          <Container >

              <Drawer
                  ref={(ref) => { this.drawer = ref; }}
                  content={<SideBar navigator={this.navigator} logged={logged}/>}
                  onClose={this.closeDrawer} >

                  <Header transparent>
                      <Left>
                          <Button transparent onPress={openDrawer}>
                              <Icon name='menu' style={{color:'black'}} />
                          </Button>
                      </Left>
                      <Body>
                          <Title style={{color:'black'}}>
                              {logged ?
                                  user.username :
                                  "Bienvenido"
                              }
                          </Title>
                      </Body>
                      <Right/>
                  </Header>

                  <Content style={{padding:20}}>
                      <DetallePromociones open={modalDetalle} close={this.closeDetalle}/>
                      {promos.map((promo,i)=>
                          <Promociones key={i} open={this.openDetalle} {...promo}/>
                      )}
                  </Content>
              </Drawer>
              <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
          </Container>

      );
  }
}
    