    import {createSlice} from "@reduxjs/toolkit"


    const initialproductState ={
        creating:false,
        itemList:[],
        totalQuantity: 0,
        loading:false,
        error:null,
    };

    export const modelSlice = createSlice({

        name: 'product',
        initialState: initialproductState,

        reducers :{
            createPannelProductStart: (state) => {
                state.creating = true;
                state.error = null;
            },
            createPannelProductSuccess: (state,action) => {
                state.creating = false;
                state.error = null;
                state.itemList = [...state.itemList, action.payload];
            },
            createPannelProductFailure: (state,action) => {
                state.creating = false;
                state.error = action.payload;
                
            },
            setProducts: (state,action) => {
                state.itemList = action.payload;
                state.loading = false;
                state.error =null;
                
            },
            clearProducts: (state) => {
                state.itemList =[];
                state.loading = false;
                state.error =null;
            },
        fetchProductsStart: (state) => {
            state.loading = true;
            
        },
        fetchProductsSucces: (state, action) => {
            state.loading = false;
            state.itemList = action.payload;
        },
        fetchProductsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        

        }
    }
    );

    export const {createPannelProductStart, createPannelProductSuccess,createPannelProductFailure, setProducts, clearProducts,fetchProductsStart,fetchProductsSucces,fetchProductsFailure}= modelSlice.actions

    export default modelSlice.reducer;