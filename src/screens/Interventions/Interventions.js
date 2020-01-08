import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from '../../helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from '../../components/common/DrawerMenuButton';
import getInterventionState from '../../redux/selectors/InterventionSelector';
import getFirestationState from '../../redux/selectors/FirestationSelectors';
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
        const {firestation} = this.props;
        console.log(firestation);
        if (firestation) {
            console.log('Firestation id: ', firestation.id);
            this.props.getIntervention(firestation.id);
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
        return null;
    }

}

Interventions.propTypes = {
    firestation: PropTypes.object,
    intervention: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    getIntervention: PropTypes.func.isRequired,
};

Interventions.defaultProps = {
    firestation: null,
    intervention: null,
};

const mapStateToProps = state => ({
    firestation: getFirestationState(state),
    intervention: getInterventionState(state),
});

const mapDispatchToProps = dispatch => ({
    getIntervention: (id) => dispatch(getIntervention(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Interventions);
