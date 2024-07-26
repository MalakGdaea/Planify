import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../types/RootStackParamList.ts';

const PlusButton: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <Pressable style={styles.container} hitSlop={8} onPress={() => navigation.navigate('AddTask')}>
            <Text style={styles.text}>+</Text>
        </Pressable>
    )
};

export default React.memo(PlusButton);
