import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        menu: menuSlice
    }
})

export default store;