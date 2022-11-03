import {Image} from 'antd';
export const target_marketplace = "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9";
export const apiFilter=["All" , "Not Listed" , "Inactive" , "Incomplete" , "Active" , "Error"]
export const bodydata ={
    type: "GET",
    headers: {
        appTag: "amazon_sales_channel",
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjk2ZDYwZDVlMzE3NjI3NThiMmY5Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4OTA3Mzc0LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNjIxMTZlNTdiNGE3NjNlYzM5YWY5MiJ9.FXwul26U6GG2d9Wrfh5lNu-ikW_vwZ0tbBdjmoVTWhF3tOibyff7buM3tuIcgOkti9UvBpKtTo-SRU8A5UNEah37q1K1k-GQOSdwYxO1Q4Z9oF5AkIk8whl_-gZymjUqlMO0fjKJie6a_A4vxYk-PF8DEUHHOsc0MHeQA7TuaHR95fbV281SVXcmEP17_snN-eNsdOoP70vqiER3BkLV7Nr78JoSNZ38iqqznHEDKkLAgr2p3qI4OKZ7S6SiQglh1YfZgt4oZho868e8RAuV9QSomVpuuXAmyBHDGbUPrLTqvhj_CnzvQzEiNDnu__oh9UbWkTdZdAZhY_S5uzBMYg",
        "Ced-Source-Id": 476,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 479,
        "Ced-Target-Name": "amazon" ,
        appCode: "eyJzaG9waWZ5IjoiYW1hem9uX3NhbGVzX2NoYW5uZWwiLCJhbWF6b24iOiJhbWF6b24ifQ=="

    },
    payload:{
        "source":{
            "marketplace":"shopify",
            "shopId":"500"
        },
        "target":{
            "marketplace":"amazon",
            "shopId":"640"
        }  ,
        "count":1  
    }
        
}
export const columns = [
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