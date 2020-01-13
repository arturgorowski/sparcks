import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getInterventionState from '../../redux/selectors/InterventionSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import {getIntervention} from '../../redux/actions/interventions';
import BoxStyles from '../../helpers/BoxStyles';
import ShadowStyles from '../../helpers/ShadowStyles';
import {Divider} from 'react-native-paper';
import Accordion from '@dooboo-ui/native-accordion';
import DropDownStyle from '../../helpers/DropDownStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/Colors';

class Interventions extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.interventions,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
        this.getInterventions();
    }

    getInterventions = () => {
        const {fireStation} = this.props;
        console.log(fireStation);
        if (fireStation) {
            console.log('Firestation id: ', fireStation.id);
            this.props.getIntervention(fireStation.id);
        }
    };

    _renderInterventions = intervention => (
        <ScrollView>
            {intervention.map((item, i) => {
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
                            <View style={styles.dropDownHeader}>
                                <View>
                                    <Text
                                        style={[
                                            DropDownStyle.dropDownTitle,
                                            {fontWeight: '700'},
                                        ]}
                                    >
                                        {item.type} {item.date}
                                    </Text>
                                </View>
                            </View>
                        }
                    >
                        <View>
                            <Divider style={[styles.divider, {marginTop: 0}]} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    {item._address.city} {item._address.street}{' '}
                                    {item._address.number}{' '}
                                    {item._address.zipCode}{' '}
                                    {item._address.postalCode}
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    <Text style={{fontWeight: '700'}}>
                                        {strings.timeOfDeparture}
                                    </Text>
                                    {item.timeOfDeparture}
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    <Text style={{fontWeight: '700'}}>
                                        {strings.arrivalTime}
                                    </Text>
                                    {item.arrivalTime}
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}} />
                            <View>
                                <Text style={[DropDownStyle.dropDownBody, {fontWeight: '700'}]}>
                                    {strings.firefightersOnAction}
                                </Text>
                                {item._firefightersOnActions.map(
                                    firefighter => {
                                        return (
                                            <View style={styles.firefightersOnActionContainer}>
                                                <View>
                                                    <Text style={DropDownStyle.dropDownBody}>
                                                        {firefighter.firstName}{' '}
                                                        {firefighter.lastName}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text style={[DropDownStyle.dropDownBody, {fontSize: 15, color: Colors.primaryPurple}]}>
                                                        {firefighter.function}
                                                    </Text>
                                                </View>
                                            </View>
                                        );
                                    },
                                )}
                            </View>
                            <Divider style={styles.divider} />
                        </View>
                    </Accordion>
                );
            })}
        </ScrollView>
    );

    render() {
        const {intervention} = this.props;
        console.log('interventions: ', intervention);
        if (intervention) {
            return (
                <ScrollView style={styles.container}>
                    <View style={[BoxStyles.boxContainer, ShadowStyles.shadow, {flexDirection: 'column'}]}>
                        <View style={styles.header}>
                            <View>
                                <Text style={BoxStyles.boxHeaderText}>
                                    {strings.interventionsInformation}
                                </Text>
                            </View>
                            <View>
                                <Text style={BoxStyles.boxHeaderText}>
                                    {intervention.length}
                                </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider} />

                        {this._renderInterventions(intervention)}
                    </View>
                </ScrollView>
            );
        }
        return <LoadingIndicator />;
    }
}

Interventions.propTypes = {
    fireStation: PropTypes.object,
    intervention: PropTypes.array,
    navigation: PropTypes.object.isRequired,
    getIntervention: PropTypes.func.isRequired,
};

Interventions.defaultProps = {
    fireStation: null,
    intervention: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
    intervention: getInterventionState(state),
});

const mapDispatchToProps = dispatch => ({
    getIntervention: id => dispatch(getIntervention(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Interventions);
