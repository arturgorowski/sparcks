import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import getUser from '../../redux/selectors/UserSelectors';
import getToken from '../../redux/selectors/TokenSelectors';
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
        const {user, navigation, token} = this.props;
        console.log('-------------------------------------------------------AuthHandler.js---------------');
        console.log('user - AuthHandler:', user);
        console.log('token - AuthHandler:', token);
        console.log('AuthHandler.js user !== null: ', user !== null);
        console.log('AuthHandler.js token !== null: ', token !== null);

        if (token !== null) {
            navigation.navigate('App');
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
    token: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

AuthHandler.defaultProps = {
    user: null,
    token: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
    token: getToken(state),
});

export default connect(mapStateToProps)(AuthHandler);
