import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 24,
    },
    thin: {
        fontWeight: '300',
        color: colors.LightCharlestonGreen,
        paddingHorizontal: 24,
    },
});

export default styles;
