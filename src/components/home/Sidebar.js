import React ,{useState , useEffect}from 'react'
import { HomeMajor  ,OrdersMajor ,  ProductsMajor , CustomersMajor , AnalyticsMajor , MarketingMajor , DiscountsMajor ,AppsMajor ,OnlineStoreMajor ,  PointOfSaleMajor} from '@shopify/polaris-icons';
import styles from './Home.module.css';
import {Frame, Navigation} from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {
  const nav = useNavigate()

  const [currentSelectedPage , setCurrentSelectedPage]=useState([false , false , false ,false , false ,false , false ,false , false])
  
  const renderPageFunction=(index , page)=>{
   var temp = [...currentSelectedPage];
   temp.map((item , subIndex)=>{
    temp[subIndex]=false
   })
   temp[index]=true;
   setCurrentSelectedPage(temp)
   nav(`/home/${page}`)
   sessionStorage.setItem('currentSideTabSelectedIndex' , index)
  }
  useEffect(()=>{
   var temp =[...currentSelectedPage]
    temp[Number(sessionStorage.getItem('currentSideTabSelectedIndex'))] = true;
    setCurrentSelectedPage(temp)
  },[])

  return (
    <div className={styles.sidebar_main_div}>
       <Frame>
      <Navigation location="table">
        <Navigation.Section
          items={[
            { 
              label: 'Home',
              icon: HomeMajor,
              selected:currentSelectedPage[0] ,
              onClick:()=>renderPageFunction(0 ,'dummy')
            },
            {
              label: 'Orders',
              icon: OrdersMajor,
              selected:currentSelectedPage[1] ,
              badge: '15',
              onClick:()=>renderPageFunction(1 ,'dummy')

            },
            {
              label: 'Products',
              icon: ProductsMajor,
              selected:currentSelectedPage[2] ,
              onClick:()=>renderPageFunction(2 ,'dummy')

            },
            {
              label: 'Customer',
              icon: CustomersMajor,
              selected:currentSelectedPage[3] ,
              onClick:()=>renderPageFunction(3 ,'dummy')

            },
            {
              label: 'Analytics',
              icon: AnalyticsMajor,
              selected:currentSelectedPage[4] ,
              onClick:()=>renderPageFunction(4 ,'dummy')

            },
            {
              label: 'Marketing',
              icon: MarketingMajor,
              selected:currentSelectedPage[5] ,
              onClick:()=>renderPageFunction(5 ,'dummy')

            },
            {
              label: 'Discounts',
              icon: DiscountsMajor,
              selected:currentSelectedPage[6] ,
              onClick:()=>renderPageFunction(6 ,'dummy')

            },
            {
              label: 'Apps',
              icon: AppsMajor,
              selected:currentSelectedPage[7] ,
              onClick:()=>renderPageFunction(7 ,'dummy')

            },
            { 
              label: 'Listing',
              selected:currentSelectedPage[8] ,
              onClick:()=>renderPageFunction(8 ,'table')

            },
           
          ]}
        />
      </Navigation>
    </Frame>
    </div>
  )
}
