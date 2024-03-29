import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchProducts = createAsyncThunk(
    "cart/fetchProducts",
    async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/posts");
            console.log(res.data);
            return res.data;

        } catch (error) {
            console.log(error)
        }
    }
)


const initialState = {
    cart: [],
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    status: 'idle',
    error: null,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            }, {
                totalPrice: 0,
                totalQuantity: 0
            });

            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;

        },
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1;

            } else {
                state.cart.push(action.payload)
            }
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

    }


})


export const { getCartTotal, addToCart, removeItem, decreaseItemQuantity, increaseItemQuantity, } = cartSlice.actions;
export default cartSlice.reducer;