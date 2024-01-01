import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    widthScreen: false
}

const widthScreenSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        handlerMenu: (state) => {
            state.isOpen = !state.isOpen
        },
    }
});

export default widthScreenSlice.reducer;