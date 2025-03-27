import { CircleAlert, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DonateCard({
  id,
  image,
  title,
  author,
  totalRaised,
  backers,
  required,
}) {
  const progress = Math.min((totalRaised / required) * 100, 100);
  return (
    <motion.div
      key={id}
      className="flex w-[45vh] flex-col rounded-xl bg-white shadow-lg md:w-[80vh] lg:w-96 lg:overflow-hidden"
      whileHover={{ scale: 1.01, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-t-lg object-cover"
          loading="lazy"
        />
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-yellow-500 p-1 px-3 text-sm text-white opacity-75 transition duration-300 hover:opacity-100 hover:shadow-md">
          Tax Benefit <CircleAlert size={15} className="rotate-180" />
        </span>
      </div>

      {/* Details Section */}
      <div className="space-y-3 p-5">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="inline-block rounded-lg bg-gray-300 px-2 py-1 text-gray-800">
            {author}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex w-full justify-between font-medium text-gray-700">
            <span>₹{totalRaised.toLocaleString()} Raised</span>

            <span className="mt-auto">
              ₹{(required - totalRaised).toLocaleString()} Required
            </span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-2 bg-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-1 text-sm text-gray-500">{backers} Backers</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="rounded-lg border flex items-center gap-2 border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
            <Share2 size={20} /> <span>Share</span>
          </button>
          <Link
            to={`/donate/${id}`}
            className="rounded-lg bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600 hover:no-underline"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
