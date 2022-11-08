import {Banner, List} from '@shopify/polaris';
import React, { useState } from 'react';
import UpdatedComponent from '../../hoc/UpdatedComponent';

function BannerExample(props) {
  const[bannerDisplay , setBannerDisplay]=useState(sessionStorage.getItem('bannerFlag'))
  return (
    sessionStorage.getItem('bannerFlag')===null?<Banner onDismiss={() => {
      sessionStorage.setItem('bannerFlag',false)
      setBannerDisplay(false)
    }}
        title={` ${props.state.list.productsYetToBeLinked} Products are yet to be linked!`}
        action={{content: 'Link Products'}}
        status="warning"
      >
        <List>
        Link Amazon Listings with Shopify products to manage inventory and Amazon orders.
        </List>
      </Banner>:""
  );
}
export default UpdatedComponent(BannerExample)