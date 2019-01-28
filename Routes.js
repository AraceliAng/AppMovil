import React from 'react';
import {Root} from 'native-base';
import { StyleSheet } from 'react-native';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import MainPage from './src/components/main/MainPage';
import ComponentLogin from './src/components/login/ComponentLogin';
import FormLocation from './src/components/location/FormLocation';
import FormReports from './src/components/reports/FormReports';
import FormTickets from './src/components/tickets/FormTickets';
import ProfileBanner from './src/components/profile/ProfileBanner';
const Routes = () => {
    return (
            
        <Root style={stylesR.container}>
            <Router>
                 
                    <Scene key="root">
{/*se declara una escena con un key que es igual al nombre de la vista 
    ese nombre nos servira para poder navegar con el metodo Actions.nombredevista()
*/ }
           
                    <Scene key="login"      header={null} component={ComponentLogin} initial/>
                    <Scene key="main"       header={null} component={MainPage}/>
                    <Scene key="profile"    header={null} component={ProfileBanner}  />
                    <Scene key="location"   header={null} component={FormLocation} />
                    <Scene key="tickets"    header={null} component={FormTickets}/>
                    <Scene key="reports"    header={null} component={FormReports}/> 

                </Scene>
               
            </Router> 
            
        </Root>
       
    );
}
export default Routes;

const stylesR= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
    },

});