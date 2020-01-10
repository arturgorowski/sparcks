import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {TouchableRipple} from 'react-native-paper';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 24,
    },
});

const DrawerMenuButton = props => (
    <TouchableRipple
        {...props}
        borderless
        style={styles.button}
        onPress={() => {
            props.navigation.dispatch(DrawerActions.openDrawer());
        }}
    >
        <IconMaterial name="menu" size={28} color={Colors.primaryGrey} />
    </TouchableRipple>
);

DrawerMenuButton.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default DrawerMenuButton;
