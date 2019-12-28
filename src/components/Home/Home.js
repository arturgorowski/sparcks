import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import {loggedInUser, actionTypes} from '../../actions/UserActions';

function Home() {

    const user = useSelector(state => getUser(state));

    const dispatch = useDispatch();
    // const loggedUser = useCallback(() => dispatch(loggedInUser(user.id, user.userId)), [access_token, userId, dispatch]);

    // useEffect(() => {
    //     loggedUser();
    // });

    return (
        <View style={styles.container}>
            <Text style={TextStyles.lightTitle}>
            </Text>
            <Text>
            </Text>
        </View>
    );
}

Home.navigationOptions = {
    title: strings.home,
};

export default Home;
