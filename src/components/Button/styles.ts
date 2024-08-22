import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import ButtonType from '../../enums/buttonType';

const getStyles = (buttonType: ButtonType) => StyleSheet.create({
    container: {
        backgroundColor: buttonType === ButtonType.Primary ? colors.PacificBlue : colors.CharlestonGreen,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
});

export default getStyles;
