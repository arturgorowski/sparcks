import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from '../../helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getUserState from '../../redux/selectors/UserSelectors';
import getTokenState from '../../redux/selectors/TokenSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import {getUserFirestation} from '../../redux/actions/fireStation';

class FireStation extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firestation,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    constructor(props) {
        super(props);
        this.loggedUserFireStation();
    }

    loggedUserFireStation = () => {
        const {user} = this.props;
        if (user) {
            this.props.getUserFireStation(user.fireStationId);
        }
    };

    render() {
        const {fireStation} = this.props;
        console.log('fireStation: ', fireStation);
        if (fireStation) {
            return (
                <View style={styles.container}>
                    <Text style={TextStyles.lightTitle}>
                        {fireStation.name}
                    </Text>
                </View>
            );
        }
        return null;
    }

}

FireStation.propTypes = {
    user: PropTypes.object,
    token: PropTypes.object,
    fireStation: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getUserFireStation: PropTypes.func.isRequired,
};

FireStation.defaultProps = {
    user: null,
    token: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    user: getUserState(state),
    token: getTokenState(state),
    fireStation: getFireStationState(state),
});

const mapDispatchToProps = dispatch => ({
    getUserFireStation: (id) => dispatch(getUserFirestation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FireStation);
