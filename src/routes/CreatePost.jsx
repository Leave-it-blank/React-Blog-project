import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
function createPost() {
  return (
    <>
      <Modal open={true}>
        <Form
          method="post"
          className=" flex flex-col p-5 bg-neutral-600 m-2  mx-auto items-center rounded-md "
        >
          <Link to=".." className="self-end mx-2">
            {" "}
            <MdClose
              className="text-neutral-900 hover:text-white hover:bg-red-500   "
              size={18}
            >
              {" "}
              Close
            </MdClose>
          </Link>
          <p className="w-full flex flex-col px-2 py-2">
            <label htmlFor="post_name" className="mb-1 text-neutral-200">
              Post Title:{" "}
            </label>
            <input
              className=" rounded-lg w-2/3 mx-1 text-black p-2"
              type="text"
              id="post_title"
              name="title"
            />
          </p>
          <p className="w-full flex flex-col px-2 py-2">
            <label htmlFor="body" className="mb-1 text-neutral-200">
              Body Text:
            </label>
            <textarea
              className="textarea rounded-lg text-black p-2"
              id="body"
              required
              rows={3}
              name="body"
            />
          </p>
          <p className="w-full flex flex-col px-2 py-2">
            <label htmlFor="name" className="mb-1 text-neutral-200">
              Name:{" "}
            </label>
            <input
              className=" rounded-lg w-2/3 mx-1 text-black p-2"
              type="text"
              id="name"
              name="author"
            />
          </p>

          <button className="w-1/2 text-gray-100 justify-center p-3 bg-neutral-500 hover:bg-neutral-400 mt-2 rounded-xl ">
            {" "}
            Create Post
          </button>
        </Form>
      </Modal>
    </>
  );
}

export default createPost;

export async function action(request) {
  //console.log(request);
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
