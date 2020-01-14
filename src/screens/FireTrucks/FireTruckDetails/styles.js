import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    headerContainer: {
        flex: 1,
        marginRight: 15,
    },
    headerFireTruck: {
        color: Colors.primaryGrey,
        fontWeight: '500',
        fontSize: 20,
    },
    searchInput: {
        fontSize: 18,
        backgroundColor: Colors.primaryWhite,
        marginBottom: 15,
        color: Colors.primaryDarkBlue,
    },
    fireTruckEquipmentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;
