import React,{useState,useEffect} from 'react';
import { PageHeader} from 'antd';
import Post from './PostMaker'
import api from '../mock-api'
import _ from 'lodash'
import PostMaker from './PostMaker';
import db from '../firebase'
import auth from '../firebase'


const Posts = (props)=>{
    const[posts, setPost]=useState([])

    useEffect(()=>{
        let postRef=db.collection('POSTBOX')
        postRef
             .get()
             .then(querySnap => {
                 querySnap.forEach(Post => {
                     let data = Post.data()
                     let postId=Post.id
                     

                     let payload={
                         postId,
                         ...data
                     }

                     setPost((posts)=>[...posts, payload])
                 })

             })

    } , [])
    return(
        <div className="pageHeader_container ">
        <PageHeader style ={{  border: '3px solid green' ,paddingLeft: '50%'}}

    className="site-page-header"
    title="Posts"
  />,
  <div className="Article_Container">
      
    {
        _.map(posts, (Articles , idx)=>{

           return(
               <PostMaker 
               key={idx}
               id={Articles.id}
               title={_.toUpper(Articles.title) }   
               content={Articles.content}/>
           )
        
        })
    }

  </div>
 
      
      </div>
     
    )
}
export default Posts;