import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {TouchableRipple} from 'react-native-paper';
import Colors from '../../helpers/Colors';
import DropDownStyle from 'helpers/DropDownStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const ModalAlarmButton = () => (
    <TouchableRipple
        borderless
        style={styles.button}
    >
        <Ionicons
            name="ios-settings"
            size={28}
            color={Colors.primaryDarkBlue}
            style={DropDownStyle.dropDownIcon}
        />
    </TouchableRipple>
);

ModalAlarmButton.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ModalAlarmButton;
