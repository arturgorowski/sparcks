import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';
import Interventions from '../../screens/Interventions';
import Firefighters from '../../screens/Firefighters';
import FireStation from '../../screens/FireStation';
import Hydrants from '../../screens/Hydrants';
import Maps from '../../screens/Maps';
import Profile from '../../screens/Profile';
import FireTruckList from '../../screens/FireTrucks/FireTruckList';
import FireTruckDetails from '../../screens/FireTrucks/FireTruckDetails';
import Colors from '../../helpers/Colors';
import {createDrawerNavigator} from 'react-navigation-drawer';
import strings from '../../localization';

import ProfileIcon from '../../assets/menu/user-profiles.svg';
import FireStationIcon from '../../assets/menu/architecture-and-city.svg';
import FireTruckIcon from '../../assets/menu/transport.svg';
import FirefighterIcon from '../../assets/menu/fireman.svg';
import InterventionIcon from '../../assets/menu/fire-alarm.svg';
import HydrantIcon from '../../assets/menu/hydrant.svg';

const defaultNavigationOptions = {
    headerTintColor: (Platform.OS === 'android') ? Colors.primaryGrey : null,
    headerBackTitle: null,
    headerTitleStyle: {fontSize: 20, color: Colors.primaryGrey},
};

const createCustomStackNavigator = component =>
    createStackNavigator({component}, {defaultNavigationOptions});

const InterventionsStack = createCustomStackNavigator(Interventions);
const FirefightersStack = createCustomStackNavigator(Firefighters);
const FireStationStack = createCustomStackNavigator(FireStation);
const HydrantsStack = createCustomStackNavigator(Hydrants);
const MapsStack = createCustomStackNavigator(Maps);
const ProfileStack = createCustomStackNavigator(Profile);
const FireTruckStack = createStackNavigator(
    {
        FireTruckList,
        FireTruckDetails,
    },
    {defaultNavigationOptions},
);

const AppStack = createDrawerNavigator(
    {
        Profile: {
            navigationOptions: {
                drawerIcon: <ProfileIcon width={32} height={32} />,
                drawerLabel: strings.profile,
            },
            screen: ProfileStack,
        },
        FireStation: {
            navigationOptions: {
                drawerIcon: <FireStationIcon width={32} height={32} />,
                drawerLabel: strings.firestation,
            },
            screen: FireStationStack,
        },
        FireTruck: {
            navigationOptions: {
                drawerIcon: <FireTruckIcon width={35} height={35} />,
                drawerLabel: strings.firetruck,
            },
            screen: FireTruckStack,
        },
        Firefighters: {
            navigationOptions: {
                drawerIcon: <FirefighterIcon width={35} height={35} />,
                drawerLabel: strings.firefighters,
            },
            screen: FirefightersStack,
        },
        Interventions: {
            navigationOptions: {
                drawerIcon: <InterventionIcon width={35} height={35} />,
                drawerLabel: strings.interventions,
            },
            screen: InterventionsStack,
        },
        Hydrants: {
            navigationOptions: {
                drawerIcon: <HydrantIcon width={35} height={35} />,
                drawerLabel: strings.hydrants,
            },
            screen: HydrantsStack,
        },
        Maps: {
            navigationOptions: {
                drawerIcon: <ProfileIcon width={35} height={35} />,
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
