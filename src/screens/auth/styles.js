import { StyleSheet, Dimensions } from 'react-native';
import material from '../../../native-base-theme/variables/material';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    card:{
        marginTop:30,
        paddingTop:10
    },
    container:{
        width:'100%'
    },
    item:{
        marginBottom:15
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'center',
    },
    button:{
        margin:20
    },
    text:{
        marginBottom:10,
    },
    errorMessage:{
        marginTop:10,
        marginBottom:10,
        color:material.brandDanger,
        textAlign:'center'
    }
});