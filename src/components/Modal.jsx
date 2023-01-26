import { useNavigate } from "react-router-dom";
function Modal({ children }) {
  const navigate = useNavigate();
  function hideModal() {
    navigate("..");
  }
  return (
    <>
      <div
        className=" absolute top-0 left-0 w-full h-screen bg-neutral-800  opacity-70"
        onClick={hideModal}
      />
      <dialog
        open
        className=" shadow-md overflow-hidden p-2 md:mt-10  bg-neutral-900 rounded-md  sm:w-2/3"
      >
        {children}
      </dialog>
    </>
  );
}

export default Modal;
