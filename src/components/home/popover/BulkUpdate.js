import {Button, Popover, ActionList} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ModalWithPrimaryAndSecondaryActionsExampleExport from '../../modal/ExportProductModal';
import LargeModalExampleImport from '../../modal/ImportProductsModal';

function PopoverWithActionListExampleBulkUpdate() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
     Bulk Update
    </Button>
  );

  return (
    <div>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[{content: <LargeModalExampleImport/>}, {content: <ModalWithPrimaryAndSecondaryActionsExampleExport/>}]}
        />
      </Popover>
    </div>
  );
}
export default PopoverWithActionListExampleBulkUpdate