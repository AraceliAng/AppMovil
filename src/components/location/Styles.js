import { StyleSheet} from 'react-native';

const style4 = StyleSheet.create({
    containerF:{
        padding:10,
    },
    container:{
        padding:10,
        width: 360,
        height: 230,
        
    },
    map:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    img: { 
        flex: 1,
        height: null,
        width: null,
        opacity:0.85
     },
     thub: {
        margin: 20,
        height: 100,
        width: 100, borderRadius: 30
    },
    view: {
        alignSelf: 'center',
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    boton: {
        borderColor:'#5F0003',
        borderRadius:10,
        marginBottom:5,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textos:{
        padding:40,
        justifyContent:'center',
        alignItems:'center',
    },
    
});

export default style4;