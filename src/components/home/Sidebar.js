import React from 'react'
import { HomeMajor  ,OrdersMajor ,  ProductsMajor , CustomersMajor , AnalyticsMajor , MarketingMajor , DiscountsMajor ,AppsMajor ,OnlineStoreMajor ,  PointOfSaleMajor} from '@shopify/polaris-icons';
import styles from './Home.module.css';
import {Frame, Navigation} from '@shopify/polaris';



export default function Sidebar() {
  return (
    <div className={styles.sidebar_main_div}>
       
       
       <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '/',
              label: 'Home',
              icon: HomeMajor,
            },
            {
              url: '/',
              label: 'Orders',
              icon: OrdersMajor,
              badge: '15',
            },
            {
              url: '/',
              label: 'Products',
              icon: ProductsMajor,
            },
            {
              url: '/',
              label: 'Customer',
              icon: CustomersMajor,
            },
            {
              url: '/path/to/place',
              label: 'Analytics',
              icon: AnalyticsMajor,
            },
            {
              url: '/path/to/place',
              label: 'Marketing',
              icon: MarketingMajor,
            },
            {
              url: '/',
              label: 'Discounts',
              icon: DiscountsMajor,
            },
            {
              url: '/path/to/place',
              label: 'Apps',
              icon: AppsMajor,
            },
           
          ]}
        />
      </Navigation>
    </Frame>
    </div>
  )
}
