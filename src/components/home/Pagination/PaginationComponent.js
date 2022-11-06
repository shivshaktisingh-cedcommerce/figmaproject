import React from 'react'
import {ButtonGroup, Button , Icon} from '@shopify/polaris';
import { ChevronLeftMinor } from '@shopify/polaris-icons';
import { ChevronRightMinor } from '@shopify/polaris-icons';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import { functionTriggeredOnNextButton, functionTriggeredOnPreviousButton } from '../../../redux/listingSlice';


 function PaginationComponent(props) {
    const prevFunction=()=>{
        props.dispatch(functionTriggeredOnPreviousButton())
    }
    const nextFunction=()=>{
        props.dispatch(functionTriggeredOnNextButton())

    }
  return (
    <ButtonGroup>
      <Button onClick={prevFunction}><Icon source={ChevronLeftMinor} color="base"/></Button>
      <Button>{props.state.list.currentPage}</Button> 
      <span>/{props.state.list.totalNoOfPages} page(s)</span>
      <Button onClick={nextFunction}><Icon source={ChevronRightMinor} color="base"/></Button>
    </ButtonGroup>
  )
}
export default UpdatedComponent(PaginationComponent)
