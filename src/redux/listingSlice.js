import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name:'list' ,
    initialState:{
       loginCredentials:{...JSON.parse(sessionStorage.getItem('userdata'))}
    } ,
    reducers:{
        loginCredentialsFunction:(state , action)=>{
          state.loginCredentials = action.payload
        } ,
      
    }

})

export const {loginCredentialsFunction} = listSlice.actions
export default listSlice.reducer