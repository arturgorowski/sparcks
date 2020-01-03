import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, SafeAreaView, View, ScrollView, Platform, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {connect} from 'react-redux';
import {API_URL} from 'react-native-dotenv';
import {Divider, TouchableRipple} from 'react-native-paper';
import getUser from '../../selectors/UserSelectors';
// import {logout} from '../../redux/actions/user';
import Colors from '../../helpers/Colors';
import strings from '../../localization';
import styles from './styles';
import {logout} from 'actions/UserActions';

class Drawer extends Component {
    componentDidUpdate() {
        const {user, navigation} = this.props;
        console.log('kurwa user', user);
        if (user === null) {
            navigation.navigate('Auth');
        }
        return null;
    }

    logout = () => {
        this.props.logout();
    };

    _renderLogoutBtnContainer = () => (
        <View style={styles.logoutBtnContainer}>
            <Text
                style={[
                    styles.menuItemText,
                    {color: Colors.primaryGrey20},
                ]}
            >
                {strings.logout}
            </Text>
        </View>
    );

    render() {
        const {user} = this.props;
        if (user) {
            return (
                <Fragment>
                    <SafeAreaView style={{flex: 0, backgroundColor: Colors.primaryWhite}}/>
                    <SafeAreaView style={{flex: 1, backgroundColor: Colors.primaryNavyBlueLight}}>
                        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} bounces={false}>
                            <View style={styles.header}>
                                {/*<View style={styles.avatarContainer}>*/}
                                {/*    <AvatarFrame style={styles.avatarFrame}/>*/}
                                {/*    {user.avatar*/}
                                {/*        ? (*/}
                                {/*            <Image*/}
                                {/*                style={styles.avatar}*/}
                                {/*                resizeMode="cover"*/}
                                {/*                source={{uri: `${API_URL}images/avatar/${user.avatar}`}}*/}
                                {/*            />*/}
                                {/*        )*/}
                                {/*        : (*/}
                                {/*            <View style={styles.noAvatar}>*/}
                                {/*                <IconEntypo name="user" size={45} color={Colors.primaryWhite}/>*/}
                                {/*            </View>*/}
                                {/*        )*/}
                                {/*    }*/}
                                {/*</View>*/}

                                <Text style={styles.headerName}>
                                    {`${user.first_name} ${user.last_name}`}
                                </Text>
                                <Text style={styles.headerLogin}>
                                    {user.username}
                                </Text>
                            </View>

                            <View style={styles.navContainer}>
                                <DrawerItems
                                    {...this.props}
                                    inactiveLabelStyle={{color: Colors.primaryGrey20}}
                                    labelStyle={styles.menuItemText}
                                    activeBackgroundColor={Colors.primaryWhite}
                                    activeTintColor={Colors.primaryBlue}
                                    inactiveTintColor={Colors.primaryGrey20}
                                />

                                <Divider style={styles.divider}/>

                                {Platform.OS === 'android'
                                    ? (
                                        <TouchableRipple
                                            onPress={this.logout}
                                            style={styles.logoutBtn}
                                            rippleColor="rgba(0, 0, 0, .32)"
                                        >
                                            {this._renderLogoutBtnContainer()}
                                        </TouchableRipple>
                                    )
                                    : (
                                        <TouchableOpacity
                                            onPress={this.logout}
                                            style={styles.logoutBtn}
                                        >
                                            {this._renderLogoutBtnContainer()}
                                        </TouchableOpacity>
                                    )
                                }
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
};


const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
