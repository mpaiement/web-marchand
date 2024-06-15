// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "./slice/cartSlice";

// Configuration pour persister l'état du store
const persistConfig = {
    key: 'cart', // Clé pour stocker les données du slice cart
    storage,
};
console.log("🚀 ~ persistConfig.cart:", persistConfig.cart)


// Application du persistReducer au reducer du panier
const persistedReducer = persistReducer(persistConfig, cartReducer);
console.log("🚀 ~ cartReducer:", cartReducer)

// Création du store avec le reducer persistant
export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

// Création du persistor pour gérer la persistance du store
export const persistor = persistStore(store);



