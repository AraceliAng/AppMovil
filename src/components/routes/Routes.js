import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ComponentLogin from '../login/ComponentLogin';
import FormLocation from '../location/FormLocation';
import Recovery from '../login/Recovery';


const Routes = () => {
    return (
        <Root>
            <Router>
                <Scene key="root">
                    <Scene key="login" header={null} component={ComponentLogin}  inital />
                    <Scene key="location" header={null} component={FormLocation}/>
                    <Scene key="recover" header={null} component={Recovery}/>
                </Scene>
            </Router>
        </Root>
    );
}
export default Routes;
