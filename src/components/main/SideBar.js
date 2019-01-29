import React, { Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text,Body, Left,Thumbnail,Right,Button } from 'native-base';
import logo from '../../assets/m.jpg';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylesM from './Styles';


export default class SideBar extends Component {
    state={
        profile:false,
        location:false,
        tickets:false,
        reports:false,
    }

    welcome=()=>{
        let {welcome}=this.state;
        welcome =! welcome

        this.setState({welcome, profile:false, location:false, tickets:false, reports:false})
    }
    profile=()=>{
        let {profile}=this.state;
        profile =! profile

        this.setState({profile, location:false, tickets:false, reports:false})
    }
    
    location=()=>{
    //    if (!this.props.logged ){
    //         this.noUser()
    //     }else{
            let {location}=this.state;
            location =! location

            this.setState({location,  profile:false, tickets:false, reports:false})
    }
    tickets=()=>{
        let {tickets}=this.state;
        tickets =! tickets

        this.setState({tickets, profile:false, reports:false, location:false})
    }
    reports=()=>{
    //    if (!this.props.logged ){
    //         this.noUser()
    //     }else{
            let {reports}=this.state;
            reports=! reports
            this.setState({reports,  profile:false, tickets:false, location:false})
        

    }

    logOut=()=>{
        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("token");
        Actions.login()

    }

    render() {

        let { profile, location, reports, tickets}=this.state;

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

                        <ListItem icon onPress={this.profile}>
                            <Left>
                                <Icon name="user" style={{color:'white'}}/>
                            </Left>
                            <Body>
                                <Text style={{color:'white'}}>Perfil</Text>
                            </Body>
                            <Right>
                                <Icon name={profile? "chevron-left":"chevron-right"} />
                            </Right>
                        </ListItem>
                        {profile ?
                            <View style={{backgroundColor:"#555555"}} >
                                <ListItem onPress={()=>Actions.profile()} >
                                    <Text style={{color:'white'}}>Ver Perfil</Text>
                                </ListItem>

                            </View>
                            : null
                        }

                    <ListItem icon onPress={this.location}>
                        <Left>
                            <Icon name="clock-o" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Checador</Text>
                        </Body>
                        <Right>
                            <Icon name={location? "chevron-left":"chevron-right"} />
                        </Right>
                    </ListItem>
                    {location ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem onPress={()=>Actions.location()} >
                                <Text style={{color:'white'}}>ir a checador</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                    <ListItem icon onPress={this.tickets}>
                        <Left>
                            <Icon name="file-text" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>tickets</Text>
                        </Body>
                        <Right>
                            <Icon name={tickets? "chevron-left":"chevron-right"} />
                        </Right>
                    </ListItem>
                    {tickets ?
                        <View style={{backgroundColor:"#555555"}}>
                            <ListItem onPress={()=> Actions.tickets()}>
                                <Text style={{color:'white'}}>Agregar fatcura o ticket</Text>
                            </ListItem>
                        </View>
                        :null
                    }

                    <ListItem icon onPress={this.reports}>
                        <Left>
                            <Icon name="list-alt" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Reporte</Text>
                        </Body>
                        <Right>
                            <Icon name={reports? "chevron-left":"chevron-right"} />
                        </Right>
                    </ListItem>
                    {reports ?
                        <View style={{backgroundColor:"#555555"}}>

                            <ListItem onPress={()=> Actions.reports()} >
                                <Text style={{color:'white'}}>Ver reporte</Text>
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

