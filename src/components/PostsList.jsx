import Post from "./Post";
 
import { useState, useEffect } from "react";
function PostsList( ) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getPost(){
       setIsLoading (true);
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
      setIsLoading(false);
    }    
    getPost();
  }, []);


  function addPostsHandler(postData){
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((existingPosts) => [ postData , ...existingPosts]);
  };

  return (
    <>
  
     {posts.length ===0 && !isLoading && ( 
          <div className="bg-neutral-800 p-10 text-white">
             No posts were added.
          </div>
        )
      }
       {
        isLoading && (
          <div className="bg-neutral-800 p-10 text-white my-3">
            Fetching Posts...
          </div>
        )
      }
      <ul className="bg-neutral-800 p-5 rounded-md grid grid-cols-1">
         
        {posts.map((post) => 
          <Post author={post.author} title={post.title} body={post.body} key={post.title} />
        )}
        </ul>
    </>
  );
}

export default PostsList;
