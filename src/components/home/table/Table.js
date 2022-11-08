import React, { useEffect } from 'react';
import styles from "../Home.module.css";
import {  Card, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ProductTable from '../ProductTable';
import UpdatedComponent from '../../hoc/UpdatedComponent';
import {Badge} from '@shopify/polaris';
import BannerList from '../banner/BannerList';
import SearchComponent from '../search/SearchComponent';
import { functionToGetCurrentTabIndex } from '../../../redux/listingSlice';
import RemovableTagComponent from '../tags/RemovableTagComponent';
import PopoverWithActionListExample from '../popover/ActionListPopOver';
import ModalExampleSync from '../../modal/ModalComponentSync';
import ModalExampleAmazon from '../../modal/ModalComponentAmazon';
import PopoverWithActionListExampleBulkUpdate from '../popover/BulkUpdate';
import FilterOptions from '../filtercomponents/FilterComponent.js';
import { FilterData } from '../filtercomponents/AllFilterConstants';




 function Table(props) {

  const[selected , setSelected]=useState(props.state.list.tabIndex)
  const handleTabChange = useCallback((selectedTabIndex) => {
      setSelected(selectedTabIndex)
      sessionStorage.setItem('tabindex',selectedTabIndex)
      props.dispatch(functionToGetCurrentTabIndex(selectedTabIndex))
    },[],);
    useEffect(()=>{
      setSelected(props.state.list.tabIndex)
    },[props.state.list.tabIndex])

      
    const tabs = [
        {
          id: 'all-customers-1',
          content: 'All',
          panelID: 'All',
        },
        {
          id: 'accepts-marketing-2',
          content: <><span>Not Listed</span><span><Badge>{props.state.list.countBadge?props.state.list.countBadge.null:""}</Badge></span></>,
          panelID: 'Not Listed',
        },
        {
          id: 'repeat-customers-3',
          content: <><span>Inactive</span><span><Badge status="critical">{props.state.list.countBadge?props.state.list.countBadge.Inactive:""}</Badge></span></>,
          panelID: 'Inactive',
        },
        {
          id: 'prospects-4',
          content: <><span>Incomplete</span><span><Badge status="warning">{props.state.list.countBadge?props.state.list.countBadge.Incomplete:""}</Badge></span></>,
          panelID: 'Incomplete',
        },
        {
          id: 'repeat-customers-5',
          content: <><span>Active</span><span><Badge status="success">{props.state.list.countBadge?props.state.list.countBadge.Active:""}</Badge></span></>,
          panelID: 'Active',
        },
        {
          id: 'prospects-6',
          content: <><span>Error</span></>,
          panelID: 'Error',
        },
      ];

      const [allFilter , setAllFilter] = useState(FilterData)

      useEffect(()=>{
        sessionStorage.setItem('filter',JSON.stringify(allFilter))
      },[allFilter])

  return (
    <div className={styles.table_main_div}>
     <div className={styles.listing_heading_div}>
      <p className={styles.listing_heading_h1}>Listings</p>
      <p>The section will enable you to manage all your listings of your active Amazon account. The feature helps you view the status of your listings along with performing actions like Bulk upload, running Sync Status, Amazon Lookup, or linking your unlinked Products by getting directed to the Product Linking section.</p>
     </div>
     <div style={{width:"100%" , display:"flex",justifyContent:"center"}}><BannerList/></div>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
        <div className={styles.search_field_div}>
          <SearchComponent/>
         <FilterOptions allFilter={allFilter} setAllFilter={setAllFilter}/>
          <ModalExampleSync/>
          <ModalExampleAmazon/>
          <PopoverWithActionListExampleBulkUpdate/>
          <PopoverWithActionListExample/>
        </div>
        <RemovableTagComponent tagContent={tabs[selected].panelID}/>
        <ProductTable apifilter={tabs[selected].content} check={1}/>
      </Card>
    </div>
  )
}

export default UpdatedComponent(Table)


