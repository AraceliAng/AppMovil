import React,{Component} from 'react';
import {View, StyleSheet, StatusBar, Platform, AsyncStorage} from 'react-native';
import {Container,Content,Header,Left,Right,Body,Text,Title,Button,Icon,Drawer} from 'native-base';
import SideBar from './SideBar';
import { PageWelcome } from './PageWelcome';


type Props={};

export default class MainPage extends Component<Props>{
    state={
        user:{},
        logged:false,
        // modalDetalle:false,
        // detalle:{},
        // promos:[]
    }

    // componentWillMount(){

    //     this._retrieveData()
    //     getPromo()
    //         .then(r=>{
    //             console.log("que esto",r)
    //             this.setState({promos:r})

    //         }).catch(e=>{
    //         console.log("el error",e)
    //     })
    // }
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
            // Error retrieving data
        }
    }
    // openDetalle = ()=>{
    //     this.setState({modalDetalle:true})

    // }
    // closeDetalle = ()=>{
    //     this.setState({modalDetalle:false,detalle:{}})
    // }


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
                    <PageWelcome  open={this.openDetalle} />
                    
                    </Content>
                </Drawer>
                <StatusBar backgroundColor="rgb(239,239,244)" barStyle={Platform.OS === 'android' ? "dark-content": "default" }  />
            </Container>

        );
    }
}