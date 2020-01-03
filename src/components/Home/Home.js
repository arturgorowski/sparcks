import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import {connect} from 'react-redux';
import DrawerMenuButton from '../common/DrawerMenuButton';


class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.home,
        headerLeft: (
            <DrawerMenuButton navigation={navigation} />
        ),
    });


    render() {
        return (
            <View style={styles.container}>
                <Text style={TextStyles.lightTitle}>
                </Text>
                <Text>
                </Text>
            </View>
        );
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
