import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./listingSlice"


export const store = configureStore({
    reducer:{
       list:counterReducer,
       
    } ,
}) 