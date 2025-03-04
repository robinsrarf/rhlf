import { CircleDotDashed, ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/HelpPeopleNow/img1.png";
import img2 from "../../assets/images/HelpPeopleNow/img2.png";
import img3 from "../../assets/images/HelpPeopleNow/img3.png";
import vol1 from "../../assets/images/HelpPeopleNow/volunteer-image-1.png";
import vol2 from "../../assets/images/HelpPeopleNow/volunteer-image-2.png";
import vol3 from "../../assets/images/HelpPeopleNow/volunteer-image-3.png";

const imgs = [img1, img2, img3];
const volen = [vol1, vol2, vol3];

export default function HelpPeopleNow() {
  return (
    <section className="relative my-5 flex min-h-[820px] w-full flex-col items-center bg-pink-500 px-5 py-10 md:flex-row md:items-center">
      {/* Images Section */}
      <div className="hidden md:absolute md:right-60 md:flex md:w-full md:gap-10">
        {imgs.map((src, index) => (
          <motion.img
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={src}
            alt={`img-${index}`}
            className="w-[350px]"
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="flex w-full max-w-[500px] flex-col items-center gap-4 md:absolute md:right-[450px] md:top-28 md:items-start">
        <div className="flex items-center gap-2 self-start">
          <CircleDotDashed size={20} className="text-white" />
          <p className="text-white">Help People Now</p>
        </div>
        <h1 className="mb-5 text-center text-3xl font-bold text-white md:text-5xl">
          Join Our Family of Changemakers - Become a Volunteer Today!
        </h1>
        <p className="pl-5 text-center text-lg text-zinc-200 md:text-left">
          At Real Happiness of Life Foundation, we believe that together, we can
          rewrite stories of despair into tales of hope and joy. Volunteering is
          a powerful way to create change—not just in the lives of others, but
          in your own life too. It's your chance to make a difference where it
          matters the most.
        </p>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <motion.div
            className="flex items-center gap-6 rounded-full px-4 md:px-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ backgroundColor: "rgb(31,41,55)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ChevronsRight
              className="rounded-full bg-gray-800 p-2 text-white"
              size={40}
            />
            <p className="pr-3 font-semibold text-white">Become A Volunteer</p>
          </motion.div>

          {/* Volunteer Images */}
          <div className="flex items-center pl-3">
            {volen.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`volunteer-${index}`}
                className="-ml-3 w-[50px] rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
