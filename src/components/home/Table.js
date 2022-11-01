import React, { useEffect } from 'react';
import styles from './Home.module.css';
import {Card, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ProductTable from './ProductTable';
import Producttable1 from './Producttable1';


export default function Table() {
    const [selected, setSelected] = useState(0);
   
    const handleTabChange = useCallback(
      (selectedTabIndex) => {
        setSelected(selectedTabIndex)
        sessionStorage.setItem('tabindex',selectedTabIndex)
      },
      [],
    );
    useEffect(()=>{
      setSelected(Number(sessionStorage.getItem('tabindex')))
    },[])
    
 
    const tabs = [
        {
          id: 'all-customers-1',
          content: 'All',
          panelID: 'all-customers-content-1',
        },
        {
          id: 'accepts-marketing-2',
          content: 'Not Listed',
          panelID: 'accepts-marketing-content-2',
        },
        {
          id: 'repeat-customers-3',
          content: 'Inactive',
          panelID: 'repeat-customers-content-3',
        },
        {
          id: 'prospects-4',
          content: 'Incomplete',
          panelID: 'prospects-content-4',
        },
        {
          id: 'repeat-customers-5',
          content: 'Active',
          panelID: 'repeat-customers-content-5',
        },
        {
          id: 'prospects-6',
          content: 'Error',
          panelID: 'prospects-content-6',
        },
      ];
     
    
  return (
    <div className={styles.table_main_div}>
        <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        
      </Tabs>
      <ProductTable apifilter={tabs[selected].content} />
      
       {/* <Producttable1/> */}
    </Card>
    </div>
  )
}
