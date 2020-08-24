import React ,{useState,useEffect} from 'react';
import { PageHeader, Input, Button} from 'antd';
import { navigate} from "@reach/router"
import db from '../firebase'
const { TextArea } = Input;
const UpdatePost =(props)=>
{
    const[title, setTitle]=useState('')
    const[content,setContent]=useState('')
    useEffect(()=>{
        let postRef=db
        .collection('POSTBOX').doc()
        postRef
             .get()
             .then(doc => {
                 let {title,content}=doc.data()
                     setTitle(title)
                       setContent(content)
             })
     
     
     },[]
     )
    
    const onMainTitleChange =(event)=>
    {
        setTitle(event.target.value)
    }
    const onContentChange =(event)=>
    {
        setContent(event.target.value)
    
    }
    const isEnabled = title.length > 0 && content.length > 0;
    const onCreatePost =()=>
    {
         
        let postRef=db.collection('POSTBOX')
        let payload={title,content}
        postRef.add(payload)
          .then(function(doc){
              console.log("Document saved with id: ", doc.id)
          })
          setTitle(' ')
          setContent('')
          navigate(`/posts`)


    }
    
    return (
        <div className="createPost_container">
            <div className="pageHeader_container ">
        <PageHeader style ={{  border: '3px solid green' ,   textAlign: 'center',  paddingLeft: '10px'}}

    className="site-page-header"
    title="Update Post"
  />,
  </div>
  <div className="post_input_container">
      <div className="post_title_container">
          Post Main Title
          </div>
          <div className="input_Title_container">
          <Input placeholder="Post Title" value={title} onChange={onMainTitleChange}/>
           </div>
            </div>
        <div className="content_container_creater">
            <div >
            <div className="post_title_container">
          Post Content
          </div>
            </div>
            <TextArea rows={12} cols={4} style={{marginTop: '20px'}} value={content} onChange={onContentChange} />
        </div>
        <div className="button_container">
            <Button type="primary" size ="large" onClick={onCreatePost} disabled={!isEnabled}>UpdatePost</Button>

        </div>
        
        

        </div>
    )
}
export default UpdatePost;