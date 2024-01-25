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
        changeToView: (state) => {
            state.isView = true
        },
        changeToForm: (state) => {
            state.isView = false
        },
    }
});

export const {handlerFormRegistry, changeToView, changeToForm} = formRegistrySlice.actions;

export default formRegistrySlice.reducer;