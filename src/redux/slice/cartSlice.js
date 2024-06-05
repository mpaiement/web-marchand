import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState : {
            itemlist:[],
            totalQuantity:0,
        },
        reducers:{
            addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.itemlist.find((item) => item.id === newItem);
            
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += action.payl
            }
            }
        }
    }
)