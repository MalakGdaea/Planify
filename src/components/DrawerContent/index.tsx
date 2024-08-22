import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';
import auth from '@react-native-firebase/auth';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants/links';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user';

function DrawerContent(props: DrawerContentComponentProps) {
    const { navigation } = props;
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setUser(null));
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>Privacy Policy</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>Terms and Conditions</Text>
            <Text style={styles.link} onPress={logOut}>Log out</Text>
        </DrawerContentScrollView >
    );
}

const styles = StyleSheet.create({
    link: {
        color: colors.black,
        marginVertical: 12,
        fontSize: 13,
        fontWeight: '500',
        margin: 15,
    },
});

export default React.memo(DrawerContent);

