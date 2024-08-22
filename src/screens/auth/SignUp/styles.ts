import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    conditionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
        marginVertical: 16,
    },
    conditionsText: {
        color: colors.midGray,
        fontSize: 13,
    },
    footerText: {
        color: colors.midGray,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 28,
    },
    footerLink: {
        color: colors.PacificBlue,
        fontWeight: 'bold',
        fontSize: 15,
    },
    boldUnderline: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default style;
