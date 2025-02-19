import { CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";
export default function DonateCard({ DonationData }) {
  return (
    <>
      {DonationData.map((Donation) => (
        <div
          key={Donation.id}
          className="hidden lg:block bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 w-full md:w-[48%] lg:w-[30%]"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={Donation.image}
              alt={Donation.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <span className="absolute flex items-center gap-1 top-2 right-2 bg-yellow-500 text-white text-sm px-3 p-1 rounded-lg opacity-75 hover:opacity-100 hover:shadow-md transition duration-300">
              Tax Benefit <CircleAlert size={15} className="rotate-180" />
            </span>
          </div>

          {/* Details Section */}
          <div className="p-5 space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {Donation.title}
            </h4>
            <div className="text-gray-600 text-sm flex items-center space-x-2">
              <span className="inline-block bg-gray-300 text-gray-800 px-2 py-1 rounded-lg">
                {Donation.author}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex justify-between font-medium text-gray-700">
                <span>{Donation.totalRaised}</span>
                <span>Raised</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div
                  className="bg-pink-500 h-2 rounded-full"
                  style={{ width: Donation.progress }}
                ></div>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {Donation.backers} Backers
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
                Share
              </button>
              <Link
                to={`/donate/${Donation.id}`}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:no-underline hover:bg-pink-600 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/*Mobile View */}
      {DonationData.map((Donation) => (
        <div
          key={Donation.id}
          className="lg:hidden bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:shadow-xl h-[38%] w-[85%]"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={Donation.image}
              alt={Donation.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <span className="absolute flex items-center gap-1 top-2 right-2 bg-yellow-500 text-white text-sm px-3 p-1 rounded-lg opacity-75 hover:opacity-100 hover:shadow-md transition duration-300">
              Tax Benefit <CircleAlert size={15} className="rotate-180" />
            </span>
          </div>

          {/* Details Section */}
          <div className="p-5 space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {Donation.title}
            </h4>
            <div className="text-gray-600 text-sm flex items-center space-x-2">
              <span className="inline-block bg-gray-300 text-gray-800 px-2 py-1 rounded-lg">
                {Donation.author}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex justify-between font-medium text-gray-700">
                <span>{Donation.totalRaised}</span>
                <span>Raised</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div
                  className="bg-pink-500 h-2 rounded-full"
                  style={{ width: Donation.progress }}
                ></div>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {Donation.backers} Backers
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
                Share
              </button>
              <Link
                to={`/donate/${Donation.id}`}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:no-underline hover:bg-pink-600 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
