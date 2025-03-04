import { CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
export default function DonateCard({ DonationData }) {
  const scrollRef = useRef(null);
  return (
    <>
      {DonationData.map((Donation) => (
        <div
          key={Donation.id}
          className="hidden w-full overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-105 md:w-[48%] lg:block lg:w-[30%]"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={Donation.image}
              alt={Donation.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <span className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-yellow-500 p-1 px-3 text-sm text-white opacity-75 transition duration-300 hover:opacity-100 hover:shadow-md">
              Tax Benefit <CircleAlert size={15} className="rotate-180" />
            </span>
          </div>

          {/* Details Section */}
          <div className="space-y-3 p-5">
            <h4 className="text-lg font-semibold text-gray-900">
              {Donation.title}
            </h4>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="inline-block rounded-lg bg-gray-300 px-2 py-1 text-gray-800">
                {Donation.author}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex justify-between font-medium text-gray-700">
                <span>{Donation.totalRaised}</span>
                <span>Raised</span>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-pink-500"
                  style={{ width: Donation.progress }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {Donation.backers} Backers
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
                Share
              </button>
              <Link
                to={`/donate/${Donation.id}`}
                className="rounded-lg bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600 hover:no-underline"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/*Mobile View */}
      <div className="relative block w-full px-4 lg:hidden">
        {/* Navigation Buttons */}

        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory space-x-4 overflow-x-auto"
        >
          {DonationData.map((Donation) => (
            <div
              key={Donation.id}
              className="w-[95%] max-w-xs flex-shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={Donation.image}
                  alt={Donation.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-yellow-500 p-1 px-3 text-sm text-white opacity-75 transition duration-300 hover:opacity-100 hover:shadow-md">
                  Tax Benefit <CircleAlert size={15} className="rotate-180" />
                </span>
              </div>

              {/* Details Section */}
              <div className="space-y-3 p-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {Donation.title}
                </h4>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="inline-block rounded-lg bg-gray-300 px-2 py-1 text-gray-800">
                    {Donation.author}
                  </span>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between font-medium text-gray-700">
                    <span>{Donation.totalRaised}</span>
                    <span>Raised</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-pink-500"
                      style={{ width: Donation.progress }}
                    ></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {Donation.backers} Backers
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-between">
                  <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
                    Share
                  </button>
                  <Link
                    to={`/donate/${Donation.id}`}
                    className="rounded-lg bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600 hover:no-underline"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
