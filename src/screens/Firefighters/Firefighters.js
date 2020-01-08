import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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
        const {firefighters} = this.props;
        console.log('firefighters: ', firefighters);
        if (firefighters) {
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
        return null;
    }

}

Firefighters.propTypes = {
    fireStation: PropTypes.object,
    firefighters: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getFirefighter: PropTypes.func.isRequired,
};

Firefighters.defaultProps = {
    firefighters: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
    firefighters: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({
    getFirefighter: (id) => dispatch(getFirefighter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Firefighters);
