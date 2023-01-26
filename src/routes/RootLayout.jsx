import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <body className="  bg-neutral-900  text-white   ">
        <div className="App pt-10 container max-w-6xl   min-h-screen text-white mx-auto px-2 sm:px-20  ">
          <MainHeader />
          <Outlet />
        </div>
      </body>
    </>
  );
}

export default RootLayout;
