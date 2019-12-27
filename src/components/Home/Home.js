import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

function Home() {

    const user = useSelector(state => getUser(state));
    console.log('user', user);
    const getName = useCallback(() => `${user && user.firstName}`, [user]);


    return (
        <View style={styles.container}>
            <Text style={TextStyles.lightTitle}>
                {getName()}
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
