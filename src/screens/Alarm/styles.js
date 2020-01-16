import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryGrey10,
        padding: 15,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Colors.gray,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    dropDownHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default styles;
