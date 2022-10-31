
import { useCallback, useState } from "react";

const FetchApiCustom=()=>{
  const [data , setData] = useState([])
  const extractDataFromApi = useCallback(async(url , payload)=>{
    try{
      fetch(url , payload)
      .then((res)=>res.json())
      .then((res)=>{
          if(res.success===true){
           
               setData([res])     
          }
      })
    }
    catch(err){
      console.log(err)
    } 
  
  },[])
 
  return [data,extractDataFromApi];
};

export default FetchApiCustom;