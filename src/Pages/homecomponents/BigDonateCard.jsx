import bgKid from "../../assets/images/bgKid.jpg";
import bgKid1 from "../../assets/images/bgKid1.jpg";
import { useState } from "react";
import { ChevronsRight, Check } from "lucide-react";
import { motion } from "framer-motion";
function BigDonateCard() {
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-10 px-4 md:flex-row lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is in view
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 }, // Stagger animation
        },
      }}
    >
      {/* Left Card */}
      <motion.div
        className="relative h-[35rem] w-full overflow-hidden rounded-xl shadow-lg lg:h-[26rem] lg:w-[36rem]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <img
          src={bgKid}
          alt="Donation Image"
          className="absolute inset-0 h-full w-full bg-cover object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-50 bg-gradient-to-r from-black via-black/10 to-transparent p-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Make A Difference Today!
            </h2>
            <p className="text-md mt-5 text-wrap text-gray-200">
              Partner with Real Happiness Of Life Foundation to drive meaningful
              change through Corporate Social Responsibility, impactful
              donations, and thoughtful grantmaking strategies.
            </p>
            <ul className="text-md mt-8 flex flex-col font-semibold text-white lg:grid lg:grid-cols-2 lg:gap-4">
              {[
                "Donate With Purpose",
                "Support With Care",
                "Make A Difference",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex w-full items-center gap-4 px-3 py-2 lg:py-0"
                >
                  <span className="text-pink-600">
                    <Check strokeWidth={4} />
                  </span>
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button className="flex w-44 items-center gap-3 rounded-full border-2 border-white p-2 font-semibold text-white shadow-md backdrop-blur-lg transition duration-300 hover:bg-white hover:text-black">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white">
              <ChevronsRight strokeWidth={3} size={24} />
            </span>
            Read More
          </button>
        </div>
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="relative h-[35rem] w-full overflow-hidden rounded-xl shadow-lg lg:h-[26rem] lg:w-[36rem]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <img
          src={bgKid1}
          alt="Donation Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-r from-black to-transparent p-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Transform Lives Every Month - Join The Mission Today!
            </h2>
            <p className="text-md mt-5 text-gray-200">
              Make a lasting impact by contributing monthly to help those in
              need. Together, we can create a brighter, healthier, and happier
              world for all.
            </p>
            <div className="mt-14 flex flex-wrap items-center lg:mt-4 lg:flex-col lg:gap-4">
              {/* Custom Amount Input */}
              <div className="order-2 -ml-24 mt-4 flex h-14 w-44 items-center justify-between rounded-full border-2 border-white text-sm text-white backdrop-blur-lg lg:-ml-0 lg:mt-0 lg:self-start">
                <p className="px-4">Custom</p>
                <div className="flex h-full w-full items-center justify-center rounded-full border">
                  <label className="">₹</label>
                  <input
                    type="text"
                    value={amount}
                    className="h-full max-w-10 rounded-full border-none bg-transparent text-center text-sm text-white outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Preset Donation Buttons */}
              <div className="order-1 flex flex-wrap gap-2 rounded-full p-1 lg:gap-4 lg:self-start lg:border-0 lg:p-0">
                {[250, 500, 1000].map((value) => (
                  <button
                    key={value}
                    className={`${
                      amount == value
                        ? "border-pink-600 bg-pink-600"
                        : "bg-transparent backdrop-blur-lg"
                    } rounded-full border-2 px-5 py-2 text-sm text-white transition duration-300 hover:border-pink-600 hover:bg-pink-600`}
                    onClick={() => setAmount(value)}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <button className="mt-4 flex w-44 items-center gap-3 rounded-full border-2 border-white p-2 font-semibold text-white shadow-md backdrop-blur-lg transition duration-300 hover:bg-white hover:text-black">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white">
              <ChevronsRight strokeWidth={3} size={24} />
            </span>
            <p>Donate Now</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BigDonateCard;
