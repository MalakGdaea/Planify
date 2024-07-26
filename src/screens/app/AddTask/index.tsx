import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import RootStackParamList from '../../../types/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

type AddTaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;

interface AddTaskParams {
    navigation: AddTaskScreenNavigationProp;
}

function AddTask({ navigation }: AddTaskParams): React.JSX.Element {

    const goBack = () => {
        navigation.goBack();
    };

    return <SafeAreaView style={styles.container}>
        <Pressable style={styles.backContainer} hitSlop={8} onPress={goBack}>
            <Image style={styles.icon} source={require('../../../assets/icons/back.png')} />
        </Pressable>
        <Text style={{ color: '#000' }}>Add Task</Text>
    </SafeAreaView>;
}

export default React.memo(AddTask);
