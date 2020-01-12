import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    avatarContainer: {
        position: 'relative',
        width: 86,
        height: 86,
        marginTop: 10,
    },
    avatar: {
        position: 'absolute',
        top: 11,
        left: 11,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.primaryGrey10,
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
    firefighterInformation: {
        paddingTop: 10,
        paddingLeft: 20,
    },
    row: {
        width: '48%',
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Colors.gray,
    },
});

export default styles;
