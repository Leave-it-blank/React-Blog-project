
function Post(props){
 
    return (
    <div className="bg-neutral-900 p-3 m-2 rounded-md">
         <li >
            <p className="bold capitalize text-2xl font-sans mb-2"> {props.title}</p>
        <p className="text-sm pl-4 font-serif text-neutral-400">
           by {props.author}
        </p>
        <p className="mt-5"></p>
        <p className="text-neutral-200 px-4 py-1">{props.body}</p>
    </li></div>)
}


export default Post;