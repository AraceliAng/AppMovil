import React, {Component} from 'react';
import {View, Text } from 'react-native';
import { Content, Card,Body, ListItem } from 'native-base';


export default class ContentP extends Component {

    render() {
        return (
        <Content>
            <View>
                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Nombre</Text>
                            <Text note>{this.props.nombre}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Número de empleado</Text>
                            <Text note>{this.props.numEmpleado}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Área de empleado</Text>
                            <Text note>{this.props.area}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Cargo dentro del proyecto</Text>
                            <Text note>{this.props.cargo}</Text>
                        </Body>
                    </ListItem>
                </Card>

                <Card>
                    <ListItem>
                        <Body>
                            <Text style={{fontWeight: 'bold'}}>Correo electrónico</Text>
                            <Text note>{this.props.email}</Text>
                        </Body>
                    </ListItem>
                </Card>               

                </View>
            </Content> 
        );
    }
}
