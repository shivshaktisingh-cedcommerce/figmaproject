import React, { useEffect, useState } from 'react'
import FetchApiCustom from '../FetchApiCustom'
import {  Table } from 'antd';
import {Button, Icon} from '@shopify/polaris';
import { apiFilter, bodydata, columns } from './TableHeaders';
import UpdatedComponent from '../hoc/UpdatedComponent';
import { functionToCountBadge } from '../../redux/listingSlice';
import {
  MobileVerticalDotsMajor
} from '@shopify/polaris-icons';


function ProductTable(props) {
    const appendparam=["","filter[cif_amazon_multi_inactive][1]=","filter[items.status][1]=","filter[items.status][1]=","filter[items.status][1]","filter[cif_amazon_multi_activity][1]=error"]
    const [extractDataFromApi] = FetchApiCustom()
    const[data , setData]=useState()
    const [dataSource , setDataSource]=useState([])
   

 const findProductDetails=(item , flag)=>{
    if(flag===0 && item.items.length===1){
        return <div>
        <p>Price:{item.items[0].price}</p>
        <p>Barcode:{item.items[0].barcode}</p>
        <p>SKU:{item.items[0].sku}</p>
        <p>ASIN:{item.items[0].asin?item.asin:""}</p>
      </div>
    }
    if(flag===0 && item.items.length>1){
        return <div>
        <p>SKU:{item.items[0].sku}</p>
        <p>ASIN:{item.items[0].asin?item.asin:""}</p>
      </div>
    }
     if(flag===1){
      return <div>
      <p>Price:{item.price}</p>
      <p>Barcode:{item.barcode}</p>
      <p>SKU:{item.sku}</p>
      <p>ASIN:{item.asin?item.asin:""}</p>
    </div>
     }
}

 const findInventory=(d , flag)=>{
    var quantity = 0;
    if(flag===0 && d.items.length===1){
        return <p>{d.items[0].quantity} in stock </p>
    }
    if( flag===0 && d.items.length>1){
        d.items.map((subItem)=>{
         quantity = quantity + subItem.quantity?subItem.quantity:0
        })
        return <p>{quantity} in stock for {d.items.length} variants</p>
    }
    if(flag===1){
      return <p>{d.quantity}</p>
    }
 }

 const findAmazonStatus=(d , flag)=>{
    if(flag===0 && d.items.length===1){
          if(Object.keys(d.items[0]).includes('error')){
            return<p>ERROR</p>
          }
          if(Object.keys(d.items[0]).includes('status')){
            return<p>{d.items[0].status}</p>
          }
          else{
            return<p>Not Listed</p>
          }
   
    }
    if(flag===0 && d.items.length>1){
      // console.log(d.items)
      d.items.map((subItem)=>{
        console.log(subItem)
        if(Object.keys(subItem).includes('error') && Object.keys(subItem).includes('status')===-1){
          return<p>Not Listed</p>
        }
        if(Object.keys(subItem).includes('error') && Object.keys(subItem).includes('status')){
          return<p>ERROR</p>
        }
        if((Object.keys(subItem).includes('error')===-1) && Object.keys(subItem).includes('status')){
          if(subItem.status==="Active" || subItem.status==="Inactive" || subItem.status==="Listed"){
            return <p>Some are Listed</p>
          }
        }

      })
     
        return <p>Not Listed</p>
    }
    if(flag===1){
      return <p>{d.status?d.status:"Not Listed"}</p>
  }
 }

 const findChildren=(d)=>{
  let temp=[];
  d.items.map((subItem)=>{
    if(d.container_id!==subItem.source_product_id){
      let t = { "main_image":d.main_image, "Title":d.title , "Product Details":findProductDetails(subItem , 1) , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":findInventory(subItem , 1) , "Amazon Status":findAmazonStatus(subItem , 1) , "Activity":"" , "Actions":<Button><Icon
      source={MobileVerticalDotsMajor}
      color="base"
    /></Button> ,"description":[]}
      temp.push(t)
    }
  })
   return temp;
    
 }


  useEffect(()=>{
    let temp=[];
    data && data.map((item)=>{
        item.data.rows.map((d)=>{
            if(d.type==="simple"){
                let t = { "key": d.source_product_id,"main_image":d.main_image, "Title":d.title , "Product Details":findProductDetails(d , 0) , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":findInventory(d , 0) , "Amazon Status":findAmazonStatus(d , 0) , "Activity":"--" , "Actions":<Button><Icon
                source={MobileVerticalDotsMajor}
                color="base"
              /></Button> ,"description":[]}
                temp.push(t)
            }
            if(d.type==="variation"){
                    let t = { "key": d.source_product_id ,"main_image":d.main_image, "Title":d.title , "Product Details":findProductDetails(d , 0) , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":findInventory(d , 0)  , "Amazon Status":findAmazonStatus(d , 0) , "Activity":"--" , "Actions":<Button><Icon
                    source={MobileVerticalDotsMajor}
                    color="base"
                  /></Button> ,"description":findChildren(d)}
                    temp.push(t)
               
            }
        })
        setDataSource([...temp])
    })
  },[data])

    useEffect(()=>{
      var url = "https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts?";
      url = url + appendparam[Number(sessionStorage.getItem('tabindex'))] + apiFilter[Number(sessionStorage.getItem('tabindex'))]
      extractDataFromApi(url , bodydata).then((res)=>{
        if(res.success===true){
          setData([res])
        }
      })
    },[props])

    useEffect(()=>{
      var url = "https://multi-account.sellernext.com/home/public/connector/product/getStatusWiseCount?";
      url = url + appendparam[Number(sessionStorage.getItem('tabindex'))] + apiFilter[Number(sessionStorage.getItem('tabindex'))] 
      extractDataFromApi(url , bodydata).then((res)=>{
        props.dispatch(functionToCountBadge(res))
     })          
   },[])

   

 
  return (
    <div>
       <Table expandable={{
        expandedRowRender:(record)=>(
          <div style={{margin:0,
          paddingLeft:"35px"
        }}>
          <Table columns={columns}
          dataSource={record.description}
          />
        </div>
        ) ,
        rowExpandable:(record)=>record?.description?.length>0
       }}
        columns={columns}
        dataSource={dataSource}
        scroll={{x:true}}
      />
    </div>
  )
}

export default UpdatedComponent(ProductTable)
