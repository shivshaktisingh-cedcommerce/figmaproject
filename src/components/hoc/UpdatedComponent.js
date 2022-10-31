import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UpdatedComponent=(Original)=> {
 
    const NewComp=()=> {
   const state = useSelector((state)=>state)
   const dispatch =useDispatch()
   
      return (
        <>
        <Original state={state} dispatch={dispatch}/>
        </>
      ) 
     }
   return NewComp  
}

export default UpdatedComponent