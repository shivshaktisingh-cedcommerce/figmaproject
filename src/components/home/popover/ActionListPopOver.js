import {Button, Popover, ActionList} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function PopoverWithActionListExample() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
     Admin Actions
    </Button>
  );

  return (
    <div >
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
        preferredPosition="below"
      >
        <ActionList
          actionRole="menuitem"
          items={[{content: 'Remove Error Tag'}, {content: 'Remove Process Tag'} , {content: 'Remove Status'} , {content: 'Remove Product Matching From Amazon'} , {content: 'Remove Products from Amazon Listing'} , {content: 'Removing Asin'}]}
        />
      </Popover>
    </div>
  );
}

export default PopoverWithActionListExample