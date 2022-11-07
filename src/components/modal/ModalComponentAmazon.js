import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function ModalExampleAmazon() {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Amazon Lookup</Button>;

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Amazon Lookup"
        primaryAction={{
          content: 'Proceed',
          onAction: handleChange,
        }}
      
      >
        <Modal.Section>
          <TextContainer>
            <p>
            You can choose to run Amazon Lookup for any number of products you want. This will update the status of those products that are currently under “Not Listed: Offer” status.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default ModalExampleAmazon