import React, { useCallback, useState } from 'react'
import {SearchMinor} from '@shopify/polaris-icons';
import {Autocomplete, Icon } from '@shopify/polaris';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import { functionToSearchvalue, functionToSetSelectedItem } from '../../../redux/listingSlice';
import styles from "../Home.module.css"

 function SearchComponent(props) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const deselectedOptions = props.state.list.searchResultArray.map((item)=>{
        return {label:<div className={styles.search_options_div}><div><img src = {item.main_image} style={{width:"50px"}} alt=""/></div><div><p>{item.title}</p><p>{"Brand:" +item.brand}</p></div></div> , value:item.container_id}
       })
    const [options, setOptions] = useState(deselectedOptions);

    const updateSelection = useCallback((selected) => {
             props.dispatch(functionToSetSelectedItem(selected[0]))
        },[options],);
    
    const updateText = useCallback((value) => {
          setInputValue(value);
          props.dispatch(functionToSearchvalue(value))
          if (value === '') {
            setOptions(deselectedOptions);
            return;
          }
        },[deselectedOptions],);

    const textField = (
        <Autocomplete.TextField
          onChange={updateText}
          value={inputValue}
          prefix={<Icon source={SearchMinor} color="base" />}
          placeholder="Search"
        />
      );
  return (
    <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
  )
}

export default UpdatedComponent(SearchComponent)