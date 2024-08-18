import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import taskReducer from './task';

const store = configureStore({
    reducer: {
        user: userReducer,
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
