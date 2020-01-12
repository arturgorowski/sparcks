import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getUserState from '../../redux/selectors/UserSelectors';
import getTokenState from '../../redux/selectors/TokenSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import getFirefighterState from '../../redux/selectors/FirefighterSelectors';
import {getUserFireStation} from '../../redux/actions/fireStation';
import {getFirefighter} from '../../redux/actions/firefighter';
import styles from './styles';
import BoxStyles from '../../helpers/BoxStyles';
import ShadowStyles from '../../helpers/ShadowStyles';
import DropDownStyle from '../../helpers/DropDownStyle';
import {Divider} from 'react-native-paper';
import Accordion from '@dooboo-ui/native-accordion';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/Colors';

class FireStation extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firestation,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loggedUserFireStation();
        this.getFirefighters();
    }

    loggedUserFireStation = () => {
        const {user} = this.props;
        if (user) {
            this.props.getUserFireStation(user.fireStationId);
        }
    };

    getFirefighters = () => {
        const {fireStation} = this.props;
        // console.log('firefighter firestation', fireStation);
        if (fireStation) {
            this.props.getFirefighter(fireStation.id);
        }
    };

    _renderFireStationInformation = (fireStation, firefighter) => (
        <View style={[BoxStyles.boxContainer, ShadowStyles.shadow]}>
            <View>
                <Text style={[BoxStyles.boxHeaderText, styles.fireStationName]}>{fireStation.name}</Text>
            </View>

            <Divider style={styles.divider} />

            <View style={styles.informationContainer}>
                <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.numberOfFirefighters}</Text>
                <Text style={BoxStyles.boxContentBodyText}>{firefighter.length}</Text>
            </View>

            <View style={styles.informationContainer}>
                <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.numberOfFireTrucks}</Text>
                <Text style={BoxStyles.boxContentBodyText}>{fireStation._fireTrucks.length}</Text>
            </View>

            <View style={styles.informationContainer}>
                <Text style={[BoxStyles.boxContentTitleText, styles.row]}>{strings.numberOfInterventions}</Text>
                <Text style={BoxStyles.boxContentBodyText}>{fireStation._interventions.length}</Text>
            </View>
        </View>
    );

    _renderFireStationEquipments = fireStationEquipment => (
        <ScrollView>
            {fireStationEquipment.map((item, i) => {
                return (
                    <Accordion
                        key={i}
                        style={DropDownStyle.dropDownItem}
                        contentVisible={false}
                        invisibleElement={
                            <Ionicons
                                name="ios-arrow-down"
                                size={28}
                                color={Colors.primaryDarkBlue}
                                style={DropDownStyle.dropDownIcon}
                            />
                        }
                        visibleElement={
                            <Ionicons
                                name="ios-arrow-up"
                                size={28}
                                color={Colors.primaryDarkBlue}
                                style={DropDownStyle.dropDownIcon}
                            />
                        }
                        header={
                            <View>
                                <Text style={DropDownStyle.dropDownTitle}>
                                    {item.name}
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.equipmentContainer}>
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    {item.producent} {item.model}
                                </Text>
                            </View>
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    {item.quantity}x
                                </Text>
                            </View>
                        </View>
                    </Accordion>
                );
            })}
        </ScrollView>
    );

    render() {
        const {fireStation, firefighter} = this.props;
        // console.log('fireStation: ', fireStation);
        // console.log('firefighter: ', firefighter);
        if (fireStation) {
            if (firefighter) {
                return (
                    <ScrollView style={styles.container}>
                        {this._renderFireStationInformation(
                            fireStation,
                            firefighter,
                        )}

                        <View style={{paddingTop: 15}} />

                        <View style={[BoxStyles.boxContainer, ShadowStyles.shadow, {flexDirection: 'column'}]}>
                            <View>
                                <Text style={BoxStyles.boxHeaderText}>{strings.fireStationEquipmentsData}</Text>
                            </View>

                            <Divider style={styles.divider} />

                            <View>
                                {this._renderFireStationEquipments(
                                    fireStation._fireStationEquipments,
                                )}
                            </View>
                        </View>
                    </ScrollView>
                );
            }
            return <LoadingIndicator />;
        }
        return <LoadingIndicator />;
    }
}

FireStation.propTypes = {
    user: PropTypes.object,
    token: PropTypes.object,
    fireStation: PropTypes.object,
    firefighter: PropTypes.array,
    navigation: PropTypes.object.isRequired,
    getUserFireStation: PropTypes.func.isRequired,
    getFirefighter: PropTypes.func.isRequired,
};

FireStation.defaultProps = {
    user: null,
    token: null,
    fireStation: null,
    firefighter: null,
};

const mapStateToProps = state => ({
    user: getUserState(state),
    token: getTokenState(state),
    fireStation: getFireStationState(state),
    firefighter: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({
    getUserFireStation: id => dispatch(getUserFireStation(id)),
    getFirefighter: id => dispatch(getFirefighter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FireStation);
