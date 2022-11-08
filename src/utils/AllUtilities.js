import {Image} from 'antd';
export const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA";
export const loginPayload={ method:"GET" , headers:{Authorization:token}}
export const target_marketplace = "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9";
export const apiFilter=["" , "Not Listed" , "Inactive" , "Incomplete" , "Active" , "error"]
export const itemsPerPage = 50;
export const dummyImage2= "https://multi-account.sellernext.com/apps/amazon-multi/902e6225075f4dc2f9fe944f578a4ad2.png";
export const dummyImage="https://multi-account.sellernext.com/apps/amazon-multi/fe687731855298b4807ee4a49c3bf27c.png";
export const refineProductsUrl = "https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts?";
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
export const bodydata1 ={
  method: "post",
  headers: {
     "Content-Type": "application/json" ,
      appTag: "amazon_sales_channel",
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjk2ZDYwZDVlMzE3NjI3NThiMmY5Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4OTA3Mzc0LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNjIxMTZlNTdiNGE3NjNlYzM5YWY5MiJ9.FXwul26U6GG2d9Wrfh5lNu-ikW_vwZ0tbBdjmoVTWhF3tOibyff7buM3tuIcgOkti9UvBpKtTo-SRU8A5UNEah37q1K1k-GQOSdwYxO1Q4Z9oF5AkIk8whl_-gZymjUqlMO0fjKJie6a_A4vxYk-PF8DEUHHOsc0MHeQA7TuaHR95fbV281SVXcmEP17_snN-eNsdOoP70vqiER3BkLV7Nr78JoSNZ38iqqznHEDKkLAgr2p3qI4OKZ7S6SiQglh1YfZgt4oZho868e8RAuV9QSomVpuuXAmyBHDGbUPrLTqvhj_CnzvQzEiNDnu__oh9UbWkTdZdAZhY_S5uzBMYg",
      "Ced-Source-Id": 476,
      "Ced-Source-Name": "shopify",
      "Ced-Target-Id": 479,
      "Ced-Target-Name": "amazon" ,
      appCode: "eyJzaG9waWZ5IjoiYW1hem9uX3NhbGVzX2NoYW5uZWwiLCJhbWF6b24iOiJhbWF6b24ifQ=="

  },
  body:JSON.stringify({
    "target_marketplace": "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
    "target": {
        "marketplace": "amazon",
        "shopId": "479"
    },
    "source": {
        "marketplace": "shopify",
        "shopId": "476"
    }
})
      
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

   



export const filterHeader = {
  method : 'POST',
  headers : {
    "Ced-Source-Id": 476,
    "Ced-Source-Name": "shopify",
    "Ced-Target-Id": 479,
    "Ced-Target-Name": "amazon",
    appCode:
      "eyJzaG9waWZ5IjoiYW1hem9uX3NhbGVzX2NoYW5uZWwiLCJhbWF6b24iOiJhbWF6b24ifQ==",
    appTag: "amazon_sales_channel",
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjk2ZDYwZDVlMzE3NjI3NThiMmY5Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4OTA3Mzc0LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNjIxMTZlNTdiNGE3NjNlYzM5YWY5MiJ9.FXwul26U6GG2d9Wrfh5lNu-ikW_vwZ0tbBdjmoVTWhF3tOibyff7buM3tuIcgOkti9UvBpKtTo-SRU8A5UNEah37q1K1k-GQOSdwYxO1Q4Z9oF5AkIk8whl_-gZymjUqlMO0fjKJie6a_A4vxYk-PF8DEUHHOsc0MHeQA7TuaHR95fbV281SVXcmEP17_snN-eNsdOoP70vqiER3BkLV7Nr78JoSNZ38iqqznHEDKkLAgr2p3qI4OKZ7S6SiQglh1YfZgt4oZho868e8RAuV9QSomVpuuXAmyBHDGbUPrLTqvhj_CnzvQzEiNDnu__oh9UbWkTdZdAZhY_S5uzBMYg",
    'content-type': 'application/json'
  },
  body : JSON.stringify({  
    "target_marketplace": "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
    "source": {
        "shopId": "476",
        "marketplace": "shopify"
    }
})
}

export const filterUrl = 'https://multi-account.sellernext.com/home/public/connector/source/getFilterAttributes'



  