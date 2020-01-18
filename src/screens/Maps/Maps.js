import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from 'components/common/DrawerMenuButton';
import getFirefighterState from '../../redux/selectors/FirefighterSelectors';
import MapView from 'react-native-maps';

class Maps extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.maps,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    state = {
        region: {
            latitude: 49.8959501,
            longitude: 21.0510985,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    };

    handleMarkerPress = () => {
        // const markerID = event.nativeEvent.id;
        // console.log('WHAT', markerID);
        //console.log('WHAT');
    };

    _renderFirefighterLocation = locations => (
        <View>
            {locations.map((location, index) => {
                const cords = {
                    longitude: location.location[0],
                    latitude: location.location[1],
                };
                // console.log(cords);
                // console.log(location);
                return (
                    <MapView.Marker
                        key={index}
                        coordinate={cords}
                        // title={location.firstName}
                        //pinColor={'red'}
                        // icon={circle}
                        // onPress={() => this.handleMarkerPress()}
                        // onCalloutPress={() => this.handleMarkerPress()}
                    >
                        <MapView.Callout width={120} height={40}>
                            <TouchableOpacity
                                underlayColor="transparent"
                            >
                                <Text>{location.firstName} {location.lastName}</Text>
                            </TouchableOpacity>
                        </MapView.Callout>
                    </MapView.Marker>
                );
            })}
        </View>
    );

    render() {
        const {firefighter} = this.props;
        // console.log(firefighter);
        // console.log(this.state.cords);
        {
            if (firefighter) {
                return (
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            region={this.state.region}
                            minZoomLevel={17}
                        >
                            {this._renderFirefighterLocation(firefighter)}
                        </MapView>
                    </View>
                );
            }
        }
        return <LoadingIndicator />;
    }
}

Maps.propTypes = {
    user: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    firefighter: PropTypes.array,
};

Maps.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({
    firefighter: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Maps);
