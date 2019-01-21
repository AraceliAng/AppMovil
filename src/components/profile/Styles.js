import { StyleSheet } from 'react-native';

const stylesP = StyleSheet.create({
    thub: {
        margin: 10,
        height: 100,
        width: 100, borderRadius: 30
    },
    title:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textito:{
        color: 'white',
        fontWeight:'bold',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    h1: {
        //marginLeft: 20,
        color: 'black',
        alignSelf: 'center'
    },
    text: {
        //marginLeft: 20,
        color: 'black',
        alignSelf: 'center'
    },
    img: {
        flex: 5,
        height: 200,
        width: null,
        
    },
    container: {
        backgroundColor: 'white'
    },
    view: {
        alignSelf: 'center',
        marginTop: -40,
        justifyContent:'center',
        alignItems:'center'
    },
    orden: {
        alignSelf: 'center',
        margin: 20,
        fontSize: 20
    },
    view2: {
        flexDirection: 'row'
    },
    texto: {
        margin: 10
    },
    img2: {
        height: 200, width: '100%'
    },
    color: {
        color: '#87838B'
    }
});
export default stylesP;