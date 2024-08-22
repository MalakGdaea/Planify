import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        backgroundColor: colors.PacificBlue,
        borderRadius: 50,
        position: 'absolute',
        right: 24,
        bottom: 24,
    },
    text: {
        color: colors.white,
        fontSize: 35,
        fontWeight: '600',
        marginTop: -2,
    },
});

export default styles;
