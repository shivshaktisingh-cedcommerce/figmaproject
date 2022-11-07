import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function ModalExampleSync() {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Sync Staus</Button>;

  return (
    <div >
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Sync Status"
        primaryAction={{
          content: 'Proceed',
          onAction: handleChange,
        }}
        
      >
        <Modal.Section>
          <TextContainer>
            <div>
                <p>It will search sku(s) in your Amazon’s seller panel. For all the products with matching sku(s), status of main products will shown under Amazon Status and variant’s status will reflect on Edit Product page.</p>
                <p>Do you want to proceed with matching all the product(s) from Amazon to that on app ?</p>          
            </div>
           
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}
export default ModalExampleSync