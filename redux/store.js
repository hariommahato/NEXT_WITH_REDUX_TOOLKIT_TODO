import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import taskReducer from './features/taskSlice';


const makeStore = () => configureStore({
    reducer: {
        task: taskReducer,
    },
    devtools: true
})


export const wrapper = createWrapper(makeStore)
