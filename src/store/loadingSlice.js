import { createSlice } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const initialState = {
    loginLoading: false,
}

const loadingSlice = createSlice({
    name: "loadings",
    initialState,
    reducers: {
        startLoadingLogin: (state) => {
            state.isOpen = true
        },
        finishedLoadingLogin: (state) => {
            state.isOpen = false
        },
    }
});

export const {startLoadingLogin, finishedLoadingLogin} = loadingSlice.actions;

export default menuSlice.reducers;