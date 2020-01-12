import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    dropDownItem: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    dropDownTitle: {
        fontSize: 18,
        color: Colors.primaryDarkBlue,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 30,
    },
    dropDownBody: {
        fontSize: 18,
        color: Colors.primaryDarkBlue,
    },
    dropDownIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '10%',
    },
});

export default styles;
