import React, { useCallback,  useState } from 'react'
import {Card} from '@shopify/polaris';
import {TextField} from '@shopify/polaris'
import {Button} from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import { loginCredentialsFunction } from '../../redux/listingSlice';
import UpdatedComponent from '../hoc/UpdatedComponent';
import FetchApiCustom from '../customhook/FetchApiCustom';
import { loginPayload } from '../../utils/AllUtilities';

const LoginComponent = (props) => {
    const [username, setUsername] = useState(''); //username is value of first textfield
    const [password, setPassword] = useState('');  //password is value of second textfield
    const [extractDataFromApi] = FetchApiCustom()
    const navigate = useNavigate()
  
    //loginhandler will invoke on click of login button and this function will call customhookfunction
    const loginHandler=()=>{  
       let loginUrl = 'https://fbapi.sellernext.com/user/login?'
       let obj = { username:username ,password:password }
        for (const [key, value] of Object.entries(obj)) {
            loginUrl+=`${key}=${value}&`
          }
          loginUrl = loginUrl.substring(0 , loginUrl.length-1)
          extractDataFromApi(loginUrl , loginPayload ).then((res)=>{
            if(res.success===true){
                sessionStorage.setItem('userdata' , JSON.stringify(obj))   
                props.dispatch(loginCredentialsFunction(obj))
                navigate("home")
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