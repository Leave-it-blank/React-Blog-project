import {MdPostAdd } from 'react-icons/md';
import { Link } from "react-router-dom";
function MainHeader({  }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="p-3 my-3 capitalize font-mono text-2xl">My Blog</div>
        <div>
          <Link to="/create-post"
            className="p-3 my-3 rounded-md bg-neutral-700 text-white text-decoration-none hover:bg-neutral-600"
           
          >
            Create Post
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
