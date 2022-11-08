import {Badge, Button, Icon, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback, useEffect} from 'react';
import UpdatedComponent from '../hoc/UpdatedComponent';
import {Card, Tabs} from '@shopify/polaris';
import {
  RiskMinor
} from '@shopify/polaris-icons'


function ModalExample(props) {
  
  const [productError , setProductError]=useState([])
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const tabs = [
    {
      id: 'all-customers-fitted-3',
      content: (
        <span>
          Product Errors <Badge status="new">1</Badge>
        </span>
      ),
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-fitted-content-3',
    },
    {
      id: 'accepts-marketing-fitted-3',
      content: (
        <span>
          Variant Errors <Badge status="new">0</Badge>
        </span>
      ),
      panelID: 'accepts-marketing-fitted-content-3',
    },
  ];
  const [active, setActive] = useState(props.state.list.inProgressFlag);
  const handleChange = useCallback((index) => {
    setActive(!active)
   }, [active]);
  
  //  console.log(props.errorReport)
    useEffect(()=>{
    
      let temp =[]
      if(props.errorReport.error.product){
        props.errorReport.error.product.map((item)=>{
           temp.push(item)
        })
      }
     
      //  temp.push(props.errorReport.error.product[0])
      setProductError(temp)
      

  },[active])

  const activator =  <Button plain onClick={handleChange}>View error</Button>;
    
  return (
    <div >
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="ERROR"
        primaryAction={{
          content: 'Fix Errors',
          onAction: handleChange,
        }}
       
      >
        <Modal.Section>
          <TextContainer>
          <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section>
         
          {selected===0?<div><h2>Inventory</h2><p style={{display:"flex"}}><Icon
  source={RiskMinor}
  color="critical"
/>{productError[selected]}</p></div>:""}
        </Card.Section>
      </Tabs>
    </Card>
           
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default UpdatedComponent(ModalExample)
