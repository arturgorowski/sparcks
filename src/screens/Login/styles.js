import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    logo: {
        width: 250,
        height: 250,
    },
});

export default styles;
