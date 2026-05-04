import {configureStore} from '@reduxjs/toolkit'; // step 1- to configure the store from redux toolkit
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer : todoReducer
})

