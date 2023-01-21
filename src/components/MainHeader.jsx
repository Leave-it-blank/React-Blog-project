import {MdPostAdd } from 'react-icons/md';

function MainHeader({ showPostModal }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="p-3 my-3 capitalize font-mono text-2xl">My Blog</div>
        <div>
          <button
            className="p-3 my-3 rounded-md bg-neutral-700 text-white"
            onClick={showPostModal}
          >
            <MdPostAdd > Create Post</MdPostAdd> 
          </button>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
