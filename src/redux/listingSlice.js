import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name:'list' ,
    initialState:{
       loginCredentials:{...JSON.parse(sessionStorage.getItem('userdata'))} ,
       tabIndex:sessionStorage.getItem('tabindex') ,
       countBadge:[] , 
       searchValue:'' ,
       searchResultArray:[] , 
       searchResultOptionArray:[] ,
       selectedItem:'' ,
       displayTableData:[]
       
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
        } ,
        functionToSearchvalue:(state , action)=>{
          state.searchValue = action.payload
        } ,
        functionToSearchResultArray:(state , action)=>{
           state.searchResultArray=action.payload
        } ,
        functionToSearchResultOptionArray:(state , action)=>{
         
          state.searchResultOptionArray=action.payload
        } ,
        functionToSetSelectedItem:(state , action)=>{
         
          state.selectedItem=action.payload
        } ,
        functionToStoreDisplayedDataOnTable:(state , action)=>{
          state.displayTableData=action.payload
        }
      
    }

})

export const {loginCredentialsFunction ,functionToCountBadge , functionToSearchvalue , functionToSearchResultOptionArray ,  functionToSearchResultArray , functionToSetSelectedItem ,functionToStoreDisplayedDataOnTable} = listSlice.actions
export default listSlice.reducer