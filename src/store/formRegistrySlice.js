import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isView: false
}

const formRegistrySlice = createSlice({
    name: "formRegistry",
    initialState,
    reducers: {
        handlerFormRegistry: (state) => {
            state.isView = !state.isView
        },
        open: (state) => {
            state.isView = true
        },
        close: (state) => {
            state.isView = false
        },
    }
});

export const {handlerFormRegistry, open, close} = formRegistrySlice.actions;

export default formRegistrySlice.reducer;