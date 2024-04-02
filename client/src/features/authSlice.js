import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const loginUser = createAsyncThunk('auth/login', async (data) => {
    try {
        // console.log(data);

        let response = await axios.post("http://localhost:8000/api/login", data);
        console.log( response.data) ;
        return  response.data;
        

        

    } catch (error) {
        console.log(error);

    }
}
)

export const signUp = createAsyncThunk('auth/signup', async (data) => {
    try {
        let res = await axios.post("https://cart-management-using-backend-1.onrender.com/api/signup", data)
        console.log(res)
        return res.data;

    } catch (error) {
        console.log(error);
    }
})

const initialState = {

    user: null,
    loading: false,
    error: null,

};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.loading = false;
            state.error = null;
        },)
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = false;
            },)
            .addCase(signUp.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loading = false;
                state.error = null;
            },)
            .addCase(signUp.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = false;
            },)

    }


});


export default authSlice.reducer;



