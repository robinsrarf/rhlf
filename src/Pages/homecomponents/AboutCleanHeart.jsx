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
      <section className="my-10 hidden w-full flex-col justify-center px-10 lg:flex">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="font-quicksand mt-2 text-5xl font-bold leading-tight text-rose-950">
            Helping Each Other Can Make the World Better
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8">
          <img src={image3} className="w-56 rounded-full shadow-lg" />
          <p className="max-w-lg text-2xl text-neutral-600">
            We work together to create meaningful social impact by driving
            change, supporting communities, and building better opportunities
            for everyone.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-20">
          <div className="flex flex-col items-center">
            <HeartHandshake
              size={50}
              className="transform text-pink-400 transition duration-300 hover:scale-110 hover:text-black"
            />
            <p className="mt-2 text-lg font-semibold">Join Our Team</p>
            <p className="text-xl font-bold text-pink-400">120+</p>
          </div>

          <div className="flex flex-col items-center">
            <HandCoins
              size={50}
              className="transform text-pink-400 transition duration-300 hover:scale-110 hover:text-black"
            />
            <p className="mt-2 text-lg font-semibold">Donate Now</p>
          </div>

          <div className="flex flex-col items-center">
            <PiggyBank
              size={50}
              className="transform text-pink-400 transition duration-300 hover:scale-110 hover:text-black"
            />
            <p className="mt-2 text-lg font-semibold">Total Fund Raised</p>
            <p className="text-xl font-bold text-pink-400">15 Lakhs+</p>
          </div>
        </div>
      </section>

      {/*Mobile View*/}
      <section className="my-1 flex w-full flex-col lg:hidden">
        <div className="flex w-full flex-col items-start gap-4 self-center px-6">
          <h2 className="text-4xl font-bold leading-tight text-rose-950">
            Helping Each Other Can Make the World Better
          </h2>

          <div className="flex items-center gap-3 pt-3">
            <img src={image3} className="w-36 rounded-full object-cover" />
            <p className="text-sm text-neutral-600">
              We work together to create meaningful social impact by driving
              change, supporting communities, and building better opportunities
              for everyone.
            </p>
          </div>
          <hr className="w-full border-pink-200" />
          <div className="flex w-full justify-between p-1">
            {/* Join Our Team */}
            <div className="flex flex-col items-center">
              <HeartHandshake
                size={40}
                className="text-pink-500 transition duration-300 hover:scale-110 hover:text-black"
              />
              <p className="text-sm">Join Our Team</p>
              <p className="font-semibold text-pink-500">120+</p>
            </div>

            {/* Donate Now */}
            <div className="flex flex-col items-center">
              <HandCoins
                size={40}
                className="text-pink-500 transition duration-300 hover:scale-110 hover:text-black"
              />
              <p className="text-sm">Donate Now</p>
            </div>

            {/* Total Fund Raised */}
            <div className="flex flex-col items-center">
              <PiggyBank
                size={40}
                className="text-pink-500 transition duration-300 hover:scale-110 hover:text-black"
              />
              <p className="text-sm">Total Fund Raised</p>
              <p className="font-semibold text-pink-500">15 Lakhs+</p>
            </div>
          </div>
          <hr className="w-full border-pink-200" />
        </div>
      </section>
    </>
  );
}
