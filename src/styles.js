import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';
import Colors from './helpers/Colors';

export const styles = StyleSheet.create({
    noInternetContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.primaryGrey10,
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    noInternetContent: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.primaryDarkBlue,
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxWidth: 600,
        height: 200,
    },
});

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primaryBlue,
        accent: Colors.primaryOrange,
    },
};
