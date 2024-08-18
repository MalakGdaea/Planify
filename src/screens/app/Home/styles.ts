import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.black,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24,
    },
    box: {
        backgroundColor: colors.lightGray,
        borderRadius: 15,
        padding: 12,
        marginHorizontal: 24,
        marginVertical: 72,
    },
    title: {
        color: colors.CharlestonGreen,
        fontSize: 16,
    },
    subtitle: {
        color: colors.LightCharlestonGreen,
        fontSize: 12,
        marginTop: 8,
    },
});

export default styles;
