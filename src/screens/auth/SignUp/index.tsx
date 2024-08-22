import React, { useState } from 'react';
import { ActivityIndicator, Alert, Linking, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import Checkbox from '../../../components/Checkbox';
import auth from '@react-native-firebase/auth';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants/links';
import Input from '../../../components/Input';
import { User } from '../../../types/User';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonType from '../../../enums/buttonType';
import colors from '../../../constants/colors';

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

function SignUp(): React.JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<SignUpNavigationProp>();
    const [agreed, setAgreed] = useState<boolean>(false);
    const [user, setUser] = useState<User>({ firstName: '', lastName: '', email: '', password: '', conformedPassword: '' });

    const onCheckboxPress = () => {
        setAgreed(value => !value);
    };

    const onLinkPress = (url: string) => {
        Linking.openURL(url);
    };

    const onSubmit = () => {
        if (!areFieldsNotEmpty() || !isPasswordsMatches() || !isTermAgreed()) {
            return;
        }
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(user.email!, user.password!)
            .then(() => {
                auth().currentUser!.updateProfile({ displayName: `${user.firstName} ${user.lastName}` });
                setLoading(false);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }
                if (error.code === 'auth/weak-password') {
                    Alert.alert('Password should be at least 6 characters');
                }
                else {
                    Alert.alert(error.message);
                }
            });
    };

    const onChange = (value: string, key: string) => {
        setUser(vals => ({
            ...vals,
            [key]: value,
        }));
    };

    const isTermAgreed = (): boolean => {
        if (!agreed) {
            Alert.alert('You should agree to the terms');
            return false;
        }
        return true;
    };

    const isPasswordsMatches = (): boolean => {
        if (user.password !== user.conformedPassword) {
            Alert.alert('Password do not match!');
            return false;
        }
        return true;
    };

    const areFieldsNotEmpty = (): boolean => {
        if (Object.keys(user).length === 0) {
            Alert.alert('Please fill the form');
            return false;
        }
        for (let key in user) {
            const value = user[key as keyof User];
            if (value === null || value === undefined || value === '') {
                Alert.alert('There are empty fields!');
                return false;
            }
        }
        return true;
    };

    return <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Title>Join the hub!</Title>
            <Input onChangeText={(val) => onChange(val, 'firstName')} placeholder={'First Name'} />
            <Input onChangeText={(val) => onChange(val, 'lastName')} placeholder={'Last Name'} />
            <Input onChangeText={(val) => onChange(val, 'email')} placeholder={'Email'} keyboardType="email-address" />
            <Input onChangeText={(val) => onChange(val, 'password')} placeholder={'Password'} secureTextEntry />
            <Input onChangeText={(val) => onChange(val, 'conformedPassword')} placeholder={'Confirm Password'} secureTextEntry />
            <View style={styles.conditionsContainer}>
                <Checkbox checked={agreed} onPress={onCheckboxPress} />
                <Text style={styles.conditionsText}>I agree to <Text style={styles.boldUnderline} onPress={() => onLinkPress((TERMS_CONDITIONS_LINK))}>Terms and Conditions</Text>
                    and <Text style={styles.boldUnderline} onPress={() => onLinkPress((PRIVACY_POLICY_LINK))}>Privacy Policy</Text></Text>
            </View>
            <Button onPress={onSubmit} type={ButtonType.Primary}>Create new account</Button>
            <Text style={styles.footerText}>Already registered?
                <Text style={styles.footerLink} onPress={() => navigation.navigate('SignIn')}> Sign in!</Text>
            </Text>
        </ScrollView>
        {loading && <View><ActivityIndicator size="large" color={colors.CharlestonGreen} /></View>}
    </SafeAreaView>;
}

export default React.memo(SignUp);
