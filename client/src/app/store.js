import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cartsSlice";
import authReducer from "../features/authSlice"

export const store = configureStore({
    reducer: {
        allCart : cartReducer,
        auth : authReducer,
       

    }
})