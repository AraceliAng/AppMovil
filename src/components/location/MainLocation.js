import React,{Component} from 'react';
import { StatusBar, Platform, AsyncStorage} from 'react-native';
import {Container,Content,Header,Left,Right,Body,Text,Title,Button,Icon,Drawer} from 'native-base';
import SideBar from '../main/SideBar';
import FormLocation from './FormLocation';


type Props={};

export default class MainLocation extends Component<Props>{
    state={
        user:{},
        logged:false,
    }
    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario",user)
                this.setState({user:user,logged:true})
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            
        }
    }
   
    render(){
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let {user,logged}=this.state
        return (
          <Container >

                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} logged={logged}/>}
                    onClose={this.closeDrawer} >

                    <Header style={{ backgroundColor: '#000000' }}
                    androidStatusBarColor="black">
                        <Left>
                            <Button transparent onPress={openDrawer}>
                                <Icon name='menu' style={{marginRight: 30, fontSize: 30, color:'#DCDCDC'}} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color:'#DCDCDC'}}>
                                {logged ?
                                    user.username :
                                    "Localizador"
                                }
                            </Title>
                        </Body>
                        <Right/>
                    </Header>

                    <Content >
                    <FormLocation  open={this.user} />
                    
                    </Content>
                </Drawer>
                <StatusBar backgroundColor="#efeff4" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>

        );
    }
}