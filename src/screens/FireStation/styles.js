import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Colors.gray,
    },
    fireStationName: {
        textAlign: 'center',
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        width: '65%',
    },
    equipmentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default styles;
