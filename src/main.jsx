import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts";
import "./index.css";

import CreatePost, { action as actionCreatePost } from "./routes/CreatePost";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: () => postLoader(),
        children: [
          {
            path: "/:id",
            element: <PostDetails />,
            loader: ({ params }) => postDetailsLoader(params),
          },
          {
            path: "/create-post",
            element: <CreatePost />,
            action: async ({ params, request }) =>
              await actionCreatePost(request),
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
