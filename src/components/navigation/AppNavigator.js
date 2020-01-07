import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';
import Alarm from '../../screens/Alarm';
import Firefighters from '../../screens/Firefighters';
import Home from '../../screens/Home';
import Hydrants from '../../screens/Hydrants';
import Maps from '../../screens/Maps';
import Colors from '../../helpers/Colors';
import {createDrawerNavigator} from 'react-navigation-drawer';
import strings from '../../localization';

const defaultNavigationOptions = {
    headerTintColor: (Platform.OS === 'android') ? Colors.primaryGrey : null,
    headerBackTitle: null,
    headerTitleStyle: {fontSize: 20, color: Colors.primaryGrey},
};

const createCustomStackNavigator = component => createStackNavigator(
    {component},
    {defaultNavigationOptions},
);

const AlarmStack = createCustomStackNavigator(Alarm);
const FirefightersStack = createCustomStackNavigator(Firefighters);
const HomeStack = createCustomStackNavigator(Home);
const HydrantsStack = createCustomStackNavigator(Hydrants);
const MapsStack = createCustomStackNavigator(Maps);

const AppStack = createDrawerNavigator(
    {
        Home: {
            navigationOptions: {
                drawerLabel: strings.home,
            },
            screen: HomeStack,
        },
        Alarm: {
            navigationOptions: {
                drawerLabel: strings.alarm,
            },
            screen: AlarmStack,
        },
        Firefighters: {
            navigationOptions: {
                drawerLabel: strings.firefighters,
            },
            screen: FirefightersStack,
        },
        Hydrants: {
            navigationOptions: {
                drawerLabel: strings.hydrants,
            },
            screen: HydrantsStack,
        },
        Maps: {
            navigationOptions: {
                drawerLabel: strings.maps,
            },
            screen: MapsStack,
        },
    },
    {
        contentComponent: Drawer,
        drawerWidth: 300,
        useNativeAnimations: true,
    },
);

export default AppStack;