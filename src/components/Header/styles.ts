import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500',
    },
    icon: {
        width: 25,
        height: 25,
    },
});

export default styles;
