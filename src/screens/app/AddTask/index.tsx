import React, { useEffect, useState } from 'react';
import { Pressable, Image, Text, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import RootStackParamList from '../../../types/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import Category from '../../../types/Category';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';
import moment from 'moment';
import { YEAR_MONTH_DAY } from '../../../constants/dateFormat';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { User } from '../../../types/User';
import { addTask } from '../../../services/taskService';
import { pushTask } from '../../../store/task';

type AddTaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;
interface AddTaskParams {
    navigation: AddTaskScreenNavigationProp;
}

function AddTask({ navigation }: AddTaskParams): React.JSX.Element {
    const [category, setCategory] = useState<Category | null>(null);
    const [deadline, setDeadline] = useState<Date>(new Date());
    const [title, setTitle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const today = moment(new Date()).format(YEAR_MONTH_DAY);
    const deadlineFormatted = moment(deadline).format(YEAR_MONTH_DAY);
    const user = useSelector((state: RootState) => state.user.data) as User | null;
    const dispatch = useDispatch();

    const goBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        clearInputs();
    }, []);

    const onSubmit = () => {
        if (!title) {
            Alert.alert('Please enter the task title');
            return;
        }
        if (moment(deadlineFormatted).isBefore(today)) {
            Alert.alert('Please enter future date');
            return;
        }
        setLoading(true);
        // make this as a db service
        addTask({
            title,
            deadline,
            category,
            checked: false,
            userId: user?.uid,
        }).then((addedTask) => { // here is the error I push undefine
            console.log('task added ===>', addedTask);
            dispatch(pushTask(addedTask));
            setLoading(false);
            navigation.navigate('Tasks');
        }).catch(error => {
            console.log('error when adding task :>> ', error);
            setLoading(false);
            Alert.alert(error.message);
        });
    };

    const clearInputs = () => {
        setTitle('');
        setDeadline(new Date());
        setCategory(null);
    };

    return <SafeAreaView style={styles.container}>
        <Pressable style={styles.backContainer} hitSlop={8} onPress={goBack}>
            <Image style={styles.icon} source={require('../../../assets/icons/back.png')} />
        </Pressable>
        <ScrollView>
            <Title type="thin">Add New Task</Title>
            <Text style={styles.label}>Describe the task</Text>
            <Input placeholder='Type here ...' outlined={true} onChangeText={setTitle}></Input>
            <Text style={styles.label}>Type</Text>
            <Categories
                categories={categories}
                selectedCategory={category}
                onCategoryPress={setCategory} />
            <Text style={styles.label}>Deadline</Text>
            <DateInput value={deadline} onChange={setDeadline} />
            {loading ? <ActivityIndicator /> :
                <Button style={styles.button} onPress={onSubmit}>Add New Task</Button>
            }
        </ScrollView>
    </SafeAreaView>;
}

export default React.memo(AddTask);
