import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextStyles from '../../../helpers/TextStyles';
import strings from '../../../localization';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import getFireStationState from '../../../redux/selectors/FireStationSelectors';
import LoadingIndicator from '../../../components/common/LoadingIndicator';
import BoxStyles from "helpers/BoxStyles";
import ShadowStyles from "helpers/ShadowStyles";
import Colors from "helpers/Colors";

class FireTruckDetails extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: () => {
            const {name} = navigation.state.params;
            return (
                <View style={styles.headerContainer}>
                    <Text style={styles.headerFireTruck} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
            );
        },
    });

    constructor(props) {
        super(props);
    }

    _renderFireTruckEquipments = fireTruckEquipments => {
        {
            if (fireTruckEquipments.length > 0) {
                return (
                    <View>
                        {fireTruckEquipments.map((item, i) => {
                            return (
                                <View
                                    key={i}
                                    style={[BoxStyles.boxContainer, ShadowStyles.shadow, {marginBottom: 15}]}
                                >
                                    <View style={{width: '90%'}}>
                                        <View style={styles.fireTruckList}>
                                            <View style={{width: '80%'}}>
                                                <Text style={[BoxStyles.boxHeaderText, {fontWeight: '700'}]}>{item.name}</Text>
                                            </View>
                                            <View style={{width: '20%'}}>
                                                <Text style={BoxStyles.boxContentTitleText}>{item.operationalNumber}</Text>
                                            </View>
                                        </View>
                                        <View style={{width: '90%'}}>
                                            <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryPurple}]}>{item.type}</Text>
                                        </View>
                                    </View>
                                    <View style={{width: '10%'}}>

                                    </View>
                                </View>
                            );
                        })}
                    </View>
                );
            } else {
                return (
                    <View>
                        <Text style={BoxStyles.boxContentTitleText}>NIE MA SPRZETU KUWA</Text>
                    </View>
                );
            }
        }
    };

    render() {
        const {fireTruckEquipments} = this.props.navigation.state.params;
        console.log('fireTruckEquipments: ', fireTruckEquipments);
        if (fireTruckEquipments) {
            return (
                <ScrollView style={styles.container}>
                    {this._renderFireTruckEquipments(fireTruckEquipments)}
                </ScrollView>
            );
        }
        return <LoadingIndicator />;
    }
}

FireTruckDetails.propTypes = {
    fireStation: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

FireTruckDetails.defaultProps = {
    fireStation: null,
};

const mapStateToProps = state => ({
    fireStation: getFireStationState(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FireTruckDetails);
