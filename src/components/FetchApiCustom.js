
import { useCallback } from "react";

const FetchApiCustom=()=>{
  // const [data , setData] = useState([])
  const extractDataFromApi = useCallback(async(url , payload)=>{
 
      return fetch(url , payload).then((res)=>res.json())
    //   .then((res)=>{
    //       if(res.success===true){
           
    //            return  res     
    //       }
    //   })
    // }
 
  
  },[])
 
  return [extractDataFromApi];
};

export default FetchApiCustom;