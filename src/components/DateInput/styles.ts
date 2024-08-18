import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    outlined: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.black,
        marginHorizontal: 24,
        paddingHorizontal: 12,
        marginVertical: 12,
    },
    text: {
        color: colors.midGray,
        fontSize: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
});

export default styles;
