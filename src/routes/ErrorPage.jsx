import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen w-full -translate-y-32 container mx-auto ">
        <h1>Error 404</h1>
        <h2>Page not found or Api might be down!</h2>
        <p>Please Visit Us in a bit.</p>

        <Link
          to="/"
          className="text-white bg-neutral-600 px-4 py-2 rounded-xl my-10"
        >
          {" "}
          Go Home{" "}
        </Link>
      </div>
      <div className="absolute bottom-0 right-5 -translate-y-14">
        <p> Contact "Leaveitblank" for support.</p>
      </div>
    </>
  );
}

export default ErrorPage;
