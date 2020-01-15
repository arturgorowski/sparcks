import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {TouchableRipple} from 'react-native-paper';
import Colors from '../../helpers/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import modalStyles from '../../assets/styles/modalStyles';


const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 24,
        right: 0,
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 2,
        //width: '10%',
    },
});

const ModalAlarmButton = props => (
    <Modal
        isVisible={props.onPress}
        onBackdropPress={() => props.onDismiss()}
        avoidKeyboard
        useNativeDriver
    >
        <View style={modalStyles.container}>
            <Text style={modalStyles.title}>Pożar</Text>
        </View>
    </Modal>
);

ModalAlarmButton.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ModalAlarmButton;
