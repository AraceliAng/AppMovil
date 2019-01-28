import React from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import MainPage from './src/components/main/MainPage';
import ComponentLogin from './src/components/login/ComponentLogin';
import FormLocation from './src/components/location/FormLocation';
import FormReports from './src/components/reports/FormReports';
import FormTickets from './src/components/tickets/FormTickets';
import ProfileBanner from './src/components/profile/ProfileBanner';
const Routes = () => {
    return (
        <Root>
            <Router>

                <Scene key="root">
{/*se declara una escena con un key que es igual al nombre de la vista 
    ese nombre nos servira para poder navegar con el metodo Actions.nombredevista()
*/ }
                    <Scene key="login" header={null} component={ComponentLogin}  inital />
                    <Scene key="main" header={null} component={MainPage}/>
                    <Scene key="profile" header={null} component={ProfileBanner}  />
                    <Scene key="check" header={null} component={FormLocation} />
                    <Scene key="tickets" header={null} component={FormTickets}/>
                    <Scene key="reports" header={null} component={FormReports}/>
                </Scene>
            </Router>
        </Root>
    );
}
export default Routes;