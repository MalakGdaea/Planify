import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.black,
        height: 16,
        width: 16,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerSquare: {
        backgroundColor: colors.black,
        height: 10,
        width: 10,
        borderRadius: 3,
    },
    checkedBox: {
        borderWidth: 2,
    },
});

export default styles;
