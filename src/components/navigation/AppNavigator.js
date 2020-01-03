import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../Drawer';

import Profile from '../Profile';
import Home from '../Home';

import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';
import {createDrawerNavigator} from 'react-navigation-drawer';

// const iconForTab = ({state}) => {
//     switch (state.routeName) {
//         case 'Home':
//             return homeIcon;
//         case 'Profile':
//             return settingsIcon;
//         default:
//             return null;
//     }
// };

const TabIcon = ({icon, tintColor}) => (// eslint-disable-line
    <Image
        source={icon}
        style={{tintColor}}
    />
);

const defaultNavigationOptions = {
  headerTintColor: (Platform.OS === 'android') ? Colors.primaryGrey : null,
  headerBackTitle: null,
  headerTitleStyle: { fontSize: 20, color: Colors.primaryGrey },
};


const createCustomStackNavigator = component => createStackNavigator(
    { component },
    { defaultNavigationOptions },
);
const HomeStack = createCustomStackNavigator(Home);
//const ProfileStack = createCustomStackNavigator(Profile);


// const ProfileStack = createStackNavigator({Profile});
// const HomeStack = createStackNavigator({Home});
// const AppStack = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Profile: ProfileStack,
//   },
//   {
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: Colors.primary,
//       inactiveTintColor: Colors.gray,
//       style: {
//         backgroundColor: Colors.White,
//       },
//     },
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({ tintColor }) => (// eslint-disable-line
//         <TabIcon
//           icon={iconForTab(navigation)}
//           tintColor={tintColor}
//         />
//       ),
//     }),
//   },
// );

const AppStack = createDrawerNavigator(
    {
        Home: {
            navigationOptions: {
                drawerLabel: 'Home',
            },
            screen: HomeStack,
        },
      // Profile: {
      //     navigationOptions: {
      //         drawerLabel: 'Profile',
      //     },
      //     screen: ProfileStack,
      // },

    },
    {
        contentComponent: Drawer,
        drawerWidth: 300,
        useNativeAnimations: true,
    },
);

export default AppStack;
