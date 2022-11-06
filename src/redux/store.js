import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./listingSlice"
import FilterReducer from './FilterSlice'


export const store = configureStore({
    reducer:{
       list:counterReducer,
       filter : FilterReducer
       
    } ,
}) 