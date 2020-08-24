import React,{useState} from 'react';
import { PageHeader,Input,Button } from 'antd';
import {  Link} from "@reach/router"
import {auth} from '../firebase'
const SignIn = (props)=> {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const onEmailChange =(event)=>setEmail(event.target.value)
    const onPasswordChange =(event)=>setPassword(event.target.value)
    const isEnabled = email.length > 0 && password.length > 0;
    const onSignIn=()=>{
        auth.signInWithEmailAndPassword(email, password)
        .then (function (result){
            console.log('sign In Successful')
        })
        .catch(function(error) {
            // Handle Errors here.
        
            var errorCode = error.code;
          var errorMessage = error.message;
         console.log(errorCode);
           console.log(errorMessage);
          });
          setEmail(' ')
    setPassword(' ')
     
    }
    
    return (
<div className="sign_up_container">
<div className="page_header_container ">
        <PageHeader 
        style ={{   border: '1px solid rgb(235, 237, 240)',
                  paddingLeft:"50%"
                 }}
        title=" Sign In "
     />,
     </div>
     <div className="signIn_title_container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic",paddingLeft:"2%"}}>
          Enter Your Email Address
          </div>
          <div className="input_Title_container" style={{paddingLeft:"2%", marginTop:"10px"}}>
          <Input placeholder="Email Address" onChange={onEmailChange} />
           </div>
           <div className="sign_title_container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic", padding :"2%"}}>
          Enter Your Password
          </div>
          <div className="input_Title_container"  style={{paddingLeft:"2%", marginTop:"10px"}}>
          <Input.Password  placeholder="PassWord" onChange={onPasswordChange}/>
           </div>
           <div className="signIn_button_container" style={{marginTop:"10px", paddingLeft:"2%"}}>
            <Button type="primary" size ="large" onClick={onSignIn} disabled={!isEnabled}>SignIn</Button>
              </div>
              <div className="Register_Link_Container" style={{marginTop:"10px", fontSize:"large", fontStyle: "italic", padding :"2%"}}>
                  <div>
                  If you have not an account , then
                  </div>
            <Link to="path"> sign up here  </Link>
              </div>

</div>
    )
}
export default SignIn;