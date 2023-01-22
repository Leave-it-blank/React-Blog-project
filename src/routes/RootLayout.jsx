import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function RootLayout(){
    return <>
    <div className="App pt-10 container max-w-6xl bg-neutral-900 min-h-screen text-white mx-auto px-2 sm:px-20  ">

    <MainHeader />
     <Outlet />
    </div>
 
    </>
}

export default RootLayout;