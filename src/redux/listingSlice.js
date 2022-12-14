import { createSlice } from "@reduxjs/toolkit"
import { itemsPerPage } from "../utils/AllUtilities"

export const listSlice = createSlice({
    name:'list' ,
    initialState:{
       loginCredentials:{...JSON.parse(sessionStorage.getItem('userdata'))} ,
       tabIndex:Number(sessionStorage.getItem('tabindex')) ,
       countBadge:{'Active':0 , 'Incomplete':0 , 'Inactive':0 , 'null':0 , 'Error':0} , 
       searchValue:'' ,
       searchResultArray:[] , 
       searchResultOptionArray:[] ,
       selectedItem:'' ,
       displayTableData:[] ,
       totalNoOfItems:Number(sessionStorage.getItem('storeTotalNoOfItems')) ,
       totalNoOfPages:Number(sessionStorage.getItem('totalNoOfPages'))  ,
       nextPageUrl:'' ,
       previousPageUrl:'',
       currentPage:sessionStorage.getItem('currentPage')===null?1:Number(sessionStorage.getItem('currentPage')) ,
       nextOrPrevflag:true ,
       productsYetToBeLinked:'' ,
       inProgressFlag:false ,
     
       
    } ,
    reducers:{
        loginCredentialsFunction:(state , action)=>{
          state.loginCredentials = action.payload
        } ,
        functionToCountBadge:(state , action)=>{
          action.payload.data && action.payload.data.map((item)=>{
              state.countBadge = {...state.countBadge , [item._id]:item.total } 
            })
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
        } ,
        functionTogetTotalNoOfItems:(state , action)=>{
          let x = Math.ceil(action.payload/itemsPerPage)
          state.totalNoOfItems=action.payload
          state.totalNoOfPages = x
        } ,
        functionToSetNextOrPrevPageUrl:(state ,action)=>{
          state.previousPageUrl = action.payload.prev
          state.nextPageUrl = action.payload.next
        } ,
        functionTriggeredOnPreviousButton:(state , action)=>{
           state.currentPage = action.payload
           state.nextOrPrevflag = false
           sessionStorage.setItem('flagUrl' , false)

        } ,
        functionTriggeredOnNextButton:(state , action)=>{
          state.currentPage = action.payload
          state.nextOrPrevflag = true
          sessionStorage.setItem('flagUrl' , true)
        } ,
        functionForProductsYetToBeLinked:(state , action)=>{
          state.productsYetToBeLinked=action.payload
        } ,
        functionToGetCurrentTabIndex:(state , action)=>{
          state.tabIndex = action.payload
          state.currentPage=1
        } ,
        functionToSetInProgressFlag:(state , action)=>{
          state.inProgressFlag = action.payload
        } ,
 
        
      
    }

})

export const { functionToSetInProgressFlag , functionToGetCurrentTabIndex , functionForProductsYetToBeLinked ,functionTriggeredOnNextButton , functionTriggeredOnPreviousButton , functionToSetNextOrPrevPageUrl ,loginCredentialsFunction ,functionToCountBadge , functionToSearchvalue , functionToSearchResultOptionArray ,  functionToSearchResultArray , functionToSetSelectedItem ,functionToStoreDisplayedDataOnTable , functionTogetTotalNoOfItems} = listSlice.actions
export default listSlice.reducer