import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    footerText: {
        color: colors.midGray,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 28,
    },
    footerLink: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default style;
