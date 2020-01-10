import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    boxContainer: {
        display: 'flex',
        padding: 15,
        backgroundColor: Colors.primaryWhite,
        borderRadius: 5,
    },
    userInformationContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    userAvatar: {
        width: '20%',
        alignItems: 'center',
    },
    firefighterInformation: {
        paddingTop: 10,
        paddingLeft: 20,
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        width: '48%',
    },
    divider1: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Colors.gray,
    },
    boxHeaderText: {
        fontSize: 20,
        color: Colors.primaryDarkBlue,
        fontWeight: '600',
    },
    boxContentTitleText: {
        fontSize: 17,
        color: Colors.primaryDarkBlue,
        fontWeight: '600',
    },
    boxContentBodyText: {
        fontSize: 16,
        color: Colors.primaryDarkBlue,
        fontWeight: '300',
    },
});

export default styles;
