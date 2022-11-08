import {  createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name : 'filter',
    initialState:{
        moreOptionsFilteredArray:[]
    } ,
    reducers : {
        saveFilter : (state) => {
            let t = JSON.parse(sessionStorage.getItem('filter'))
            console.log(t)
            return t
        } ,
        functionForMoreOptionsFilteredArray:(state , action)=>{
            state.moreOptionsFilteredArray= action.payload
          } , 
          functionToRemoveTagFromMoreOptionsFromArray:(state , action)=>{   
             state.moreOptionsFilteredArray=action.payload
          }
    }
})

export const {saveFilter ,functionToRemoveTagFromMoreOptionsFromArray ,functionForMoreOptionsFilteredArray } = FilterSlice.actions

export default FilterSlice.reducer