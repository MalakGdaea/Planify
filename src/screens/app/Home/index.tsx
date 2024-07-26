import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './styles';
import Header from '../../../components/Header';
import PlusButton from '../../../components/PlusButton';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function Home(): React.JSX.Element {
    return <SafeAreaView style={styles.container}>
        <Header title='Home' />
        <ScrollView>
            <Text style={style.text}>Home</Text>
        </ScrollView>
        <PlusButton />
    </SafeAreaView>;
}

export default React.memo(Home);
