import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';
import Home from '../Home';
import Firefighters from '../Firefighters';
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

const HomeStack = createCustomStackNavigator(Home);
const FirefightersStack = createCustomStackNavigator(Firefighters);

const AppStack = createDrawerNavigator(
    {
        Home: {
            navigationOptions: {
                drawerLabel: strings.home,
            },
            screen: HomeStack,
        },
        Firefighters: {
            navigationOptions: {
                drawerLabel: strings.firefighters,
            },
            screen: FirefightersStack,
        },
    },
    {
        contentComponent: Drawer,
        drawerWidth: 300,
        useNativeAnimations: true,
        drawerType: 'slide',
    },
);

export default AppStack;