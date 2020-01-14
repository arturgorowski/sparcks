import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import strings from '../../../localization';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import getFireStationState from '../../../redux/selectors/FireStationSelectors';
import LoadingIndicator from '../../../components/common/LoadingIndicator';
import BoxStyles from 'helpers/BoxStyles';
import ShadowStyles from 'helpers/ShadowStyles';
import Colors from 'helpers/Colors';
import SearchInput, {createFilter} from 'react-native-search-filter';

const KEYS_TO_FILTERS = [
    'name',
    'producent',
    'place',
];

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
        this.state = {
            searchTerm: '',
        };
    }

    searchUpdated(term) {
        this.setState({searchTerm: term});
    }

    convertShortcut = shortcut => {
        switch (shortcut) {
            case 'S':
                return <Text>{strings.S}</Text>;
            case 'T':
                return <Text>{strings.T}</Text>;
            case 'D':
                return <Text>{strings.D}</Text>;
            case 'L1':
                return <Text>{strings.L1}</Text>;
            case 'L2':
                return <Text>{strings.L2}</Text>;
            case 'L3':
                return <Text>{strings.L3}</Text>;
            case 'L4':
                return <Text>{strings.L4}</Text>;
            case 'L5':
                return <Text>{strings.L5}</Text>;
            case 'R1':
                return <Text>{strings.R1}</Text>;
            case 'R2':
                return <Text>{strings.R2}</Text>;
            case 'R3':
                return <Text>{strings.R3}</Text>;
            case 'R4':
                return <Text>{strings.R4}</Text>;
            case 'R5':
                return <Text>{strings.R5}</Text>;
        }
    };

    _renderFireTruckEquipmentsElement = fireTruckEquipments => (
        <View>
            {fireTruckEquipments.map((item, i) => {
                return (
                    <View
                        key={i}
                        style={[BoxStyles.boxContainer, ShadowStyles.shadow, {marginBottom: 15}]}
                    >
                        <View>
                            <View style={styles.fireTruckEquipmentHeader}>
                                <View>
                                    <Text style={[BoxStyles.boxHeaderText, {fontWeight: '700'}]}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={BoxStyles.boxContentTitleText}>
                                        {item.quantity}x
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryPurple}]}>
                                    {item.producent}
                                </Text>
                            </View>
                            <View>
                                <Text style={[BoxStyles.boxContentTitleText, {color: Colors.primaryNavyBlue, textAlign: 'right'}]}>
                                    {this.convertShortcut(item.place)}
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );

    _renderFireTruckEquipments = fireTruckEquipments => {
        {
            if (fireTruckEquipments.length > 0) {
                const filteredFireTruckEquipments = fireTruckEquipments.filter(
                    createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
                );
                return (
                    <View>
                        <SearchInput
                            onChangeText={term => {
                                this.searchUpdated(term);
                            }}
                            style={styles.searchInput}
                            placeholder={strings.searchInputPlaceholder}
                        />
                        {this._renderFireTruckEquipmentsElement(
                            filteredFireTruckEquipments,
                        )}
                    </View>
                );
            } else {
                return (
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{fontSize: 20}}>
                            {strings.noFireTruckEquipment}
                        </Text>
                    </View>
                );
            }
        }
    };

    render() {
        const {fireTruckEquipments} = this.props.navigation.state.params;
        if (fireTruckEquipments) {
            // console.log(fireTruckEquipments);

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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FireTruckDetails);
