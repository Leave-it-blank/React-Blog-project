import Post from "./Post";
import CreatePost from "./CreatePost";
import Modal from "./Modal";
import { useState } from "react";
function PostsList({ hidePostModal, showPostModal, isPosting }) {

  const [posts, setPosts] = useState([]);

  function addPostsHandler(postData){

    setPosts((existingPosts) => [ postData , ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal hideModal={hidePostModal}>
          <CreatePost  onCancel={hidePostModal} onCreatePost={addPostsHandler}/>
        </Modal>
      )}
      
  
      {
        posts.length ===0 && (
          <div className="bg-neutral-800 p-10 text-white">
             No posts were added.
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
