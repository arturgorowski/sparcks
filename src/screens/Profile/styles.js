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
    userAvatar: {
        width: '20%',
        alignItems: 'center',
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
