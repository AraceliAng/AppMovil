import React from 'react';
import {Root} from 'native-base';
import { StyleSheet } from 'react-native';
import {Router, Scene } from 'react-native-router-flux';
//import MainPage from './src/components/main/MainPage';
import ComponentLogin from './src/components/login/ComponentLogin';
import FormLocation from './src/components/location/FormLocation';
import FormReports from './src/components/reports/FormReports';
import FormEvidence from './src/components/evidence/FormEvidence';
import ProfileBanner from './src/components/profile/ProfileBanner';
import Registry from './src/components/admin/Registry';


const Routes = () => {
    return (
            
        <Root style={stylesR.container}>
            <Router>
                 
                    <Scene key="root">
{/*se declara una escena con un key que es igual al nombre de la vista 
    ese nombre nos servira para poder navegar con el metodo Actions.nombredevista()
*/ }
           
                    <Scene key="login"      header={null} component={ComponentLogin} initial/>
                    {/* <Scene key="main"       header={null} component={MainPage}/> */}
<<<<<<< HEAD
                    <Scene key="profile"    header={null} component={ProfileBanner}/>
=======
>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7
                    <Scene key="location"   header={null} component={FormLocation}/>
                    <Scene key="profile"    header={null} component={ProfileBanner}/>
                    <Scene key="evidence"    header={null} component={FormEvidence}/>
                    <Scene key="reports"    header={null} component={FormReports}/> 
<<<<<<< HEAD
                    <Scene key="registry"    header={null} component={Registry}/>
=======
                    <Scene key="registry"    header={null} component={Registry}/> 
                    
>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7

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