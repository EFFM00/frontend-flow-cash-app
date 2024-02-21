import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import menuSlice from "./menuSlice";
import formRegistrySlice from "./formRegistrySlice";
import loadingSlice from "./loadingSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        menu: menuSlice,
        loadings: loadingSlice,
        formRegistry: formRegistrySlice,
    }
});

export default store;