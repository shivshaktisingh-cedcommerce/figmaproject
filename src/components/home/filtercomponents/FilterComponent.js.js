import { Filters, Select, TextField } from "@shopify/polaris";
import React, {  useEffect, useMemo, useState } from "react";
import { functionForMoreOptionsFilteredArray, functionToRemoveTagFromMoreOptionsFromArray } from "../../../redux/FilterSlice";
import {  filterHeader, filterUrl, } from "../../../utils/AllUtilities";
import FetchApiCustom from "../../customhook/FetchApiCustom";
import UpdatedComponent from "../../hoc/UpdatedComponent";
// import { filterHeaders, filterUrl } from "../../../api/apiConstants";

const FilterOptions = (props) => {
  const[appendFilterUrl , setAppendFilterUrl]=useState([])
  const [extractDataFromApi] = FetchApiCustom()
  const [filterOptions, setFilterOptions] = useState({
    vendor: [],
    status: [],
    variant: [],
    parent_type: [],
  });
  const inventoryOptions = [
    { label: "Equals", value: "1" },
    { label: "Not Equals", value: "2" },
    { label: "Greater Than or Equals to", value: "8" },
    { label: "Less Than or Equals to", value: "9" },
  ];

  const skuOptions = [
    { label: "Equals", value: "1" },
    { label: "Not Equals", value: "2" },
    { label: "Contains", value: "3" },
    { label: "Does not Contains", value: "4" },
    { label: "Starts With", value: "5" },
    { label: "Ends With", value: "6" },
  ];
  const vendorOptions = [
    { label: "Equals", value: "1" },
    { label: "Not Equals", value: "2" },
  ];
  useEffect(() => {
    extractDataFromApi(filterUrl , filterHeader).then((res)=>{
        if (res.success) {
          let tempData = res.data;
          let vendor = tempData.filter((item) => item.title === "Vendor" );
          let status = tempData.filter((item) => item.title === "Product status");
          let variant = tempData.filter(
            (item) => item.title === "Variant attributes"
          );
          let parent_type = tempData.filter((item) => item.title === "Type");
          setFilterOptions({ vendor, status, variant, parent_type });
        } else alert(res.message);
      });
  }, []);

  const getLabel = (value , tempArray)=>{
    if(tempArray==="inventoryOptions")
    inventoryOptions.map((item)=>{
      if(item.value===value){
        return item.label
      }
    })
  
  }

  const filters = [
    {
      key: "inventory",
      label: "Inventory",
      filter: (
        <>
          <Select
            options={inventoryOptions}
            value={props.allFilter.Inventory.selectValue}
            onChange={(value) => {
              props.allFilter.Inventory.selectValue = value; 
              props.setAllFilter({ ...props.allFilter });
            }}
          />
          <TextField
            label="Tagged with"
            value={props.allFilter.Inventory.textValue}
            type={"number"}
            onChange={(value) => {
                props.allFilter.Inventory.textValue = value;
                props.allFilter.Inventory.flag = value ? true  : false
                props.allFilter.Inventory.label = getLabel(value , "inventoryOptions")
                props.setAllFilter({ ...props.allFilter });
            }}
            autoComplete="off"
            labelHidden
          />
        </>
      ),
    },
    {
      key: "sku",
      label: "SKU",
      filter: (
        <>
          <Select
            options={skuOptions}
            value={props.allFilter.SKU.selectValue}
            onChange={(value) => {
                props.allFilter.SKU.selectValue = value;
                props.allFilter.SKU.label = skuOptions.filter((item)=>{if(item.value===value){
                  return item.label
                }}) 
                props.setAllFilter({ ...props.allFilter });
            }}
          />
          <TextField
            label="Tagged with"
            value={props.allFilter.SKU.textValue}
            onChange={(value) => {
                props.allFilter.SKU.textValue = value;
                props.allFilter.SKU.flag = value ? true  : false
                props.setAllFilter({ ...props.allFilter });
            }}
            autoComplete="off"
            labelHidden
          />
        </>
      ),
    },
    {
      key: "tags",
      label: "Tags",
      filter: (
        <>
          <TextField
            label="Tagged with"
            value={props.allFilter.Tags.textValue}
            onChange={(value) => {
                props.allFilter.Tags.flag = value ? true  : false
                props.allFilter.Tags.textValue = value;
                props.setAllFilter({ ...props.allFilter });
            }}
            autoComplete="off"
            labelHidden
          />
        </>
      ),
    },
    {
      key: "product_type",
      label: "Product Type",
      filter: (
        <>
          <TextField
            label="Tagged with"
            value={props.allFilter["Product type"].textValue}
            onChange={(value) => {
                props.allFilter['Product type'].flag = value ? true  : false
                props.allFilter["Product type"].textValue = value;
                props.setAllFilter({ ...props.allFilter });
            }}
            autoComplete="off"
            labelHidden
          />
        </>
      ),
    },
    {
      key: "vendor",
      label: "Vendor",
      filter: (
        <>
          <Select 
          options={vendorOptions}
          value={props.allFilter.Vendor.selectValue}
          onChange={(value) => {
            props.allFilter.Vendor.selectValue = value;
            props.setAllFilter({...props.allFilter})
          }}
           />
          <Select 
            options={filterOptions.vendor}
            value={props.allFilter.Vendor.textValue}
            onChange={(value) =>{
                props.allFilter.Vendor.flag = value ? true  : false
                props.allFilter.Vendor.textValue = value;
                props.setAllFilter({...props.allFilter})
            }} 
        />
        </>
      ),
    },
    {
      key: "template",
      label: "Template Name",
      filter: (
        <Select 
            value="No template found"
            disabled
        />
      ),
    },
    {
      key: "product_status",
      label: "Product Status",
      filter: <Select 
        options={filterOptions.status} 
        value={props.allFilter["Product Status"].selectValue}
        onChange={(value)=>{
            props.allFilter["Product Status"].flag = value ? true  : false
            props.allFilter["Product Status"].selectValue = value
            props.setAllFilter({...props.allFilter})
        }}
        />,
    },
    {
      key: "variant",
      label: "Variant Attributes",
      filter: <Select 
      options={filterOptions.variant} 
      value={props.allFilter["Variant attributes"].textValue}
      onChange={(value)=>{
        props.allFilter["Variant attributes"].flag = value ? true  : false
        props.allFilter["Variant attributes"].textValue = value
        props.setAllFilter({...props.allFilter})
    }}
      />,
    },
    {
      key: "activity",
      label: "Activity",
      filter: (
        <>
          <TextField
            label="Tagged with"
            value={props.allFilter.Activity.textValue}
            onChange={(value) => {
                props.allFilter.Activity.flag = true
                props.allFilter.Activity.textValue = value;
                props.setAllFilter({ ...props.allFilter });
            }}
            autoComplete="off"
            labelHidden
          />
        </>
      ),
    },
    {
      key: "type",
      label: "Type",
      filter: <Select options={filterOptions.parent_type} 
        value={props.allFilter.Type.selectValue}
        onChange={(value)=>{
            props.allFilter.Type.flag = value
            props.allFilter.Type.selectValue = value
            props.setAllFilter({...props.allFilter})
        }}

      />,
    },
  ];

  const removeFilter = (key) =>{
  var temp = props.state.filter.moreOptionsFilteredArray.filter((item)=>{
    if(item!==undefined){
      return item.value!==props.allFilter[key].value
    }
     })
     console.log(temp)

     props.dispatch(functionToRemoveTagFromMoreOptionsFromArray(temp))
    // props.allFilter[key].flag = false
    // props.allFilter[key].textValue = ''
    // console.log(props.state.list.moreOptionsFilteredArray)
    props.setAllFilter({...props.allFilter})
  }
  const removeAllFilter = () =>{
    Object.keys(props.allFilter).map((item)=>{
        props.allFilter[item].flag = false
        props.allFilter[item].textValue = ''
    })
    props.setAllFilter({...props.allFilter})
  }
  const appliedFilters = useMemo(()=>{
    let t = []
    Object.keys(props.allFilter).map(item =>{
        if(props.allFilter[item].flag){
            t.push( {
                key : props.allFilter[item].value,
                label : disambiguateLabel(item , props.allFilter[item].searchValue , props.allFilter[item].textValue),
                onRemove : ()=>removeFilter(item)
            })
        }
    })
    return t
  },[props])



  
  useEffect(()=>{
    let temp=[]
    let tempArray=[...appendFilterUrl]
    for(let i in props.allFilter){
      for (let j in props.allFilter[i]){
     if(props.allFilter[i]["flag"]===true){
      // console.log(allFilter[i])
      temp.push(props.allFilter[i])
     }
      }
    }
    const ids = temp.map(o => o.id)
    const filtered = temp.filter(({id}, index) => !ids.includes(id, index + 1))
    setAppendFilterUrl(currrent=>[...appendFilterUrl ,filtered[0]])
    tempArray=[...tempArray , filtered[0]]
     
  if(tempArray.length>1){
    props.dispatch(functionForMoreOptionsFilteredArray(tempArray))
  }
  
  },[props.allFilter])

  return (
    <>
    <Filters 
        filters={filters || []}
        appliedFilters={appliedFilters}
        onClearAll={removeAllFilter}
        hideQueryField
    >
    </Filters>
    </>
    
  )
  function disambiguateLabel(key, select , text) {
    return `${key} ${select} ${text}`
  }
};

export default UpdatedComponent(FilterOptions);
