import {StyleSheet} from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
    avatarContainer: {
        position: 'relative',
        width: 86,
        height: 86,
        marginBottom: 15,
    },
    avatar: {
        position: 'absolute',
        top: 5,
        left: 75,
        width: 100,
        height: 120,
    },
    noAvatar: {
        position: 'absolute',
        top: 11,
        left: 11,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.primaryGrey30,
    },
    avatarFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    header: {
        padding: 20,
        marginBottom: 20,
        height: 150,
        justifyContent: 'center',
        backgroundColor: Colors.primaryWhite,
        color: Colors.primaryBlue,
    },
    headerName: {
        color: Colors.primaryGrey,
        fontSize: 18,
    },
    headerLogin: {
        color: Colors.primaryGrey,
        fontSize: 12,
    },
    navContainer: {
        flex: 1,
        backgroundColor: Colors.primaryDarkBlue,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '400',
    },
    divider: {
        backgroundColor: Colors.primaryGrey40,
        margin: 20,
    },
    logoutBtn: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
        paddingTop: 15,
        borderColor: Colors.primaryGrey20,
    },
    logoutBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutIcon: {
        marginRight: 30,
        opacity: 0.8,
    },
});

export default styles;
