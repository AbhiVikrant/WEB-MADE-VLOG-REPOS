import React from 'react';
import { Card } from 'antd';
import { Link} from "@reach/router"
function PostMaker (props){
    return(
        <div className="Article_Container">
        <div >
        <Card 
        style={{ marginTop: 16  }}
        title={props.title}
        extra={
           <div className="extraLink_postSnippet_container">
                 <Link to= {`/updatePost/${props.id}`}>
                     Edit Post
                     </Link>
                     </div>
            

        }
        > 
            
          <p>{props.content .split('\n') .map((paragraph, idx)=>{
                       return <p key={idx}>{paragraph} </p>
                   })}</p>
     
    </Card>
         </div>
        </div>
    )
}
export default PostMaker;
