import React from 'react';
import { Pressable, Text } from 'react-native';
import getStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../types/RootStackParamList.ts';
import { TaskStatus } from '../../enums/taskStatus.ts';

interface StatusCardParams {
    label: string,
    count: number,
    type: TaskStatus,
}

const StatusCard = ({ label, count, type }: StatusCardParams) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const styles = getStyles(type);

    return (
        <Pressable style={styles.container}
            hitSlop={8}
            onPress={() => navigation.navigate('Tasks')}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.count}>{count}</Text>
        </Pressable>
    );
};

export default React.memo(StatusCard);
