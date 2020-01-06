import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrawerMenuButton from 'components/common/DrawerMenuButton';
import getUser from '../../redux/selectors/UserSelectors';
import getToken from '../../redux/selectors/TokenSelectors';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: strings.home,
        headerLeft: (
            <DrawerMenuButton navigation={navigation}/>
        ),
    });

    constructor(props) {
        super(props);
        this.wtf();
    }

    wtf() {
        const {user, token} = this.props;
        console.log('home user', user);
        console.log('home token', token);
        console.log('home: user !== null', user !== null);
        console.log('home: token !== null', token !== null);
    }

    render() {
        const {user} = this.props;
        if (user) {
            return (
                <View style={styles.container}>
                    <Text style={TextStyles.lightTitle}>
                        This is Home Screen
                    </Text>
                    <Text>
                        {user.firstName}
                    </Text>
                </View>
            );
        }
        return null;
    }

}

Home.propTypes = {
    user: PropTypes.object,
    token: PropTypes.object,
    navigation: PropTypes.object.isRequired,
};

Home.defaultProps = {
    user: null,
    token: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
    token: getToken(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
