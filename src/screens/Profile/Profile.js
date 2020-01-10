import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from '../../helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getUserState from '../../redux/selectors/UserSelectors';
import getTokenState from '../../redux/selectors/TokenSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import {getUserFireStation} from '../../redux/actions/fireStation';

class Profile extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.profile,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        const {user} = this.props;
        console.log("user: ", user);
        this.props.getUserFireStation(user.fireStationId);
    }

    //
    // componentDidUpdate() {
    //     if (this.props.fireStation == null) {
    //         this.props.navigation.navigate('Auth');
    //     }
    // }

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
        return <LoadingIndicator />;
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    token: PropTypes.object,
    fireStation: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getUserFireStation: PropTypes.func.isRequired,
};

Profile.defaultProps = {
    // user: null,
    token: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    user: getUserState(state),
    token: getTokenState(state),
    fireStation: getFireStationState(state),
});

const mapDispatchToProps = dispatch => ({
    getUserFireStation: id => dispatch(getUserFireStation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
