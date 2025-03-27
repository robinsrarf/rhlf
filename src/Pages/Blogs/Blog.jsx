import { Link } from "react-router-dom";
import img1 from "../../assets/images/Blogs/img1.jpg";
import img2 from "../../assets/images/Blogs/img2.jpg";
import img3 from "../../assets/images/Blogs/img3.jpg";
const dummydata = [
  {
    date: 5,
    month: "Mar",
    title: "NGO Launches Education Initiative",
    id: 1,
    image: img1,
  },
  {
    date: 12,
    month: "Apr",
    title: "Health Camp for Underprivileged Communities",
    id: 2,
    image: img2,
  },
  {
    date: 22,
    month: "May",
    title: "Environmental Awareness Drive",
    id: 3,
    image: img3,
  },
  {
    date: 8,
    month: "Jun",
    title: "Women Empowerment Workshop",
    id: 4,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 15,
    month: "Jul",
    title: "Fundraising Campaign for Rural Development",
    id: 5,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 30,
    month: "Aug",
    title: "Disaster Relief Program Launched",
    id: 6,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 10,
    month: "Sep",
    title: "Skill Development Training for Youth",
    id: 7,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 25,
    month: "Oct",
    title: "Annual Report on NGO Achievements",
    id: 8,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 5,
    month: "Nov",
    title: "Food Distribution Drive Before Winter",
    id: 9,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 20,
    month: "Dec",
    title: "Volunteer Appreciation Event",
    id: 10,
    image: "https://placehold.co/600x400/EEE/31343C",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Blog Section
      </h1>
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummydata.map((blog) => (
          <div
            key={blog.id}
            className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500">
                {blog.month} {blog.date}
              </div>
              <h2 className="mb-3 mt-1 text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <Link
                to={`/blogs/${blog.id}`}
                className="font-medium text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
