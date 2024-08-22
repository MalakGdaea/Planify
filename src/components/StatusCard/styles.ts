import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { TaskStatus } from '../../enums/taskStatus';

const getStyles = (type: TaskStatus) => StyleSheet.create({
    container: {
        backgroundColor: type === TaskStatus.Delayed ? colors.lightRed : colors.lightGray,
        borderRadius: 15,
        padding: 12,
        width: '30%',
        alignItems: 'center',
    },
    label: {
        marginBottom: 13,
        color: type === TaskStatus.Delayed ? colors.red : colors.PacificBlue,
        fontSize: 10,
    },
    count: {
        fontSize: 28,
        fontWeight: '500',
        color: type === TaskStatus.Delayed ? colors.red : colors.PacificBlue,
        marginBottom: 8,
    },
});

export default getStyles;
