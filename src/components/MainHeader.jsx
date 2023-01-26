import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
function MainHeader({}) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="p-3 capitalize align-middle text-2xl font-serif font-bold underline underline-offset-auto hover:animate-pulse cursor-pointer">
          My Blog
        </div>

        <Link
          to="/create-post"
          className="px-3 py-3.5 text-center align-middle  rounded-md bg-neutral-700 text-white   hover:bg-neutral-600 flex justify-center items-center hover:animate-pulse"
        >
          Create Post
        </Link>
      </div>
    </>
  );
}

export default MainHeader;
