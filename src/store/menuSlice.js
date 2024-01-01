import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        handlerOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
});

export const {handlerOpen} = menuSlice.actions;

export default menuSlice.reducer;