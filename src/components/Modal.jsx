 
  function Modal ({children, hideModal}){
    return <>
        <div className=" absolute top-0 left-0 w-full h-screen bg-neutral-800  opacity-70"  onClick={hideModal}/>
        <dialog open  className=" shadow-sm overflow-hidden p-3  bg-transparent ">
           {children}
        </dialog>
    </>
}

export default Modal;