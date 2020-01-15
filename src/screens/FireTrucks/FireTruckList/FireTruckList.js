import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../../../helpers/Colors';
import strings from '../../../localization';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from '../../../components/common/DrawerMenuButton';
import getFireStationState from '../../../redux/selectors/FireStationSelectors';
import LoadingIndicator from '../../../components/common/LoadingIndicator';
import BoxStyles from '../../../helpers/BoxStyles';
import ShadowStyles from '../../../helpers/ShadowStyles';
import DropDownStyle from 'helpers/DropDownStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FireTruckList extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.firetruck,
        headerLeft: <DrawerMenuButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);
    }

    _renderFireTruckList = (fireTruck, navigation) => (
        <View>
            {fireTruck.map((item, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        style={[BoxStyles.boxContainer, ShadowStyles.shadow, {marginBottom: 15, display: 'flex', flexDirection: 'row', justifyContent:'space-between'}]}
                        onPress={() => {
                            navigation.navigate('FireTruckDetails', {
                                name: item.name,
                                fireTruckEquipments: item._fireTruckEquipments,
                            });
                        }}
                    >
                        <View>
                            <View style={styles.fireTruckList}>
                                <View style={{width: '70%'}}>
                                    <Text style={[BoxStyles.boxHeaderText, {fontWeight: '700'}]}>{item.name}</Text>
                                </View>
                                <View style={{width: '30%'}}>
                                    <Text style={BoxStyles.boxContentTitleText}>{item.operationalNumber}</Text>
                                </View>
                            </View>
                            <View style={{width: '80%', display: 'flex', flexDirection: 'row'}}>
                                <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryPurple}]}>{item.type}   </Text>
                                <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryPurple}]}>{item.waterCapacity}l / </Text>
                                <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryPurple}]}>{item.pumpCapacity}l/s</Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons
                                name="ios-arrow-forward"
                                size={28}
                                color={Colors.primaryDarkBlue}
                                style={[BoxStyles.dropDownIcon, {right: 15, alignItems: 'center'}]}
                            />
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    render() {
        const {fireStation, navigation} = this.props;
        // console.log('fireStation: ', fireStation);
        if (fireStation) {
            const fireTruck = fireStation._fireTrucks;
            return (
                <ScrollView style={styles.container}>
                    {this._renderFireTruckList(fireTruck, navigation)}
                </ScrollView>
            );
        }
        return <LoadingIndicator />;
    }
}

FireTruckList.propTypes = {
    fireStation: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

FireTruckList.defaultProps = {
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FireTruckList);
