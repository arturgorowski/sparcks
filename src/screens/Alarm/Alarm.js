import React, {Component} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import styles from './styles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import getFirefighterState from '../../redux/selectors/FirefighterSelectors';
import {getFirefighter} from '../../redux/actions/firefighter';
import BoxStyles from 'helpers/BoxStyles';
import ShadowStyles from 'helpers/ShadowStyles';
import {Divider} from 'react-native-paper';
import Accordion from '@dooboo-ui/native-accordion';
import DropDownStyle from 'helpers/DropDownStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'helpers/Colors';

class Alarm extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firefighters,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }
    //
    // state = {
    //     alarm: {
    //
    //     },
    // };

    render() {
        // const {alarm} = this.state;
        // console.log('alarm: ', alarm);
        // if (alarm) {
            return (
                <ScrollView style={styles.container}>
                    <Text>alarm</Text>
                </ScrollView>
            );
        // }
        // return <LoadingIndicator />;
    }
}

Alarm.propTypes = {
    fireStation: PropTypes.object,
    firefighter: PropTypes.array,
    navigation: PropTypes.object.isRequired,
    getFirefighter: PropTypes.func.isRequired,
};

Alarm.defaultProps = {
    firefighter: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
    firefighter: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({
    getFirefighter: id => dispatch(getFirefighter(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Alarm);
