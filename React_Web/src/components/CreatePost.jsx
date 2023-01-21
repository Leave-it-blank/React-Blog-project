import { useState } from 'react';
import {MdClose } from 'react-icons/md';

export default function({onCancel, onCreatePost}){
 
    const [ title, setTitle ] = useState('');
    const [name , setName] = useState('');
    const [ body , setBody ] = useState('');
    function handlerTitle(event){
        setTitle(event.target.value);
    };
    function handlerBody(event){
        setBody(event.target.value);
    }
    function handlerName(event){
        setName(event.target.value);
    };
    function submitHandlder(event){
        event.preventDefault();
        const postData = {
            body: body,
            author: name,
            title: title
        };
        console.log(postData);
        onCreatePost(postData);
        onCancel();

    }
    return (
        <>
        <form className=" flex flex-col p-5 bg-neutral-600 m-2  mx-auto items-center rounded-md " onSubmit={submitHandlder}>
            <MdClose  className="text-neutral-900 hover:text-white hover:bg-red-500 self-end mx-2 " size={18} onClick={onCancel}> Close</MdClose>
            <p className="w-full flex flex-col px-2 py-2">
                <label htmlFor="post_name" className="mb-1 text-neutral-200" >Post Title: </label>
                <input className=" rounded-lg w-2/3 mx-1 text-black p-2" type="text" id="post_title" onChange={handlerTitle}/> 
            </p>
            <p className="w-full flex flex-col px-2 py-2">
                <label htmlFor="body" className="mb-1 text-neutral-200" >Body Text:</label>
                <textarea className="textarea rounded-lg text-black p-2" id="body" required rows={3}  onChange={handlerBody} />
            </p>
            <p className="w-full flex flex-col px-2 py-2">
                <label htmlFor="name" className="mb-1 text-neutral-200" >Name: </label>
                <input className=" rounded-lg w-2/3 mx-1 text-black p-2" type="text" id="name" onChange={handlerName}/> 
            </p>

            <button className="w-1/2 text-gray-100 justify-center p-3 bg-neutral-500 hover:bg-neutral-400 mt-2 rounded-xl "> Create Post</button>
        </form>
        </>
    )
    
}