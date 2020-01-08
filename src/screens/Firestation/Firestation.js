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
import getFirestationState from '../../redux/selectors/FirestationSelectors';
import {getUserFirestation} from '../../redux/actions/firestation';

class Firestation extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firestation,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    constructor(props) {
        super(props);
        this.loggedUserFirestation();
    }

    loggedUserFirestation = () => {
        const {user} = this.props;
        console.log('firestation user', user);
        if (user) {
            console.log('Firestation id: ', user.fireStationId);
            this.props.getUserFirestation(user.fireStationId);
        }
    };

    render() {
        const {firestation} = this.props;
        console.log('Firestation: ', firestation);
        if (firestation) {
            return (
                <View style={styles.container}>
                    <Text style={TextStyles.lightTitle}>
                        {firestation.name}
                    </Text>
                </View>
            );
        }
        return null;
    }

}

Firestation.propTypes = {
    user: PropTypes.object,
    token: PropTypes.object,
    firestation: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getUserFirestation: PropTypes.func.isRequired,
};

Firestation.defaultProps = {
    user: null,
    token: null,
    firestation: null,
};

const mapStateToProps = state => ({
    user: getUserState(state),
    token: getTokenState(state),
    firestation: getFirestationState(state),
});

const mapDispatchToProps = dispatch => ({
    getUserFirestation: (id) => dispatch(getUserFirestation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Firestation);
