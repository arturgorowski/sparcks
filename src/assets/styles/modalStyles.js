import {StyleSheet} from 'react-native';
import Colors from '../../helpers/Colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: Colors.primaryDarkSteel,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        margin: 10,
        color: Colors.primaryWhite,
        textAlign: 'center',
    },
    actionTypeTitle: {
        fontSize: 40,
        fontWeight: '700',
        margin: 10,
        color: Colors.primaryWhite,
        textAlign: 'center',
    },
    content: {
        margin: 10,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 60,
    },
    btnConfirm: {
        backgroundColor: Colors.primaryGreen,
        padding: 10,
        width: 150,
        height: 50,
        borderRadius: 2,
    },
    btnDiscard: {
        backgroundColor: Colors.primaryRed,
        padding: 10,
        width: 150,
        height: 50,
        borderRadius: 2,
    },
    btnText: {
        color: Colors.primaryWhite,
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    },
});
