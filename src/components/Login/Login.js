import React, {useCallback, useEffect, useState} from 'react';
import {
    View,
    Image,
    StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import getUser from '../../selectors/UserSelectors';
import errorsSelector from '../../selectors/ErrorSelectors';
import {isLoadingSelector} from '../../selectors/StatusSelectors';
import strings from '../../localization';
import {login, actionTypes} from '../../actions/UserActions';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(state => getUser(state));
    const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
    const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));

    const dispatch = useDispatch();
    const loginUser = useCallback(() => dispatch(login(email, password)), [email, password, dispatch]);
    const passwordChanged = useCallback(value => setPassword(value), []);
    const emailChanged = useCallback(value => setEmail(value), []);

    useEffect(() => {
        if (user !== null) {
            props.navigation.navigate('App');
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <Image style={styles.logo} source={require('../../assets/logo/sparcks.png')}/>
            <TextField
                placeholder={strings.email}
                onChangeText={emailChanged}
                value={email}
                returnKeyType="next"
            />
            <TextField
                placeholder={strings.password}
                value={password}
                onChangeText={passwordChanged}
                secureTextEntry
                returnKeyType="go"
            />
            <ErrorView errors={errors}/>
            <Button
                onPress={loginUser}
                title={isLoading ? strings.loading : strings.login}
            />
        </View>
    );
}

Login.navigationOptions = {
    header: null,
};

Login.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Login;
