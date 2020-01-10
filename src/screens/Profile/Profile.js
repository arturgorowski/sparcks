import React, {Component} from 'react';
import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import styles from './styles';
import Colors from '../../helpers/Colors';
import ShadowStyles from '../../helpers/ShadowStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Geolocation from '@react-native-community/geolocation';
import IconEntypo from 'react-native-vector-icons/Entypo';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getUserState from '../../redux/selectors/UserSelectors';
import getTokenState from '../../redux/selectors/TokenSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import {getUserFireStation} from '../../redux/actions/fireStation';
import {Divider} from 'react-native-paper';
import Geocoder from 'react-native-geocoding';

class Profile extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.profile,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    state = {
        currentLongitude: 0,
        currentLatitude: 0,
        speed: 0,
        altitude: 0,
        accuracy: 0,
        addressComponent: null,
    };

    componentDidMount = () => {
        this.loggedUserFireStation();
        this.checkPermission();
    };

    componentWillUnmount = () => {
        Geolocation.clearWatch(this.watchID);
    };

    checkPermission = () => {
        const that = this;
        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            this.callLocation(that);
        } else {
            async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert('Permission Denied');
                    }
                } catch (err) {
                    alert('Error, cannot get your location', err);
                    console.warn(err);
                }
            }
            requestLocationPermission();
        }
    };

    callLocation = that => {
        //alert("callLocation Called");
        Geolocation.getCurrentPosition(
            //Will give you the current location
            position => {
                const currentLongitude = JSON.stringify(
                    position.coords.longitude,
                );
                const currentLatitude = JSON.stringify(
                    position.coords.latitude,
                );
                const altitude = JSON.stringify(
                    position.coords.altitude,
                );
                const speed = JSON.stringify(
                    position.coords.speed,
                );
                const accuracy = JSON.stringify(
                    position.coords.accuracy,
                );
                that.setState({currentLongitude: currentLongitude});
                that.setState({currentLatitude: currentLatitude});
                that.setState({altitude: altitude});
                that.setState({speed: speed});
                that.setState({accuracy: accuracy});
                that.getGpsCordinates(currentLatitude, currentLongitude);
            },
            error => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        that.watchID = Geolocation.watchPosition(position => {
            // console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude,);
            const currentLatitude = JSON.stringify(position.coords.latitude,);
            const altitude = JSON.stringify(position.coords.altitude,);
            const speed = JSON.stringify(position.coords.speed,);
            const accuracy = JSON.stringify(position.coords.accuracy,);

            that.setState({currentLongitude: currentLongitude});
            that.setState({currentLatitude: currentLatitude});
            that.setState({altitude: altitude});
            that.setState({speed: speed});
            that.setState({accuracy: accuracy});
            that.getGpsCordinates(currentLatitude, currentLongitude);
        });
    };

    getGpsCordinates = (latitude, longitude) => {
        Geocoder.init('AIzaSyDCFNNy1XyJYSELallp8EeJlhVMDaWqLQ4');

        Geocoder.from({lat: latitude, lng: longitude})
            .then(json => {
                let addressComponent = json.results[0].formatted_address;
                this.setState({addressComponent: addressComponent});
                // console.log('ADRES:', addressComponent);
            })
            .catch(error => console.warn(error));
    };

    loggedUserFireStation = () => {
        const {user} = this.props;
        this.props.getUserFireStation(user.fireStationId);
    };

    render() {
        const {fireStation, user} = this.props;
        // console.log('fireStation: ', fireStation);
        // console.log('user: ', user);
        if (fireStation) {
            return (
                <View style={styles.container}>

                    <View style={[styles.boxContainer, ShadowStyles.shadow]}>
                        <View>
                            <Text style={styles.boxHeaderText}>{strings.firefighterData}</Text>
                        </View>

                        <Divider style={[styles.divider, styles.divider1]} />

                        <View style={styles.userInformationContainer}>
                            <View style={styles.userAvatar}>
                                <IconEntypo name="user" size={45} color={Colors.primaryDarkBlue} />
                            </View>
                            <View style={styles.firefighterInformation}>
                                <Text style={styles.boxHeaderText}>{user.firstName} {user.lastName}</Text>
                                <Text style={styles.boxContentTitleText}>{user.email}</Text>
                                <Text style={styles.boxContentTitleText}>{fireStation.name}</Text>
                                <Text style={styles.boxContentTitleText}>{user.function}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop: 15}} />

                    <View style={[styles.boxContainer, ShadowStyles.shadow]}>
                        <View>
                            <Text style={styles.boxHeaderText}>{strings.currentLocation}</Text>
                        </View>

                        <Divider style={[styles.divider, styles.divider1]} />

                        <View style={styles.location}>
                            <Text style={[styles.boxContentTitleText, styles.row]}>{strings.latitude}:</Text>
                            <Text style={styles.boxContentBodyText}>{this.state.currentLatitude}</Text>
                        </View>

                        <View style={styles.location}>
                            <Text style={[styles.boxContentTitleText, styles.row]}>{strings.longitude}:</Text>
                            <Text style={styles.boxContentBodyText}>{this.state.currentLongitude}</Text>
                        </View>

                        <View style={styles.location}>
                            <Text style={[styles.boxContentTitleText, styles.row]}>{strings.altitude}:</Text>
                            <Text style={styles.boxContentBodyText}>{this.state.altitude} m</Text>
                        </View>

                        <View style={styles.location}>
                            <Text style={[styles.boxContentTitleText, styles.row]}>{strings.speed}:</Text>
                            <Text style={styles.boxContentBodyText}>{this.state.speed} km/h</Text>
                        </View>

                        <View style={styles.location}>
                            <Text style={[styles.boxContentTitleText, styles.row]}>{strings.accuracy}:</Text>
                            <Text style={styles.boxContentBodyText}>{this.state.accuracy} m</Text>
                        </View>

                        <View style={{paddingTop: 25}} />

                        <View style={styles.location}>
                            <Text style={[styles.boxHeaderText, styles.row]}>{strings.address}:</Text>
                        </View>

                        <Divider style={[styles.divider, styles.divider1]} />

                        <View style={styles.location}>
                            <Text style={styles.boxContentBodyText}>{this.state.addressComponent}</Text>
                        </View>
                    </View>
                </View>
            );
        }
        return <LoadingIndicator />;
    }
}

Profile.propTypes = {
    user: PropTypes.object,
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
