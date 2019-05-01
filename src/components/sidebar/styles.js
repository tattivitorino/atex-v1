import { StyleSheet, Dimensions, Platform } from 'react-native';
import material from '../../../native-base-theme/variables/material';
const {width, height} = Dimensions.get('window');
const sidebarWidth = width * 0.8;

const styles = StyleSheet.create({
    drawerContent:{
        flex:1, 
        backgroundColor:'#FFF', 
        paddingVertical:15,
        top:-1
    },
    drawerHeader:{
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor:'#ededed',
        height:height*0.2,
        borderBottomColor:"#ededed",
        borderBottomWidth:1,
        shadowOffset: {width:0, height:2},
        shadowColor: '#000',
        shadowOpacity: .1,
        shadowRadius: 1.2,
        elevation: 3
    },
    drawerHeaderImage:{},
    drawerFooter:{
        backgroundColor:'#ededed',
        flexDirection:'column',
        alignItems: 'center',        
    },
    drawerFooterText:{
        fontSize:12,
    },
    text: {
        fontWeight: Platform.OS === 'ios' ? '500' : '400',
        fontSize: 16,
        marginLeft: 20
    },
    list:{
        
    },
    item:{
        marginLeft:10,
        marginBottom:5,
        height:50,
        borderLeftColor:'transparent',
        borderLeftWidth: 2,
    },
    itemActive:{
        borderLeftColor:material.brandAtex,
        borderLeftWidth: 2,
    },
    itemIcon:{
        fontSize:30, 
        color:material.brandAtex,
    },    
    itemText:{
        color:material.brandMedium,  
        fontSize:16,
        marginLeft:5      
    },
    itemTextActive:{
        color:material.black
    },
    borderBottomTest:{
        borderBottomColor:"#000",
        borderBottomWidth: 1,
    }
});

export default styles;