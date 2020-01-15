import React, {Component} from 'react';
import {View, Platform, PermissionsAndroid} from 'react-native';
import styles from './styles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from 'components/common/DrawerMenuButton';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {hydrants} from '../../assets/hydrants';
import Geojson from 'react-native-geojson';

class Hydrants extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.hydrants,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    // getInitialState() {
    //     return {
    //         region: {
    //             latitude: 37.78825,
    //             longitude: -122.4324,
    //             latitudeDelta: 0.0922,
    //             longitudeDelta: 0.0421,
    //         },
    //     };
    // }

    state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    };

    onRegionChange = region => {
        this.setState({region});
    };

    componentDidMount() {
        this.checkPermission();
    }

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
        Geolocation.getCurrentPosition(
            //Will give you the current location
            position => {
                const currentLongitude = JSON.stringify(
                    position.coords.longitude,
                );
                const currentLatitude = JSON.stringify(
                    position.coords.latitude,
                );
                console.log('callLocation: ', currentLatitude);
                console.log('callLocation: ', currentLongitude);
                that.setState({
                    region: {
                        longitude: parseFloat(currentLongitude),
                        latitude: parseFloat(currentLatitude),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    },
                });
                console.log(that.state.region);
                // that.setState({longitude: currentLongitude});
                // that.setState({latitude: currentLatitude});
            },
            error => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        // that.watchID = Geolocation.watchPosition(position => {
        //     const currentLongitude = JSON.stringify(position.coords.longitude);
        //     const currentLatitude = JSON.stringify(position.coords.latitude);
        //     console.log('callLocation: ', currentLatitude);
        //     console.log('callLocation: ', currentLongitude);
        //     that.setState({
        //         region: {
        //             longitude: parseFloat(currentLongitude),
        //             latitude: parseFloat(currentLatitude),
        //             latitudeDelta: 0.0922,
        //             longitudeDelta: 0.0421,
        //         },
        //     });
        //     // that.setState({region: {latitude: currentLatitude}});
        // });
    };



    render() {
        console.log('render: ', this.state.region.latitude);
        console.log('render: ', this.state.region.longitude);
        return (
            <View style={styles.container}>
                <MapView style={styles.map} region={this.state.region}>
                    {/*{hydrants.map(marker => (*/}
                        <Geojson geojson={hydrants} />
                    {/*))}*/}
                </MapView>
            </View>
        );
    }
}

Hydrants.propTypes = {
    user: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    hydrants: PropTypes.array,
};

Hydrants.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Hydrants);
