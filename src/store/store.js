import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import menuSlice from "./menuSlice";
import formRegistrySlice from "./formRegistrySlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        menu: menuSlice,
        formRegistry: formRegistrySlice
    }
})

export default store;