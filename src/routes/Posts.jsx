
import { Outlet } from "react-router-dom";
import PostsList from '../components/PostsList'

function Posts() {
   return (
    <main  >
     <Outlet ></Outlet>
       <div className="pt-10" ></div>
       
      <PostsList  /> 

       </main>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  //return json(data.posts, { status: 200 });
  return data.posts;
}
