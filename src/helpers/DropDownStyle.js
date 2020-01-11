import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    dropDownItem: {
        marginBottom: 10,
    },
    dropDownTitle: {
        fontSize: 18,
        color: Colors.primaryDarkBlue,
        display: 'flex',
        flexDirection: 'row',
    },
    dropDownBody: {
        fontSize: 18,
        color: Colors.primaryDarkBlue,
    },
});

export default styles;
