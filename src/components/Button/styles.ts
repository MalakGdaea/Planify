import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        padding: 9,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    primary: {
        backgroundColor: colors.beige,
    },
    secondary: {
        backgroundColor: colors.black,
    },
});

export default styles;
