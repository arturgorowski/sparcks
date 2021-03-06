import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Text, SafeAreaView, View, ScrollView, Platform, TouchableOpacity, Image} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {connect} from 'react-redux';
import {Divider, TouchableRipple} from 'react-native-paper';
import getUser from '../../redux/selectors/UserSelectors';
import getToken from '../../redux/selectors/TokenSelectors';
import Colors from '../../helpers/Colors';
import strings from '../../localization';
import styles from './styles';
import {logout} from '../../redux/actions/user';
// import LogoutIcon from '../../assets/menu/logout.svg';
import LogoutIcon from '../../assets/menu/logout1.svg';
import Logo from '../../assets/logo/sparcks.png';

class Drawer extends Component {
    componentDidUpdate() {
        const {navigation, token} = this.props;
        if (token === null) {
            navigation.navigate('Auth');
        }
        return null;
    }

    logout = () => {
        this.props.logout();
    };

    _renderLogoutBtnContainer = () => (
        <View style={styles.logoutBtnContainer}>
            <LogoutIcon width={24} height={24} style={styles.logoutIcon} />
            <Text style={[styles.menuItemText, {color: Colors.primaryGrey20}]}>
                {strings.logout}
            </Text>
        </View>
    );

    render() {
        const {user, navigation} = this.props;
        if (user) {
            return (
                <Fragment>
                    <SafeAreaView
                        style={{flex: 0, backgroundColor: Colors.primaryWhite}}
                    />
                    <SafeAreaView
                        style={{flex: 1, backgroundColor: Colors.primaryDarkBlue}}>
                        <ScrollView
                            style={{flex: 1}}
                            contentContainerStyle={{flexGrow: 1}}
                            bounces={false}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.header}
                                // onPress={() => {
                                //     navigation.navigate('Alarm');
                                // }}
                            >
                                <View style={styles.avatarContainer}>
                                    <Image
                                        style={styles.avatar}
                                        resizeMode="cover"
                                        source={Logo}
                                    />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.navContainer}>
                                <DrawerItems
                                    {...this.props}
                                    inactiveLabelStyle={{color: Colors.primaryGrey20}}
                                    labelStyle={styles.menuItemText}
                                    activeBackgroundColor={Colors.primaryWhite}
                                    activeTintColor={Colors.primaryBlue}
                                    inactiveTintColor={Colors.primaryGrey20}
                                />

                                <Divider style={styles.divider} />

                                {Platform.OS === 'android' ? (
                                    <TouchableRipple
                                        onPress={this.logout}
                                        style={styles.logoutBtn}
                                        rippleColor="rgba(0, 0, 0, .32)"
                                    >
                                        {this._renderLogoutBtnContainer()}
                                    </TouchableRipple>
                                ) : (
                                    <TouchableOpacity
                                        onPress={this.logout}
                                        style={styles.logoutBtn}
                                    >
                                        {this._renderLogoutBtnContainer()}
                                    </TouchableOpacity>
                                )}
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </Fragment>
            );
        }
        return null;
    }
}

Drawer.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

Drawer.defaultProps = {
    user: null,
    token: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
    token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
