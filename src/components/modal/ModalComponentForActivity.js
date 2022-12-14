import {Button, Icon, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback, useEffect} from 'react';
import UpdatedComponent from '../hoc/UpdatedComponent';
import {
    ClockMinor
  } from '@shopify/polaris-icons';
  import {
    AnalyticsMinor
  } from '@shopify/polaris-icons';

function ModalExampleActivity(props) {
  const [active, setActive] = useState(false);
  const [inProgressArray , setInProgressArray]=useState([])

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button plain onClick={handleChange}><Icon
  source={ClockMinor}
  color="base"
/>in Progress</Button>;

useEffect(()=>{
    
    let temp = [...props.currentActivity.process_tags]
    setInProgressArray(temp)
},[props.currentActivity])


  return (
    <div>

      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: 'Refresh to Update Status',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Close',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
           {inProgressArray.map((item , id)=>{
            return <div style={{display:"flex" ,width:"40%"}} key={id}>{id+1+". "}{item}</div>
           })}
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default UpdatedComponent(ModalExampleActivity)