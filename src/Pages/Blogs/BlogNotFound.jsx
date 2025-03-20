import { Link } from "react-router-dom";

function BlogNotfound() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Blog Post Can Not Be Found
        </h1>
        <Link
          to={"/blogs"}
          className="text-xl font-bold text-blue-800 lg:text-2xl"
        >
          Go Back to Blogs
        </Link>
      </div>
    </>
  );
}
export default BlogNotfound;
