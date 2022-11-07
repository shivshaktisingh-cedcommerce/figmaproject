import {Button, Modal, Stack, DropZone, Checkbox} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function LargeModalExampleImport() {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleCheckbox = useCallback((value) => setChecked(value), []);

  const activator = <Button plain onClick={toggleActive}>Import Products</Button>;

  return (
    <div>
      <Modal
        large
        activator={activator}
        open={active}
        onClose={toggleActive}
        title="Import customers by CSV"
        primaryAction={{
          content: 'Import customers',
          onAction: toggleActive,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: toggleActive,
          },
        ]}
      >
        <Modal.Section>
          <Stack vertical>
            <DropZone
              accept=".csv"
              errorOverlayText="File type must be .csv"
              type="file"
              onDrop={() => {}}
            >
              <DropZone.FileUpload />
            </DropZone>
            <Checkbox
              checked={checked}
              label="Overwrite existing customers that have the same email or phone"
              onChange={handleCheckbox}
            />
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
}
export default LargeModalExampleImport