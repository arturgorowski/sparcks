import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from 'components/common/DrawerMenuButton';
import LoadingIndicator from 'components/common/LoadingIndicator';

class Hydrants extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.hydrants,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={TextStyles.lightTitle}>
                    This is Hydrants Screen
                </Text>
                <Text>
                </Text>
            </View>
        );
    }

}

Hydrants.propTypes = {
    user: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

Hydrants.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Hydrants);
