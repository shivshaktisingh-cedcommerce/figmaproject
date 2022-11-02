import React, { useEffect, useMemo } from 'react';
import styles from './Home.module.css';
import { Button, Card, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ProductTable from './ProductTable';
import UpdatedComponent from '../hoc/UpdatedComponent';
import { Badge } from 'antd';
import {Autocomplete, Icon} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';



 function Table(props) {
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

    const deselectedOptions = useMemo(
      () => [
        {value: 'rustic', label: 'Rustic'},
        {value: 'antique', label: 'Antique'},
        {value: 'vinyl', label: 'Vinyl'},
        {value: 'vintage', label: 'Vintage'},
        {value: 'refurbished', label: 'Refurbished'},
      ],
      [],
    );
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
  
    const updateText = useCallback(
      (value) => {
        setInputValue(value);
  
        if (value === '') {
          setOptions(deselectedOptions);
          return;
        }
  
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
      },
      [deselectedOptions],
    );
  
    const updateSelection = useCallback(
      (selected) => {
        const selectedValue = selected.map((selectedItem) => {
          const matchedOption = options.find((option) => {
            return option.value.match(selectedItem);
          });
          return matchedOption && matchedOption.label;
        });
  
        setSelectedOptions(selected);
        setInputValue(selectedValue[0]);
      },
      [options],
    );
  
    const textField = (
      <Autocomplete.TextField
        onChange={updateText}
        value={inputValue}
        prefix={<Icon source={SearchMinor} color="base" />}
        placeholder="Search"
      />
    );
   
 
    const tabs = [
        {
          id: 'all-customers-1',
          content: 'All',
          panelID: 'all-customers-content-1',
        },
        {
          id: 'accepts-marketing-2',
          content: <><span>Not Listed</span><span><Badge count={props.state.list.countBadge.length>0?props.state.list.countBadge[0].null:""} /></span></>,
          panelID: 'accepts-marketing-content-2',
        },
        {
          id: 'repeat-customers-3',
          content: <><span>Inactive</span><span><Badge count={props.state.list.countBadge.length>0?props.state.list.countBadge[1].Inactive:""} /></span></>,
          panelID: 'repeat-customers-content-3',
        },
        {
          id: 'prospects-4',
          content: <><span>Incomplete</span><span><Badge count={"O"} /></span></>,
          panelID: 'prospects-content-4',
        },
        {
          id: 'repeat-customers-5',
          content: <><span>Active</span><span><Badge count={"O"} /></span></>,
          panelID: 'repeat-customers-content-5',
        },
        {
          id: 'prospects-6',
          content: <><span>Error</span><span><Badge count={"O"} /></span></>,
          panelID: 'prospects-content-6',
        },
      ];

  return (
    <div className={styles.table_main_div}>
     <div className={styles.listing_heading_div}>
      <p className={styles.listing_heading_h1}>Listings</p>
      <p>The section will enable you to manage all your listings of your active Amazon account. The feature helps you view the status of your listings along with performing actions like Bulk upload, running Sync Status, Amazon Lookup, or linking your unlinked Products by getting directed to the Product Linking section.</p>
     </div>
        <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      </Tabs>
      <div className={styles.action_button}><Button>Sync Status</Button><Button>Amazon Lookup</Button><Button>Bulk Update</Button></div>
      <div className={styles.search_field_div}>
        <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
      <Button>More Filters</Button>
      <Button>Actions</Button></div>
      <ProductTable apifilter={tabs[selected].content} check={1}/>
      
    </Card>
    </div>
  )
}

export default UpdatedComponent(Table)