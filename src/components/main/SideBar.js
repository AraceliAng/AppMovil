import React, { Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text,Body, Left,Thumbnail,Right,Button } from 'native-base';
import logo from '../../assets/m.jpg';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';
import stylesM from './Styles';


export default class SideBar extends Component {
    state={
        main:false,
        profile:false,
        location:false,
        tickets:false,
        reports:false,
    }

    main=()=>{
        let {main}=this.state;
        main =! main

        this.setState({main, profile:false, location:false, tickets:false, reports:false})
    }
    profile=()=>{
        let {profile}=this.state;
        profile =! profile

        this.setState({profile, main:false, location:false, tickets:false, reports:false})
    }
    
    location=()=>{
    //    if (!this.props.logged ){
    //         this.noUser()
    //     }else{
            let {location}=this.state;
            location =! location

            this.setState({location,  main:false, profile:false, tickets:false, reports:false})
    }
    tickets=()=>{
        let {tickets}=this.state;
        tickets =! tickets

        this.setState({tickets, main:false, profile:false, reports:false, location:false})
    }
    reports=()=>{
    //    if (!this.props.logged ){
    //         this.noUser()
    //     }else{
            let {reports}=this.state;
            reports=! reports
            this.setState({reports,  main:false, profile:false, tickets:false, location:false})
        

    }

    logOut=()=>{
        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("token");
        Actions.login()

    }

    render() {

        let { main, profile, location, reports, tickets}=this.state;

        return (
            <Container style={{backgroundColor:"rgba(0,0,0,0.8)",flex:1}}>
                    <Header transparent style={{marginBottom:20}}>
                        <Left style={{flex:1, paddingTop:10 }}>
                            <Thumbnail source={logo}/>
                        </Left>
                        <Body style={{flex:1, alignItems:"center",justifyContent:'center' }}>
                            <Text style={stylesM.title}>Transportes Muciño</Text>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                         <ListItem icon onPress={this.main}>
                            <Left>
                                <Icon name="heart" style={{color:'white', fontSize:30}}/>
                            </Left>
                            <Body>
                                <Text style={{color:'white'}}>Bienvenido</Text>
                            </Body>
                            <Right>
                                {/* <Icon name={main? "angle-double-up":"angle-double-down"} /> */}
                            </Right>
                        </ListItem>
                        {main ?
                            <View style={{backgroundColor:"#555555"}} >
                                <ListItem onPress={()=>Actions.main()} >
                                    <Text style={{color:'white'}}>Ir a principal</Text>
                                </ListItem>

                            </View>
                            : null
                        }
                        <ListItem icon onPress={this.profile}>
                            <Left>
                                <Icon name="user" style={{color:'white', fontSize:30}}/>
                            </Left>
                            <Body>
                                <Text style={{color:'white'}}>Perfil</Text>
                            </Body>
                            <Right>
                                {/* <Icon name={profile? "angle-double-up":"angle-double-down"} /> */}
                            </Right>
                        </ListItem>
                        {profile ?
                            <View style={{backgroundColor:"#555555"}} >
                                <ListItem onPress={()=>Actions.profile()} >
                                    <Text style={{color:'white'}}>Mi perfil</Text>
                                </ListItem>

                            </View>
                            : null
                        }

                    <ListItem icon onPress={this.location}>
                        <Left>
                            <Icon name="location" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Checador</Text>
                        </Body>
                        <Right>
                            {/* <Icon name={location? "angle-double-up":"angle-double-down"} /> */}
                        </Right>
                    </ListItem>
                    {location ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem onPress={()=>Actions.location()} >
                                <Text style={{color:'white'}}>Ir a checador</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                    <ListItem icon onPress={this.tickets}>
                        <Left>
                            <Icon name="camera" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Tickets / facturas</Text>
                        </Body>
                        <Right>
                            {/* <Icon name={tickets? "angle-double-up":"angle-double-down"} /> */}
                        </Right>
                    </ListItem>
                    {tickets ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem onPress={()=> Actions.tickets()}>
                                <Text style={{color:'white'}}>Agregar tickets / facturas</Text>
                            </ListItem>
                        </View>
                        :null
                    }

                    <ListItem icon onPress={this.reports}>
                        <Left>
                            <Icon name="archive" style={{color:'white', fontSize:30}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Reporte</Text>
                        </Body>
                        <Right>
                            {/* <Icon name={reports? "angle-double-up":"angle-double-down"} /> */}
                        </Right>
                    </ListItem>
                    {reports ?
                        <View style={{backgroundColor:"#555555"}}>

                            <ListItem onPress={()=> Actions.reports()} >
                                <Text style={{color:'white'}}> Generar reporte</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                </Content>
                <View style={stylesM.boton}>                                                                                                                                                                                                                                                                                                                                                                        
                        <Button full bordered light onPress={this.logOut}>
                            <Text>CERRAR SESIÓN</Text>
                        </Button>
                </View>

            </Container>
        );
    }
}

