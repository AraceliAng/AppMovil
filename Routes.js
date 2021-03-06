import React from 'react';
import {Root} from 'native-base';
import { StyleSheet } from 'react-native';
import {Router, Scene } from 'react-native-router-flux';
import ComponentLogin from './src/components/login/ComponentLogin';
import FormLocation from './src/components/location/FormLocation';
import FormReports from './src/components/reports/FormReports';
import FormEvidence from './src/components/evidence/FormEvidence';
import ProfileBanner from './src/components/profile/ProfileBanner';
import Log from './src/components/login/Log';
import RegistryEmployee from './src/components/admin/RegistryEmployee';
import RegistryProyect from './src/components/admin/RegistryProyect';



const Routes = () => {
    return (
            
        <Root style={stylesR.container}>
            <Router>
                 
                    <Scene key="root">
{/*se declara una escena con un key que es igual al nombre de la vista 
    ese nombre nos servira para poder navegar con el metodo Actions.nombredevista()
*/ }
                     <Scene key="log"                header={null} component={Log} initial/>
                    <Scene key="login"              header={null} component={ComponentLogin} />
                    
                    <Scene key="profile"            header={null} component={ProfileBanner}/>
                    <Scene key="location"           header={null} component={FormLocation}/>
                    <Scene key="evidence"           header={null} component={FormEvidence}/>
                    <Scene key="reports"            header={null} component={FormReports}/> 
                    <Scene key="registryEmployee"   header={null} component={RegistryEmployee}/> 
                    <Scene key="registryProyect"    header={null} component={RegistryProyect}/> 
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