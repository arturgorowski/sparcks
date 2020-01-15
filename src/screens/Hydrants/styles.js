import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default styles;
