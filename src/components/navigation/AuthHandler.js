import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import getUser from '../../redux/selectors/UserSelectors';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
});

class AuthHandler extends Component {
    constructor(props) {
        super(props);
        this.navigateWithAuth();
    }

    navigateWithAuth = async () => {
        const {user, navigation} = this.props;
        console.log('user - AuthHandler:', user);
        console.log('AuthHandler.js user: ', user !== null);
        console.log('----------------------------');

        if (user !== null) {
            console.log('AuthHandler.js user.firstName === undefined: ', user.firstName === undefined);
            if (user.firstName === undefined) {
                navigation.navigate('Auth');
            } else {
                navigation.navigate('App');
            }
        } else {
            navigation.navigate('Auth');
        }
    };

    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

AuthHandler.propTypes = {
    user: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

AuthHandler.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
});

export default connect(mapStateToProps)(AuthHandler);
