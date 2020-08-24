import React,{useState} from 'react';
import { PageHeader,Input,Button } from 'antd';
import {  Link} from "@reach/router"
import { auth } from '../firebase'

const SignUp = (props)=> {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const onEmailChange =(event)=>setEmail(event.target.value)
  const onPasswordChange =(event)=>setPassword(event.target.value)
  const isEnabled = email.length > 0 && password.length > 0;
  const onSignUp=()=>{
    auth.createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log('error sign Up')
      // note: console not clear after sign up , it shows password
     
    }); 
    setEmail(' ' )
    setPassword(' ')
   
  }
    return (
<div className="sign_up_container">
<div className="page_header_container ">
        <PageHeader 
        style ={{   border: '1px solid rgb(235, 237, 240)',
                  paddingLeft:"50%"
                 }}
        title=" Sign Up "
     />,
     </div>
     <div className="sign_title_container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic",paddingLeft:"2%"}}>
          Enter Your Email Address
          </div>
          <div className="input_Title_container" style={{paddingLeft:"2%", marginTop:"10px"}}>
          <Input placeholder="Email Address" onChange={onEmailChange} />
           </div>
           <div className="sign_title_container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic", padding :"2%"}}>
          Enter Your Password
          </div>
          <div className="input_Title_container"  style={{paddingLeft:"2%", marginTop:"10px"}}>
          <Input.Password  placeholder="PassWord"  onChange={onPasswordChange}/>
           </div>
           <div className="signUP_button_container" style={{marginTop:"10px", paddingLeft:"2%"}}>
            <Button type="primary" size ="large"  onClick={onSignUp} disabled={!isEnabled}>SignUp</Button>
              </div>
              <div className="logIn_Link_Container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic", padding :"2%"}}>
           <div>
           If you have an account , then
           </div>
            <Link to="path">or Log In </Link>
              </div>

</div>
    )
}
export default SignUp;