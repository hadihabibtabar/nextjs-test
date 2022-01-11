
import React, {useState , useEffect} from 'react';
import axios from 'axios';


const PostDetail = ({post}) => {

    console.log(post);
    const [comments,setComments]=useState([]);

    
useEffect (() => {

   axios.get("http://localhost:3001/comments?postId="+post.id)

  .then(res=>{
    console.log(res);

    setComments(res.data);

  }).catch(err => {
    console.log(err);
  });
},[])
    return (
        <div>
            <h1>Post Detail:</h1>
            <h3>name: {post.title}</h3>
            <h4>description: {post.Description}</h4>

            <hr/>
            <ul>
              {comments.map((item , index) =>
                <li key={index}><h3>{item.sender}</h3><p>{item.message}</p></li>)}
            </ul>


             <style jsx>{`
             h3{
                     color:blue;
                 }
                 h4{
                     color:purple;
                 }
             `}
                 

        </style>
        </div>

       
    )
}

  export async function getStaticProps({params}) {
      const response =await axios.get(`http://localhost:3001/posts/${params.id}`);

      return {
        props:{
          post: response.data,
        }
      }
   };
  export async function getStaticPaths(){

      const response =await axios.get("http://localhost:3001/posts")

      const paths=response.data.map((post)=> `/Posts/${post.id}`)
      return {
 
         paths ,
         fallback:false
  
      }
  }

export default PostDetail;