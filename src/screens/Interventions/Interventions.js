import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from '../../helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/common/LoadingIndicator';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getInterventionState from '../../redux/selectors/InterventionSelectors';
import getFireStationState from '../../redux/selectors/FireStationSelectors';
import {getIntervention} from '../../redux/actions/interventions';

class Interventions extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.interventions,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
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

    render() {
        const {intervention} = this.props;
        console.log('interventions: ', intervention);
        if (intervention) {
            return (
                <View style={styles.container}>
                    <Text style={TextStyles.lightTitle}>
                        This is Intervention Screen
                    </Text>
                    <Text>
                    </Text>
                </View>
            );
        }
        return <LoadingIndicator/>;
    }

}

Interventions.propTypes = {
    fireStation: PropTypes.object,
    intervention: PropTypes.object,
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
    getIntervention: (id) => dispatch(getIntervention(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Interventions);
