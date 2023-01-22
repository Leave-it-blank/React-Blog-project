import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts';
import './index.css' 
import CreatePost from './routes/CreatePost';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
    { path: '/' , element: <RootLayout/> , 
  children: [
    { path: '/', element: <Posts /> , children: [
      { path: '/create-post', element: <CreatePost /> },
    ] },
    
  ]} 

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
