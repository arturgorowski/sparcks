import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    fireTruckList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailFireTruckButton: {
        display: 'flex',
    },
});

export default styles;
