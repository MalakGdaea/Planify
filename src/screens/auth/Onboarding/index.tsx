import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import buttonType from '../../../constants/buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type OnboardingNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

function Onboarding(): React.JSX.Element {
    const navigation = useNavigation<OnboardingNavigationProp>();
    return <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image style={styles.image} source={require('../../../assets/onboarding.jpg')} />
            <View style={styles.footer} />
        </View>
        <View style={styles.content}>
            <Text style={styles.title}>Best task management app</Text>
            <Text style={styles.subtitle}>Get organized by sorting out all your tasks
                and boost you productivity </Text>
            <Button onPress={() => navigation.navigate('SignIn')} type={buttonType.primary}>Log In </Button>
            <Button onPress={() => navigation.navigate('SignUp')} type={buttonType.secondary}>Get Started</Button>
        </View>
    </View>;
}

export default React.memo(Onboarding);
