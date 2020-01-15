import {StyleSheet} from 'react-native';
import Colors from '../../helpers/Colors';

export default StyleSheet.create({
    container: {
        width: '90%',
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: Colors.primaryWhite,
        padding: 10,
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        margin: 10,
    },
    content: {
        margin: 10,
    },
    btn: {
        alignSelf: 'flex-end',
        padding: 0,
    },
});
