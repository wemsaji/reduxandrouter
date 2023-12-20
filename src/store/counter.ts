import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCount: (state: CounterState, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        setCount: (state: CounterState, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const counter = slice.reducer;
export const { addCount, setCount } = slice.actions;