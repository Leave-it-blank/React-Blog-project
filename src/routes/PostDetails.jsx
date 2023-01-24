import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal open={true}>
        <main className="p-3 bg-black text-white">
          <p>Post not found</p>
          <Link className="text-red-500 p-4 cursor-pointer" to="..">
            Go back
          </Link>
        </main>
      </Modal>
    );
  }

  return (
    <Modal open={true}>
      <main className="p-3 bg-black text-white">
        <p className="text-2xl font-bold">{post.title}</p>
        <p className="text-xl">{post.body}</p>
        <p className="text-xl py-3">Author: {post.author}</p>
        <Link className="text-red-500 p-4 cursor-pointer" to="..">
          Go back
        </Link>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader() {
  return "null";
}
