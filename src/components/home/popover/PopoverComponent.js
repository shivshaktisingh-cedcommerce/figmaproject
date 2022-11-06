import React, { useCallback, useState } from 'react'
import {Button, Icon ,Popover, ActionList} from '@shopify/polaris';
import {
  MobileVerticalDotsMajor
} from '@shopify/polaris-icons';

export default function PopoverComponent({status}) {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

   const errorItem =[{content: 'Edit Product'}, {content:'Amazon Lookup'},{content: 'Sync Inventory'}, {content:'Sync Price'} , {content:'Sync Image'} ,{content:'Sync Product'} , {content:'Delete Product'}]
   const notListedItem =[{content: 'Edit Product'}, {content:'Amazon Lookup'}]

  // console.log(status.props.children)
  const activator = (
    <Button onClick={togglePopoverActive} >
     <Icon source={MobileVerticalDotsMajor}/>
    </Button>
  );
  return (
<div style={{height: '250px'}}>
                  <Popover
                    active={popoverActive}
                    activator={activator}
                    autofocusTarget="first-node"
                    onClose={togglePopoverActive}
                  >
                    <ActionList
                      actionRole="menuitem"
                      items={status.props.children==='ERROR'?errorItem:notListedItem}
                    />
                  </Popover>
                </div>
    )
}
