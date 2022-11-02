import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name:'list' ,
    initialState:{
       loginCredentials:{...JSON.parse(sessionStorage.getItem('userdata'))} ,
       tabIndex:sessionStorage.getItem('tabindex') ,
       countBadge:[]
       
    } ,
    reducers:{
        loginCredentialsFunction:(state , action)=>{
          state.loginCredentials = action.payload
        } ,
        functionToCountBadge:(state , action)=>{
          let temp=[];
          action.payload.data && action.payload.data.map((item)=>{
              temp.push({[item._id]:item.total})
          })
         
          state.countBadge = temp
        }
      
    }

})

export const {loginCredentialsFunction ,functionToCountBadge} = listSlice.actions
export default listSlice.reducer