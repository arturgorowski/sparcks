import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginVertical: 10,
    },
    line: {
        backgroundColor: Colors.gray,
        marginTop: 2,
        height: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
    field: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        borderRadius: 7,
        borderWidth: 0.1,
        borderColor: '#838c99',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },
});

const TextField = props => (
    <View style={styles.container}>
        <TextInput
            {...props}
            style={[TextStyles.textField, styles.field, props.style]}
            underlineColorAndroid="transparent"
        />
    </View>
);

TextField.propTypes = {
    style: PropTypes.object,
};

TextField.defaultProps = {
    style: null,
};

export default TextField;
