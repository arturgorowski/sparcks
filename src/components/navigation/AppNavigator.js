import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';
import Interventions from '../../screens/Interventions';
import Firefighters from '../../screens/Firefighters';
import FireStation from '../../screens/FireStation';
import Hydrants from '../../screens/Hydrants';
import Maps from '../../screens/Maps';
import Profile from '../../screens/Profile';
import FireTruck from '../../screens/FireTrucks';
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
const FireStationStack = createCustomStackNavigator(FireStation);
const HydrantsStack = createCustomStackNavigator(Hydrants);
const MapsStack = createCustomStackNavigator(Maps);
const ProfileStack = createCustomStackNavigator(Profile);
const FireTruckStack = createCustomStackNavigator(FireTruck);

const AppStack = createDrawerNavigator(
    {
        Profile: {
            navigationOptions: {
                drawerLabel: strings.profile,
            },
            screen: ProfileStack,
        },
        FireStation: {
            navigationOptions: {
                drawerLabel: strings.firestation,
            },
            screen: FireStationStack,
        },
        FireTruck: {
            navigationOptions: {
                drawerLabel: strings.firetruck,
            },
            screen: FireTruckStack,
        },
        Firefighters: {
            navigationOptions: {
                drawerLabel: strings.firefighters,
            },
            screen: FirefightersStack,
        },
        Interventions: {
            navigationOptions: {
                drawerLabel: strings.interventions,
            },
            screen: InterventionsStack,
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
        drawerWidth: 301,
        useNativeAnimations: true,
    },
);

export default AppStack;
