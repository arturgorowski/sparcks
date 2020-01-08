import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';
import Interventions from '../../screens/Interventions';
import Firefighters from '../../screens/Firefighters';
import Firestation from '../../screens/Firestation';
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

const InterventionsStack = createCustomStackNavigator(Interventions);
const FirefightersStack = createCustomStackNavigator(Firefighters);
const FirestationStack = createCustomStackNavigator(Firestation);
const HydrantsStack = createCustomStackNavigator(Hydrants);
const MapsStack = createCustomStackNavigator(Maps);

const AppStack = createDrawerNavigator(
    {
        Firestation: {
            navigationOptions: {
                drawerLabel: strings.firestation,
            },
            screen: FirestationStack,
        },
        Interventions: {
            navigationOptions: {
                drawerLabel: strings.interventions,
            },
            screen: InterventionsStack,
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