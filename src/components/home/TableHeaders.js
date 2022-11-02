import {Image} from 'antd';
export const apiFilter=["All" , "Not Listed" , "Inactive" , "Incomplete" , "Active" , "Error"]
export const bodydata ={
    type: "GET",
    headers: {
        appTag: "amazon_sales_channel",
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4NzMxOTc2LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNWY2NDQ4YzQxY2M2MjdhMzBjNmIyMiJ9.o0XvqNpmiAaXQgWC8LgaBrhx6Kjc6rwm0vi-aG-ezZHp3Ph1jcaBqKQq1u9PQSwiCjU6US8xiqMbN_l5JYEwmPOWWQF43Fdt8V2i_dYp2L4mj51rKn9pH7xCloNPAiqCAp7IlfdwXU2NL5cYlb8p4Ve9axRKuPaZ6FpEL49fP8zjlT5gsfR7lr5UD_iKmBH-F-R4ORgQC3vR0CfsW42XXebfTiKf5fh2qBAIrjtSPJyO0jgNxLCTppnT3ruBf3yDL7EcAOFXzUZn_G8NsOSaZp5AvMWIMDkpmBO0VvgkIqSuYOlICki6riprysfwhuwU1XAtpNwI6N571dfUTPhXsw",
        "Ced-Source-Id": 500,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 640,
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