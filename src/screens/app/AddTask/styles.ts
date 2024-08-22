import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    backContainer: {
        padding: 24,
    },
    icon: {
        width: 25,
        height: 25,
    },
    label: {
        color: colors.CharlestonGreen,
        fontSize: 13,
        marginHorizontal: 24,
        fontWeight: '500',
    },
    button: {
        margin: 24,
    },
});

export default style;
