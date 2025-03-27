import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-[70vh] w-screen flex-col items-center justify-center lg:h-screen lg:text-4xl">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="font-semibold text-pink-400">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
