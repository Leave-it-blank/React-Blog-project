import Post from "./Post";

import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {posts.length === 0 && (
        <div className="bg-neutral-800 p-10 text-white">
          No posts were added.
        </div>
      )}

      <ul className="bg-neutral-800 p-5 rounded-md grid grid-cols-1">
        {posts.map((post) => (
          <Post
            author={post.author}
            title={post.title}
            body={post.body}
            key={post.title}
          />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
