import React, { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import PlusButton from '../../../components/PlusButton';
import styles from './styles';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Task } from '../../../types/Task';
import Checkbox from '../../../components/Checkbox';
import { FlatList } from 'react-native-gesture-handler';
import { updateTask } from '../../../store/task';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import Category from '../../../types/Category';

function Tasks(): React.JSX.Element {
    const tasks = useSelector((state: RootState) => state.task.data) as Task[] | null;
    const dispatch = useDispatch();
    const allCategories: Category = useMemo(() => { return { label: 'All', value: 'all' } }, []);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(allCategories);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks ?? []);
    const categoriesWithAll = [allCategories, ...categories];

    useEffect(() => {
        if (selectedCategory?.label !== allCategories.label) {
            const filtered = tasks?.filter(task => task.category?.value === selectedCategory?.value) ?? [];
            setFilteredTasks(filtered);
        } else {
            setFilteredTasks(tasks ?? []);
        }
    }, [selectedCategory, tasks, allCategories]);

    const renderTasks = ({ item }: { item: Task }) => {
        return (
            <View style={styles.row} key={item.uid}>
                <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
                <Text style={[styles.taskText, item.checked ? styles.checked : {}]}>
                    {item.title}
                </Text>
            </View>
        );
    };

    const onTaskUpdate = (item: Task) => {
        const updatedTask = { ...item, checked: !item.checked };
        dispatch(updateTask(updatedTask));
    };

    return <SafeAreaView style={styles.container}>
        <Header title='Tasks' />
        {filteredTasks &&
            <FlatList
                ListHeaderComponent={
                    <View style={{ marginBottom: 24 }}>
                        <Title type='thin'>To Do Tasks</Title>
                        <Categories
                            categories={categoriesWithAll}
                            selectedCategory={selectedCategory}
                            onCategoryPress={setSelectedCategory} />
                    </View>}
                data={filteredTasks}
                renderItem={renderTasks}
                keyExtractor={(item) => String(item.uid)}
            />
        }
        <PlusButton />
    </SafeAreaView>;
}

export default React.memo(Tasks);
