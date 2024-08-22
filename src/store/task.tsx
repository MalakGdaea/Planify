import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';
import { updateTaskInDb } from '../services/taskService';

interface TaskState {
    data: Task[] | null; // Explicitly typing the data as an array of Task
}

const initialState: TaskState = {
    data: null, // Initially, the data array is empty
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload;
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            if (state.data) {
                const index = state.data.findIndex((task: Task) => task.uid === action.payload.uid);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
                updateTaskInDb(action.payload);
            }
        },
        pushTask: (state, action) => {
            if (!state.data) {
                state.data = [];
            }
            state.data.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTasks, updateTask, pushTask } = taskSlice.actions;

export default taskSlice.reducer;
