import {
  HeartHandshake,
  HandCoins,
  PiggyBank,
  CircleDotDashed,
} from "lucide-react";
import "/src/CSS/Homepage.css";
import bgImage from "/src/assets/images/AboutCleanHeart/bg-image.jpg";
import image1 from "/src/assets/images/AboutCleanHeart/img1.jpg";
import image2 from "/src/assets/images/AboutCleanHeart/img2.jpg";
import image3 from "/src/assets/images/AboutCleanHeart/img3.jpg";
import founder from "/src/assets/images/AboutCleanHeart/founder.jpg";

export default function AboutCleanHeat() {
  return (
    <>
      {/*Desktop view */}
      <section className="hidden lg:flex w-full h-[28rem] mt-10 mb-10">
        <div className="relative w-full h-full">
          <div
            className="absolute top-0 left-0 z-10 h-[35rem] w-[950px] rounded-e-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>

          <div className="absolute z-20 h-[35rem] animated-div break-keep border-[6px] border-pink-400 rounded-e-full border-s-transparent"></div>
          <div
            className="absolute top-10 left-[450px] z-30 h-[30rem] w-[30rem] bg-cover rounded-full"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>

          <div
            className="absolute top-10 left-[400px] z-30 h-[10rem] w-[10rem] bg-cover rounded-full"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>

          <div className="w-96 flex gap-5 items-center absolute -bottom-20 left-[650px] z-30 bg-white p-2 pr-5 rounded-full">
            <div
              className=" h-[6rem] w-[6rem] bg-cover rounded-full"
              style={{ backgroundImage: `url(${founder})` }}
            ></div>
            <div className="flex flex-col items-center">
              <p className="hover: transition duration-300">
                Mr. Shivam Pathak
              </p>
              <p className="text-pink-400">Director & CEO</p>
            </div>
          </div>
          <div className="absolute w-[650px] flex flex-col items-start p-7 gap-2 top-10 left-[930px] z-30">
            <p className="flex items-center gap-3 font-bold text-pink-400">
              <CircleDotDashed size={20} />
              ABOUT CLEAN HEART
            </p>
            <h className=" text-rose-950 font-bold text-5xl">
              Helping Each Other Can Make the World Better
            </h>
            <div className="flex items-center pt-2 gap-2">
              <img src={image3} className=" w-44 rounded-full " />
              <p className="text-neutral-600">
                We work together to create meaningful social impact by driving
                change, supporting communities, and building better
                opportunities for everyone.
              </p>
            </div>

            <div className="flex space-x-24 pt-[100px] p-7">
              <div className="flex flex-col  items-center">
                <HeartHandshake
                  size={40}
                  className="text-pink-400 hover:text-black hover:scale-110 transition duration-300"
                />
                <p>Join Our Team</p>
                <p className="text-pink-400">120+</p>
              </div>

              <div className="flex flex-col pb-6 items-center">
                <HandCoins
                  size={40}
                  className="text-pink-400 hover:text-black hover:scale-110 transition duration-300"
                />
                <p>Donate Now</p>
              </div>
              <div className="flex flex-col items-center">
                <PiggyBank
                  size={40}
                  className="text-pink-400 hover:text-black hover:scale-110 transition duration-300"
                />
                <p>Total Fund Raised</p>
                <p className="text-pink-400">15 Lakhs+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Mobile View*/}
      <section className="lg:hidden flex flex-col w-full my-10 px-4">
        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center">
          <div
            className="h-[20rem] w-[20rem] bg-cover rounded-full"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          {/* Founder Info */}
          <div className="absolute bottom-0  flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg transition hover:shadow-xl">
            <div
              className="h-[5rem] w-[5rem] bg-cover rounded-full"
              style={{ backgroundImage: `url(${founder})` }}
            ></div>
            <div className="flex flex-col">
              <p className="font-semibold">Mr. Shivam Pathak</p>
              <p className="text-pink-500 text-sm">Director & CEO</p>
            </div>
          </div>
        </div>

        <div className="self-center w-full flex flex-col items-start p-6 gap-4">
          <p className="flex items-center gap-3 font-bold text-pink-500">
            <CircleDotDashed size={20} />
            ABOUT CLEAN HEART
          </p>
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

          <div className="flex justify-between w-full p-6">
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
        </div>
      </section>
    </>
  );
}
