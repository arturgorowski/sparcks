import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    boxContainer: {
        display: 'flex',
        padding: 15,
        backgroundColor: Colors.primaryWhite,
        borderRadius: 5,
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
