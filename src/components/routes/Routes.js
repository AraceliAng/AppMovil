import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Recovery from './src/components/login/Recovery'
import ComponentLogin from '../login/ComponentLogin';
import FormLocation from '../location/FormLocation';


const Routes = () => {
    return (
        <Root>
            <Router>
                <Scene key="root">
                    <Scene key="login" header={null} component={ComponentLogin}  inital />
                    <Scene key="location" header={null} component={FormLocation}/>
                    <Scene key="recovery" header={null} component={Recovery}/>
                </Scene>
            </Router>
        </Root>
    );
}
export default Routes;
