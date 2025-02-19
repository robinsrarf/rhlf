import {
  HeartHandshake,
  HandCoins,
  PiggyBank,
  CircleDotDashed,
} from "lucide-react";
import image3 from "/src/assets/images/AboutCleanHeart/img3.jpg";
import SectionHeader from "../../Components/SectionHeader";
export default function AboutCleanHeat() {
  return (
    <>
      <SectionHeader title={"About Clean Heart"} />
      <section className="hidden lg:flex flex-col justify-center w-full my-10 px-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-rose-950 font-bold text-5xl leading-tight mt-2">
            Helping Each Other Can Make the World Better
          </h2>
        </div>

        <div className="flex items-center justify-center gap-8 mt-10">
          <img src={image3} className="w-56 rounded-full shadow-lg" />
          <p className="text-neutral-600 text-2xl max-w-lg">
            We work together to create meaningful social impact by driving
            change, supporting communities, and building better opportunities
            for everyone.
          </p>
        </div>

        <div className="flex justify-center gap-20 mt-16">
          <div className="flex flex-col items-center">
            <HeartHandshake
              size={50}
              className="text-pink-400 hover:text-black transform hover:scale-110 transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">Join Our Team</p>
            <p className="text-pink-400 text-xl font-bold">120+</p>
          </div>

          <div className="flex flex-col items-center">
            <HandCoins
              size={50}
              className="text-pink-400 hover:text-black transform hover:scale-110 transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">Donate Now</p>
          </div>

          <div className="flex flex-col items-center">
            <PiggyBank
              size={50}
              className="text-pink-400 hover:text-black transform hover:scale-110 transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">Total Fund Raised</p>
            <p className="text-pink-400 text-xl font-bold">15 Lakhs+</p>
          </div>
        </div>
      </section>

      {/*Mobile View*/}
      <section className="lg:hidden flex flex-col w-full my-1">
        <div className="self-center w-full flex flex-col items-start px-6 gap-4">
          <h2 className="text-rose-950 font-bold text-4xl leading-tight">
            Helping Each Other Can Make the World Better
          </h2>

          <div className="flex items-center gap-3 pt-3">
            <img src={image3} className="w-36  rounded-full object-cover" />
            <p className="text-neutral-600 text-sm">
              We work together to create meaningful social impact by driving
              change, supporting communities, and building better opportunities
              for everyone.
            </p>
          </div>
          <hr className="border-pink-200 w-full"/>
          <div className="flex justify-between w-full p-1">
            {/* Join Our Team */}
            <div className="flex flex-col items-center">
              <HeartHandshake
                size={40}
                className="text-pink-500 hover:text-black hover:scale-110 transition duration-300"
              />
              <p className="text-sm">Join Our Team</p>
              <p className="text-pink-500 font-semibold">120+</p>
            </div>

            {/* Donate Now */}
            <div className="flex flex-col items-center">
              <HandCoins
                size={40}
                className="text-pink-500 hover:text-black hover:scale-110 transition duration-300"
              />
              <p className="text-sm">Donate Now</p>
            </div>

            {/* Total Fund Raised */}
            <div className="flex flex-col items-center">
              <PiggyBank
                size={40}
                className="text-pink-500 hover:text-black hover:scale-110 transition duration-300"
              />
              <p className="text-sm">Total Fund Raised</p>
              <p className="text-pink-500 font-semibold">15 Lakhs+</p>
            </div>
          </div>
          <hr className="border-pink-200 w-full"/>
        </div>
      </section>
    </>
  );
}
