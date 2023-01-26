import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal open={true}>
        <main className="p-3  text-white">
          <p>Post not found</p>
          <Link
            className="text-white bg-neutral-700  px-4  py-2 cursor-pointer"
            to=".."
          >
            Go back
          </Link>
        </main>
      </Modal>
    );
  }

  return (
    <Modal open={true}>
      <main className="p-3   text-white">
        <p className="text-2xl font-bold capitalize px-1 py-2">{post.title}</p>
        <p className="text-xs pt-2 ml-3 text-neutral-300">
          Author: <span className="text-white"> {post.author}</span>{" "}
        </p>

        <p className="text-md py-2 px-1 mt-3 rounded-md mx-3 bg-white text-black">
          {post.body}
        </p>
        <div className="flex justify-center mt-5">
          <Link
            className="bg-neutral-800 rounded-md align-middle p-2 px-4 hover:text-red-200 cursor-pointer"
            to=".."
          >
            Go back
          </Link>
        </div>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader(params) {
  // console.log(params);
  let data;
  try {
    const res = await fetch("http://localhost:8080/posts/" + params.id);
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  return data.post;
}
