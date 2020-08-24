import  React from 'react';
import { Card } from 'antd';
import { PageHeader } from 'antd';
import { useEffect, useState } from 'react';
import api from '../mock-api'
import db from '../firebase';
const Post =(props)=>
{
const [title, setTitle]=useState('')
 const [content, setContent]=useState('')
 useEffect(()=>{
    let postRef=db
    .collection('POSTBOX').doc()
    postRef
         .get()
         .then(docs => {
           let{content , title}=docs.data()
                 setTitle(title)
                   setContent(content)
         })
 
 
 },[]
 )

    return(
        <div className="Post_Container">
        <div className="page_header_container ">
        <PageHeader 
        style ={{   border: '1px solid rgb(235, 237, 240)'

      }}
        title="Post"
     />,
     </div>
     <div className="site-card-border-less-wrapper">
    <Card title={title}bordered={false} style={{ width: 300 }}>
    
    <p>{content .split('\n') .map((paragraph)=>{
                       return <p>{paragraph} </p>
                   })}</p>
     
    </Card>
  </div>,
    
</div>
    )
}
export default Post;