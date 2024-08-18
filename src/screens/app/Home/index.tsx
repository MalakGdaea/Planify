import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import PlusButton from '../../../components/PlusButton';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { User } from '../../../types/User';
import { getUserTasks } from '../../../services/taskService';
import { setTasks } from '../../../store/task';
import { Task } from '../../../types/Task';
import StatusCard from '../../../components/StatusCard';
import { Text, TouchableOpacity, View } from 'react-native';
import { TaskStatus } from '../../../enums/taskStatus';
import moment from 'moment';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../types/RootStackParamList';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;
interface HomeParams {
    navigation: HomeScreenNavigationProp;
}


function Home({ navigation }: HomeParams): React.JSX.Element {
    const user = useSelector((state: RootState) => state.user.data) as User | null;
    const tasks = useSelector((state: RootState) => state.task.data) as Task[];
    const [counts, setCounts] = useState
        <{ highPriority: number, DueDeadline: number, QuickWin: number }>
        ({ highPriority: 0, DueDeadline: 0, QuickWin: 0 });
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTasks = async () => {
            if (user) {
                const fetchedTasks = await getUserTasks(user.uid);
                dispatch(setTasks(fetchedTasks));
            }
        };
        fetchTasks();
    }, [user, dispatch]);

    useEffect(() => {
        const highPriority = tasks?.filter(
            (task) => task.category?.value === 'important' || task.category?.value === 'urgent').length;
        const DueDeadline = (tasks.filter((task) => {
            return moment(task?.deadline?.seconds * 1000).isBefore(moment(), 'day');
        })).length;
        const QuickWin = tasks?.filter((task) => task.category?.value === 'quick_task').length;
        setCounts({ highPriority, DueDeadline, QuickWin });
    }, [tasks]);

    return <SafeAreaView style={styles.container}>
        <Header title='Home' />
        <ScrollView>
            <Title type='thin'>Daily Tasks</Title>
            <View style={styles.row}>
                <StatusCard label='High Priority' count={counts.highPriority} type={TaskStatus.HasTime} />
                <StatusCard label='Due Deadline' count={counts.DueDeadline} type={TaskStatus.Delayed} />
                <StatusCard label='Quick Win' count={counts.QuickWin} type={TaskStatus.HasTime} />
            </View>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Tasks ')}>
                <Text style={styles.title}>Check all my tasks</Text>
                <Text style={styles.subtitle}>See all tasks and filter them by categories you have selected when creating them</Text>
            </TouchableOpacity>
        </ScrollView>
        <PlusButton />
    </SafeAreaView>;
}

export default React.memo(Home);
