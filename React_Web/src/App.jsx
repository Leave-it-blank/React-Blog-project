import { useState } from 'react'
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList'

function App() {
   
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <main className="App container max-w-6xl bg-neutral-900 min-h-screen text-white mx-auto px-2 sm:px-20  ">
       <div className="pt-10" ></div>
      <MainHeader showPostModal = {showModalHandler} />
      
      <PostsList  isPosting={modalIsVisible} hidePostModal={hideModalHandler} showPostModal={showModalHandler}/> 
       </main>
  )
}

export default App
