import React, {Component} from 'react';
import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import styles from './styles';
import Colors from '../../helpers/Colors';
import ShadowStyles from '../../helpers/ShadowStyles';
import BoxStyles from '../../helpers/BoxStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {API_KEY} from 'react-native-dotenv';
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
import AvatarFrame from '../../assets/avatar/avatar_frame.svg';

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
                            title: strings.permissionTitle,
                            message: strings.permissionMessage,
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert(strings.permissionDenied);
                    }
                } catch (err) {
                    alert(strings.permissionError, err);
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
        Geocoder.init(API_KEY);

        Geocoder.from({lat: latitude, lng: longitude})
            .then(json => {
                let addressComponent = json.results[0].formatted_address;
                this.setState({addressComponent: addressComponent});
                console.log('ADRES:', addressComponent);
            })
            .catch(error => console.warn(error));
    };

    loggedUserFireStation = () => {
        const {user} = this.props;
        this.props.getUserFireStation(user.fireStationId);
    };

    render() {
        const {fireStation, user} = this.props;
        console.log('fireStation: ', fireStation);
        console.log('user: ', user);
        if (fireStation) {
            return (
                <View style={styles.container}>

                    <View style={[BoxStyles.boxContainer, ShadowStyles.shadow]}>
                        {/*<View>*/}
                        {/*    <Text style={BoxStyles.boxHeaderText}>{strings.firefighterData}</Text>*/}
                        {/*</View>*/}

                        {/*<Divider style={styles.divider} />*/}

                        <View style={styles.informationContainer}>
                            <View style={styles.avatarContainer}>
                                <AvatarFrame style={styles.avatarFrame} />
                                <View style={styles.noAvatar}>
                                    <IconEntypo name="user" size={45} color={Colors.primaryWhite} />
                                </View>
                            </View>
                            <View style={styles.firefighterInformation}>
                                <Text style={BoxStyles.boxHeaderText}>{user.firstName} {user.lastName}</Text>
                                <Text style={BoxStyles.boxContentTitleText}>{user.email}</Text>
                                <Text style={BoxStyles.boxContentTitleText}>{fireStation.name}</Text>
                                <Text style={BoxStyles.boxContentTitleText}>{user.function}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop: 15}} />

                    <View style={[BoxStyles.boxContainer, ShadowStyles.shadow]}>
                        <View>
                            <Text style={BoxStyles.boxHeaderText}>{strings.currentLocation}</Text>
                        </View>

                        <Divider style={[styles.divider, styles.divider1]} />

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.latitude}:</Text>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.currentLatitude}</Text>
                        </View>

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.longitude}:</Text>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.currentLongitude}</Text>
                        </View>

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.altitude}:</Text>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.altitude} m</Text>
                        </View>

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.speed}:</Text>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.speed} km/h</Text>
                        </View>

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.accuracy}:</Text>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.accuracy} m</Text>
                        </View>

                        <View style={{paddingTop: 25}} />

                        <View style={styles.informationContainer}>
                            <Text style={[BoxStyles.boxHeaderText, styles.row]}>{strings.address}:</Text>
                        </View>

                        <Divider style={[styles.divider, styles.divider1]} />

                        <View style={styles.informationContainer}>
                            <Text style={BoxStyles.boxContentBodyText}>{this.state.addressComponent}</Text>
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
