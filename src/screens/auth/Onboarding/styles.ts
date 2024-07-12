import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    title: {
        fontSize: 22,
        color: colors.beige,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        color: colors.beige,
        textAlign: 'center',
        marginVertical: 16,
    },
    content: {
        backgroundColor: colors.stone,
        padding: 30,
        width: '100%',
        paddingTop: 10,
    },
    footer: {
        backgroundColor: colors.stone,
        height: 20,
        width: '100%',
        position: 'absolute',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0,
    }
});

export default style;
