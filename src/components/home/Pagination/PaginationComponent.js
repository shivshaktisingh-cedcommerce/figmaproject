import React, { useEffect } from 'react'
import {ButtonGroup, Button , Icon} from '@shopify/polaris';
import { ChevronLeftMinor } from '@shopify/polaris-icons';
import { ChevronRightMinor } from '@shopify/polaris-icons';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import { functionTriggeredOnNextButton, functionTriggeredOnPreviousButton } from '../../../redux/listingSlice';



 function PaginationComponent(props) {

    const prevFunction=()=>{
      if(props.state.list.currentPage===1){
        sessionStorage.setItem('currentPage' , 1)
      }
   
      if(props.state.list.currentPage>1){
        let currentPage = Number(sessionStorage.getItem('currentPage')) - 1;
        let totalNoOfItems =  sessionStorage.getItem('storeTotalNoOfItems')
        let totalNoOfPages = Math.ceil(totalNoOfItems/50)
        sessionStorage.setItem('currentPage' , currentPage)
        sessionStorage.setItem('totalNoOfPages' ,  totalNoOfPages)
         props.dispatch(functionTriggeredOnPreviousButton(Number(sessionStorage.getItem('currentPage'))))
      }
      
    
        
    }
    const nextFunction=()=>{
      if(props.state.list.currentPage===1){
        sessionStorage.setItem('currentPage' , 1)
      }
      if(props.state.list.currentPage<props.state.list.totalNoOfPages){
        let currentPage = Number(sessionStorage.getItem('currentPage')) + 1;
        let totalNoOfItems =  sessionStorage.getItem('storeTotalNoOfItems')
        let totalNoOfPages = Math.ceil(totalNoOfItems/50)
        sessionStorage.setItem('currentPage' , currentPage )
        sessionStorage.setItem('totalNoOfPages' ,  totalNoOfPages)
        props.dispatch(functionTriggeredOnNextButton(Number(sessionStorage.getItem('currentPage'))))
      }

    }
  return (
    <ButtonGroup>
      <Button onClick={prevFunction} disabled={props.state.list.currentPage===1?true:false}><Icon source={ChevronLeftMinor} color="base"/></Button>
      <Button>{sessionStorage.getItem('currentPage')===null?1:props.state.list.currentPage}</Button> 
      <span>/{props.state.list.totalNoOfPages} page(s)</span>
      <Button onClick={nextFunction} disabled={props.state.list.currentPage===props.state.list.totalNoOfPages?true:false}><Icon source={ChevronRightMinor} color="base"/></Button>
    </ButtonGroup>
  )
}
export default UpdatedComponent(PaginationComponent)
