import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function About() {
  const [post, setPost] = useState({});
  const[id,setId]=useState(1);
  //using useEffect + axios Laibrary to feach API
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <React.Fragment>
      {/* {posts.map((post) => {
        return (
          // <div key={post.id}>
          //   <h2>{post.title}</h2>
          //   <p>{post.body}</p>
          // </div>
        );
      })} */}
    post id is: {id} post title is:  <div>{post.title}</div><button onClick={()=>setId((next)=>next+1)}>inctease</button>
    </React.Fragment>
  );
}

export default About;
