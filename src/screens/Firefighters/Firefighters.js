import React, {Component} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import styles from './styles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import getFirefighterState from '../../redux/selectors/FirefighterSelectors';
import {getFirefighter} from '../../redux/actions/firefighter';
import BoxStyles from 'helpers/BoxStyles';
import ShadowStyles from 'helpers/ShadowStyles';
import {Divider} from 'react-native-paper';
import Accordion from '@dooboo-ui/native-accordion';
import DropDownStyle from 'helpers/DropDownStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'helpers/Colors';

class Firefighters extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firefighters,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getFirefighters();
    }

    getFirefighters = () => {
        const {fireStation} = this.props;
        console.log('firefighter firestation', fireStation);
        if (fireStation) {
            this.props.getFirefighter(fireStation.id);
        }
    };

    makeCall = number => {
        Linking.openURL(`tel:${number}`);
    };

    _renderFirefightersTeam = firefighters => (
        <ScrollView>
            {firefighters.map((item, i) => {
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
                                        {item.firstName} {item.lastName}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={[
                                            DropDownStyle.dropDownTitle,
                                            {fontSize: 15},
                                        ]}
                                    >
                                        {item.function}
                                    </Text>
                                </View>
                            </View>
                        }
                    >
                        <View>
                            <Divider style={[styles.divider, {marginTop: 0}]} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    {item.training}
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    Email: {item.email}
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}} />
                            <View>
                                <Text style={DropDownStyle.dropDownBody}>
                                    {strings.phoneNumber}
                                    <Text style={{fontWeight: '700'}} onPress={() => this.makeCall(item.phoneNumber)}>
                                        {item.phoneNumber}
                                    </Text>
                                </Text>
                            </View>
                            <Divider style={styles.divider} />
                        </View>
                    </Accordion>
                );
            })}
        </ScrollView>
    );

    render() {
        const {firefighter} = this.props;
        console.log('firefighter: ', firefighter);
        if (firefighter) {
            return (
                <ScrollView style={styles.container}>
                    <View
                        style={[
                            BoxStyles.boxContainer,
                            ShadowStyles.shadow,
                            {flexDirection: 'column'},
                        ]}
                    >
                        <View style={styles.header}>
                            <View>
                                <Text style={BoxStyles.boxHeaderText}>
                                    {strings.fireFightersInformation}
                                </Text>
                            </View>
                            <View>
                                <Text style={BoxStyles.boxHeaderText}>
                                    {firefighter.length}
                                </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider} />

                        {this._renderFirefightersTeam(firefighter)}
                    </View>
                </ScrollView>
            );
        }
        return <LoadingIndicator />;
    }
}

Firefighters.propTypes = {
    fireStation: PropTypes.object,
    firefighter: PropTypes.array,
    navigation: PropTypes.object.isRequired,
    getFirefighter: PropTypes.func.isRequired,
};

Firefighters.defaultProps = {
    firefighter: null,
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
    firefighter: getFirefighterState(state),
});

const mapDispatchToProps = dispatch => ({
    getFirefighter: id => dispatch(getFirefighter(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Firefighters);
