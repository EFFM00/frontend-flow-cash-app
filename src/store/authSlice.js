import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../service/authService";

const initialState = {
    status: false,
    userData: null,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // login: (state, action) => {
        //     state.status = true;
        //     state.userData = action.payload.userData
        // },
        logout: (state) => {
            state.status =  "";
            state.userData =  null
            state.error =  null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;