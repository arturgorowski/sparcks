import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    button: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryBlue,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        padding: 5,
        borderRadius: 5,
        color: Colors.white,
    },
});

const Button = props => (
    <TouchableOpacity
        {...props}
        style={[styles.button, props.style]}
    >
        <Text
            style={[TextStyles.fieldTitle, props.textStyle]}
        >
            {props.title}
        </Text>
    </TouchableOpacity>
);

Button.propTypes = {
    style: PropTypes.object,
    textStyle: PropTypes.object,
    title: PropTypes.string,
};

Button.defaultProps = {
    style: null,
    textStyle: null,
    title: '',
};

export default Button;
