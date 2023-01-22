import { useState, } from 'react'
import { Outlet } from "react-router-dom";
import MainHeader from '../components/MainHeader';
import PostsList from '../components/PostsList'

function Posts() {
   return (
    <main  >
     <Outlet ></Outlet>
       <div className="pt-10" ></div>
       
      <PostsList  /> 

       </main>
  )
}

export default Posts
