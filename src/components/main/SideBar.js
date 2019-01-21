import React, { Component } from 'react';
import { View,Alert,AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text,Body,Title,Left,Thumbnail,Right,Button } from 'native-base';
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

    profile=()=>{
        let {profile}=this.state;
        profile =! profile

        this.setState({profile, location:false, tickets:false, reports:false})
    }
    noUser=()=>{
        const message = 'Si quieres acceder a este apartado';
        Alert.alert(
            '¡Inicia sessión!',
            message,
            [
                {
                    text: 'Ir',
                    onPress:Actions.login
                },
                {
                    text: 'Cancelar',
                    onPress: null
                }
            ]
        )
    }
    location=()=>{
       if (!this.props.logged ){
            this.noUser()
        }else{
            let {location}=this.state;
            location =! location

            this.setState({location, profile:false, tickets:false, reports:false})
        }



    }
    tickets=()=>{
        let {tickets}=this.state;
        tickets =! tickets

        this.setState({tickets, profile:false, reports:false, location:false})
    }
    reports=()=>{
       if (!this.props.logged ){
            this.noUser()
        }else{
            let {reports}=this.state;
            reports=! reports
            this.setState({reports, profile:false, tickets:false, location:false})
        }

    }

    logOut=()=>{
        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("token");
        Actions.login()

    }

    render() {

        let {profile, location, reports, tickets}=this.state;

        return (
            <Container style={{backgroundColor:"rgba(0,0,0,0.8)",flex:1}}>

                    <Header transparent style={{marginBottom:20}}>
                        <Left>
                            <Thumbnail source={logo}/>
                        </Left>
                        <Body>
                            <Title style={stylesM.title}>Transportes Muciño </Title>
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
                                <Icon name={profile? "chevrons-left":"chevrons-right"} />
                            </Right>
                        </ListItem>
                        {profile ?
                            <View style={{backgroundColor:"#555555"}} >
                                <ListItem onPress={()=>Actions.profile()} >
                                    <Text style={{color:'white'}}>Ver Perfil</Text>
                                </ListItem>

                            </View>
                            : null}

                    <ListItem icon onPress={this.location}>
                        <Left>
                            <Icon name="clock-o" style={{color:'white'}}/>
                        </Left>
                        <Body>
                        <Text style={{color:'white'}}>Checador</Text>
                        </Body>
                        <Right>
                            <Icon name={location ? "chevrons-left":"chevrons-right"} />
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
                            <Icon name={tickets ? "chevrons-left":"chevrons-right"} />
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
                            <Icon name={reports ? "chevrons-left":"chevrons-right"} />
                        </Right>
                    </ListItem>
                    {reports ?
                        <View style={{backgroundColor:"#555555"}}>

                            <ListItem onPress={()=>Actions.reports()} >
                                <Text style={{color:'white'}}>Ver reporte</Text>
                            </ListItem>
                        </View>
                        :null
                    }
                </Content>
                <View style={stylesM.boton}>
                    {!this.props.logged ?
                        <Button full bordered light onPress={()=>Actions.login()}>
                            <Text>INICIAR SESIÓN</Text>
                        </Button>
                        :
                        <Button full bordered light onPress={this.logOut}>
                            <Text>CERRAR SESIÓN</Text>
                        </Button>

                    }
                </View>

            </Container>
        );
    }
}

