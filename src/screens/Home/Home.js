import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from 'components/common/DrawerMenuButton';


class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.home,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={TextStyles.lightTitle}>
                    This is Home Screen
                </Text>
                <Text>
                </Text>
            </View>
        );
    }

}

Home.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
