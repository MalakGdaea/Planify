import firestore from '@react-native-firebase/firestore';
import { Task } from '../types/Task'; // Define your Task type

const tasksCollection = firestore().collection('Tasks');

export const addTask = async (task: Task): Promise<Task> => {
    try {
        const documentReference = await tasksCollection.add(task);
        const documentSnapshot = await documentReference.get();
        if (documentSnapshot.exists) {
            const addedTask = { uid: documentSnapshot.id, ...documentSnapshot.data() } as Task;
            return addedTask;
        } else {
            throw new Error('Failed to retrieve the added task.');
        }
    } catch (error) {
        console.error('Error adding task: ', error);
        throw error;
    }
};

export const getUserTasks = async (userId: string | undefined): Promise<Task[]> => {
    try {
        const snapshot = await tasksCollection.where('userId', '==', userId).get();
        return snapshot.docs.map(doc => {
            const data = doc.data() as Task;
            return { ...data || {}, uid: doc.id };
        });
    } catch (error) {
        console.error('Error fetching tasks: ', error);
        throw error;
    }
};

export const updateTaskInDb = async (task: Task): Promise<void> => {
    try {
        await tasksCollection.doc(task.uid)
            .update({
                task,
            }).then(() => {
                console.log('task updated!');
            });
    } catch (error) {
        console.error('Error updating task: ', error);
        throw error;
    }
};
