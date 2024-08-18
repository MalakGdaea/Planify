import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 8,
        gap: 10,
    },
    taskText: {
        color: colors.black,

    },
    checked: {
        textDecorationLine: 'line-through',
    },
});

export default style;
