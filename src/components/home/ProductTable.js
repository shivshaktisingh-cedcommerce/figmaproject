import React, { useEffect, useState } from 'react'
import FetchApiCustom from '../FetchApiCustom'
import { DownOutlined } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table ,Image} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import {Button} from '@shopify/polaris';


export default function ProductTable(props) {
    const [data , extractDataFromApi] = FetchApiCustom()
  const [showfooter, setShowFooter] = useState(false);
     const [dataSource , setDataSource]=useState([])
    const appendparam=["","filter[cif_amazon_multi_inactive][1]=","filter[items.status][1]=","filter[items.status][1]=","filter[items.status][1]","filter[cif_amazon_multi_activity][1]=error&productOnly=true"]
    const[bodydata , setBodydata]=useState({
        type: "GET",
        headers: {
            appTag: "amazon_sales_channel",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4NzMxOTc2LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNWY2NDQ4YzQxY2M2MjdhMzBjNmIyMiJ9.o0XvqNpmiAaXQgWC8LgaBrhx6Kjc6rwm0vi-aG-ezZHp3Ph1jcaBqKQq1u9PQSwiCjU6US8xiqMbN_l5JYEwmPOWWQF43Fdt8V2i_dYp2L4mj51rKn9pH7xCloNPAiqCAp7IlfdwXU2NL5cYlb8p4Ve9axRKuPaZ6FpEL49fP8zjlT5gsfR7lr5UD_iKmBH-F-R4ORgQC3vR0CfsW42XXebfTiKf5fh2qBAIrjtSPJyO0jgNxLCTppnT3ruBf3yDL7EcAOFXzUZn_G8NsOSaZp5AvMWIMDkpmBO0VvgkIqSuYOlICki6riprysfwhuwU1XAtpNwI6N571dfUTPhXsw",
            "Ced-Source-Id": 500,
            "Ced-Source-Name": "shopify",
            "Ced-Target-Id": 530,
            "Ced-Target-Name": "amazon" ,
            appCode: "eyJzaG9waWZ5IjoiYW1hem9uX3NhbGVzX2NoYW5uZWwiLCJhbWF6b24iOiJhbWF6b24ifQ=="

        },
        payload:{
            "source":{
                "marketplace":"shopify",
                "shopId":"507"
            },
            "target":{
                "marketplace":"amazon",
                "shopId":"509"
            }  ,
            "count":1  
        }
            
})


const columns = [
    {
      title: 'Image',
      dataIndex: 'main_image',
      key: 'Image',
      render: (img) => <Image src={img} width={100} alt=""/>,
      width:"10%"
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Product Details',
      dataIndex: 'Product Details',
      key: 'Product Details',
    },
    {
      title: 'Template',
       dataIndex: 'Template',
       key: 'Template',
    },
    {
       title: 'Inventory',
       dataIndex: 'Inventory',
       key: 'Inventory',
    },
    {
        title: 'Amazon Status',
        dataIndex: 'Amazon Status',
        key: 'Amazon Status',
     },
    {
       title: 'Activity',
       dataIndex: 'Activity',
       key: 'Activity',
    },
    {
       title: 'Actions',
       dataIndex: 'Actions',
       key: 'Actions',
    },
   
  ];

 const findProductDetails=(item)=>{
    if(item.items.length===1){
        return <div>
        <p>Price:{item.items[0].price}</p>
        <p>Barcode:{item.items[0].barcode}</p>
        <p>SKU:{item.items[0].sku}</p>
        <p>ASIN:{item.items[0].asin?item.asin:""}</p>
      </div>
    }
    if(item.items.length>1){
        return <div>
        <p>SKU:{item.items[0].sku}</p>
        <p>ASIN:{item.items[0].asin?item.asin:""}</p>
      </div>
    }
}

 const findInventory=(d)=>{
    var quantity = 0;
    if(d.items.length===1){
        return <p>{d.items[0].quantity} in stock </p>
    }
    if(d.items.length>1){
        d.items.map((subItem)=>{
         quantity = quantity + subItem.quantity?subItem.quantity:0
        })
        return <p>{quantity} in stock for {d.items.length} variants</p>
    }
 }

 const findAmazonStatus=(d)=>{
  
    if(d.items.length===1){
        return <p>Not Listed</p>
    }

    if(d.items.length>1){
        return <p>Not Listed</p>
    }
 }

 const findChildren=(d)=>{
    let t = { "Image":d.main_image, "Title":d.title , "Product Details":"" , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":"" , "Amazon Status":"" , "Activity":"" , "Actions":"" }
    // console.log(d)
 }


  useEffect(()=>{
    let temp=[];
    data && data.map((item)=>{
        item.data.rows.map((d)=>{
            if(d.type==="simple"){
                let t = { "main_image":d.main_image, "Title":d.title , "Product Details":findProductDetails(d) , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":findInventory(d) , "Amazon Status":findAmazonStatus(d) , "Activity":"--" , "Actions":<Button>:</Button> }
                temp.push(t)
            }
            if(d.type==="variation"){
                    let t = { "main_image":d.main_image, "Title":d.title , "Product Details":findProductDetails(d) , "Template":d.profile?d.profile.profile_name:"N/A" , "Inventory":findInventory(d)  , "Amazon Status":findAmazonStatus(d) , "Activity":"--" , "Actions":<Button>:</Button> ,children:findChildren(d)}
                    temp.push(t)
               
            }
        })
        setDataSource([...temp])
    })
  },[data])
  const tableProps = {
    footer:showfooter
  }

  

    useEffect(()=>{
        var url = "https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts?";
        let temp = props.apifilter==="All"?"":props.apifilter
        url = url + appendparam[Number(sessionStorage.getItem('tabindex'))] + temp 
            extractDataFromApi(url , bodydata)
    },[props.apifilter])

    useEffect(()=>{
        
    },[data])
   
  return (
    <div>
       <Table
        {...tableProps}
        columns={columns}
        dataSource={dataSource}
       
      />
    </div>
  )
}
