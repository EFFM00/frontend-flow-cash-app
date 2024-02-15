import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
    try {
        console.log("LLEGAACA");
        const url = import.meta.env.REACT_APP_API_URL_BASE

        const test = {
            "email": "andres@mail.com",
            "password": "12345"
        }

        const response = await axios.post("https://rv9w53hl17.execute-api.sa-east-1.amazonaws.com/Prod/login", test);
        console.log("Response", response);
        return response.data;
    } catch (error) {
        console.log(error);
      throw error.response.data; // Captura el error y lo pasa al estado rechazado
    }
});