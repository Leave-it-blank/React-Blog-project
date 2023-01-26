import { Link } from "react-router-dom";
function Post(props) {
  //console.log(props);
  return (
    <div className="bg-neutral-900 p-3 m-2 rounded-md">
      <li>
        <Link to={props.id}>
          <div className="flex flex-row justify-between align-middle">
            <p className="bold capitalize text-2xl font-sans mx-3 py-2">
              {props.title}
            </p>
            <p className="text-xs text-gray-400 pl-3">ID {props.id} </p>
          </div>
          <hr className="border-neutral-700 mx-3" />
          <p className="text-sm my-2 px-4 mx-3 text-right font-serif text-neutral-400">
            by <span className="text-white">{props.author}</span>
          </p>

          <p className="text-neutral-200 px-4 py-1 truncate ease-linear">
            {props.body}
          </p>
        </Link>
      </li>
    </div>
  );
}

export default Post;
