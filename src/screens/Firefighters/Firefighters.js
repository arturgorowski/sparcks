import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from 'components/common/DrawerMenuButton';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import getFirefighterState from '../../redux/selectors/FirefighterSelectors';
import {getFirefighter} from '../../redux/actions/firefighter';

class Firefighters extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firefighters,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    constructor(props) {
        super(props);
        this.getFirefighters();
    }

    getFirefighters = () => {
        const {fireStation} = this.props;
        console.log('firefighter firestation', fireStation);
        if (fireStation) {
            this.props.getFirefighter(fireStation.id);
        }
    };

    render() {
        const {firefighter} = this.props;
        console.log('firefighter: ', firefighter);
        if (firefighter) {
            return (
                <View style={styles.container}>
                    <Text style={TextStyles.lightTitle}>
                        This is Firefighters Screen
                    </Text>
                    <Text>
                    </Text>
                </View>
            );
        }
        return <LoadingIndicator/>;
    }

}

Firefighters.propTypes = {
    fireStation: PropTypes.object,
    firefighter: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getFirefighter: PropTypes.func.isRequired,
};

Firefighters.defaultProps = {
    firefighter: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
    firefighter: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({
    getFirefighter: (id) => dispatch(getFirefighter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Firefighters);
