import React from 'react';
import {
    View,
    StyleSheet, ActivityIndicator,
} from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryGrey10,
    },
});

const LoadingIndicator = () => (
    <View style={styles.container}>
        <ActivityIndicator color={Colors.primaryBlue} size="large"/>
    </View>
);


export default LoadingIndicator;
