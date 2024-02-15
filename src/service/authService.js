import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
    try {
        console.log("LLEGAACA");
        const url = "https://pubitc0u07.execute-api.sa-east-1.amazonaws.com"

        const test = {
            "email": "new@mail.com",
            "password": "12345"
        }

        const response = await axios.post(url + "Prod/login", test);
        console.log("Response", response);
        return response.data;
    } catch (error) {
        console.log(error);
      throw error.response.data; // Captura el error y lo pasa al estado rechazado
    }
});