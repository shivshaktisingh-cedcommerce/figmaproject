import React, { useCallback, useState } from 'react'
import {Button, Icon ,Popover, ActionList} from '@shopify/polaris';
import {
  MobileVerticalDotsMajor
} from '@shopify/polaris-icons';

export default function PopoverComponent() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

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
                      items={[{content: 'Edit Product'}, {content:'Amazon Lookup'}]}
                    />
                  </Popover>
                </div>
    )
}
