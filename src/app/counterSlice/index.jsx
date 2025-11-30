import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increaseby1: (state) => state + 1,
        decreaseby1: (state) => state - 1,
        reset: () => 0,

    }

})
export const { increaseby1, decreaseby1,reset } = counterSlice.actions
export default counterSlice.reducer
