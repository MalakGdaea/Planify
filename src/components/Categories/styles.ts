import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
    },
    item: {
        fontSize: 13,
        color: colors.PacificBlue,
        borderWidth: 1,
        borderColor: colors.PacificBlue,
        borderRadius: 8,
        padding: 6,
        paddingHorizontal: 12,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    itemContainer: {
        marginRight: 8,
        marginVertical: 10,
    },
    selectedCategory: {
        backgroundColor: colors.lightGray,
        borderRadius: 10,
        borderColor: colors.lightGray,
    },
});

export default styles;
