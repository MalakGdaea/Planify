import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import PlusButton from '../../../components/PlusButton';
import styles from './styles';

function Tasks(): React.JSX.Element {
    return <SafeAreaView style={styles.container}>
        <Header title='Tasks' />
        <ScrollView>
            <Text style={{ color: '#000000' }}>Tasks</Text>
        </ScrollView>
        <PlusButton />
    </SafeAreaView>;
}

export default React.memo(Tasks);
