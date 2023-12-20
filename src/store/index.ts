import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counter } from './counter';

const reducer = combineReducers({
    counter,
});

const store = configureStore({
    reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;