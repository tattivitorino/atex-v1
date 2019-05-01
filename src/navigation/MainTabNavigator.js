import React from 'react';
import { 
    createStackNavigator, 
    createBottomTabNavigator
} from 'react-navigation';

import { transitionConfig } from './config';
import material from '../../native-base-theme/variables/material';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Main Tab Stack
import Home from '../screens/main/home';
import Dashboard from '../screens/main/dashboard';
import DashboardDetail from '../screens/main/dashboardDetail';
import Agenda from '../screens/main/agenda';
import AgendaDetail from '../screens/main/agendaDetail';
import Clientes from '../screens/main/clientes';
import Mais from '../screens/main/mais';

const defaultNavigationOptions = {
    header:null,
    headerMode:'screen'
}

const DashboardStackNavigator = createStackNavigator({
    Dashboard:{screen:Dashboard},
    Detail:{screen:DashboardDetail}
},{
    initialRouteName:'Dashboard',
    transitionConfig,
    defaultNavigationOptions
});

const AgendaStackNavigator = createStackNavigator({
    Agenda:{screen:Agenda},
    Detail:{screen:AgendaDetail}
},{
    initialRouteName:'Agenda',
    transitionConfig,
    defaultNavigationOptions
});

const ClientesStackNavigator = createStackNavigator({
    Clientes:{screen:Clientes}
},{
    initialRouteName:'Clientes',
    transitionConfig,
    defaultNavigationOptions
});

const MaisStackNavigator = createStackNavigator({
    Mais:{screen:Mais}
},{
    initialRouteName:'Mais',
    transitionConfig,
    defaultNavigationOptions
});

const MainTabNavigator = createBottomTabNavigator({
    Dashboard:{screen:DashboardStackNavigator},
    Clientes:{screen:ClientesStackNavigator},
    Agenda:{screen:AgendaStackNavigator},
    Mais:{screen:MaisStackNavigator}
}, {
    initialRouteName:'Dashboard',
    defaultNavigationOptions : ({ navigation }) => ({
        tabBarIcon:({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent;
            let iconName;
            if(routeName == 'Dashboard'){
                IconComponent = MaterialIcons;
                iconName = 'dashboard'
            }else if(routeName == 'Agenda'){
                IconComponent = Ionicons;
                iconName = 'md-calendar'
            }else if(routeName == 'Clientes'){
                IconComponent = Ionicons;
                iconName = 'md-person'
            }else if(routeName == 'Mais'){
                IconComponent = Ionicons;
                iconName = 'ios-more'
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />
        }
    }),
    tabBarOptions : {
        activeTintColor: material.brandAtex,
        activeBackgroundColor:'#fff',
        inactiveTintColor: '#000',
        inactiveBackgroundColor:'#fff',
        style:{
            height:60,
            borderTopWidth: 0,           
        },
        labelStyle:{
            fontSize:12,
            marginBottom:5            
        }
    }
});

export default MainTabNavigator;