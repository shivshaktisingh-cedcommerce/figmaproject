import React, { useCallback,  useState } from 'react'
import {Card} from '@shopify/polaris';
import {TextField} from '@shopify/polaris'
import {Button} from '@shopify/polaris';
import fetchApiCustom from '../FetchApiCustom';
import { useNavigate } from 'react-router-dom';
import { loginCredentialsFunction } from '../../redux/listingSlice';
import UpdatedComponent from '../hoc/UpdatedComponent';

const LoginComponent = (props) => {
    const [username, setUsername] = useState(''); //username is value of first textfield
    const [password, setPassword] = useState('');  //password is value of second textfield
    const [extractDataFromApi] = fetchApiCustom()
    const navigate = useNavigate()
  
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA";
  
    //loginhandler will invoke on click of login button and this function will call customhookfunction
    const loginHandler=()=>{
        let url = 'https://fbapi.sellernext.com/user/login?'
        let payload={
            method:"GET" ,
            headers:{Authorization:token}
          }
       
        let obj = {
            username:username ,
            password:password
        }
        for (const [key, value] of Object.entries(obj)) {
            url+=`${key}=${value}&`
          }
          url = url.substring(0 , url.length-1)
          extractDataFromApi(url , payload ).then((res)=>{
            let tempObj={username:username , password:password}
            if(res.success===true){
                sessionStorage.setItem('userdata' , JSON.stringify(tempObj))   
                props.dispatch(loginCredentialsFunction(tempObj))
                navigate("/home")
            }
          })
    }


  const handleChangeUsername = useCallback((newValue) => setUsername(newValue), []);
  const handleChangePassword = useCallback((newValue) => setPassword(newValue), []);
  return (
    <div className="main_div_logincomponent">
      <Card title="LOGIN HERE" sectioned>
        <TextField placeholder='User name' value={username} onChange={handleChangeUsername} name="username" autoComplete="off" />
        <TextField placeholder='Password' type="password" value={password} onChange={handleChangePassword} name="password" autoComplete="off" />
        <Button primary onClick={loginHandler}>Login</Button>
      </Card>
    </div>
  )
}

export default UpdatedComponent(LoginComponent)