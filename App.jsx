import React,{useState} from 'react';
import Posts from './Posts'
import Post from './Post'
import CreatePost from "./CreatePost"
import { Router, Link} from "@reach/router"
import { Menu } from 'antd';
import { ReadOutlined , PlusCircleOutlined ,LogoutOutlined } from '@ant-design/icons';
import UpdatePost from './UpdatePost'
import SignUp from './SignUp'
import SignIn from './SignIn'
import {auth} from '../firebase'


function App(props){
    const[user,setUser]=useState(false)
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('user signed in')
          setUser(user)
        } else {
          // No user is signed in.
          console.log('bbf')
        }
      });
      const signOutMain=()=>{
        auth.signOut().then(function() {
           console.log('Sign-out successful.')
        }).catch(function(error) {
          // An error happened.
          console.log(error)
        });
      }
    return (
        
        <div className="App_Container">

            <div className="menu_container">
            <Menu  mode="horizontal">
          <Menu.Item key="read">
         <ReadOutlined />
         <Link to="/posts" style={{float:"right"}}> ReadPost </Link> 
        </Menu.Item>
            
      {
        user &&
        <div className="create_Post_Link_Nav_container">
        <Menu.Item key="create">
        <PlusCircleOutlined />
        <Link to="/createPost" style={{float : 'right'}}> Create New Post </Link> 
        </Menu.Item>
          </div>
      }
          
          {!user
                 ?
                 <Link to="/signIn"> Sign In Page </Link> 
                 :
                 <a onClick={signOutMain} >Sign Out </a>
                 }
 </Menu>
            
            </div>

            <Router>
               
            <SignIn path="signIn" default/>
              
              <Posts path="posts"  user={user}/>
              <SignUp path="signup"/>
            
              <CreatePost path="createPost"/>
             
               
                </Router>
        
        </div>)
}
export default App;