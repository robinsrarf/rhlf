import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import img2 from "../../assets/images/HelpPeopleNow/img2.png";
import img3 from "../../assets/images/HelpPeopleNow/img3.png";
import vol1 from "../../assets/images/HelpPeopleNow/vol1.png";
import vol2 from "../../assets/images/HelpPeopleNow/vol2.png";
import vol3 from "../../assets/images/HelpPeopleNow/vol3.png";
import { Link } from "react-router-dom";

const imgs = [img2, img3];
const volen = [
  "https://placehold.co/300x300/aced/31343C",
  "https://placehold.co/300x300/aced/31343C",
  "https://placehold.co/300x300/aced/31343C",
]; //[vol1, vol2, vol3];

export default function HelpPeopleNow() {
  return (
    <section className="flex min-h-[620px] w-full flex-col items-center justify-center bg-pink-500 px-5 py-10">
      <h1 className="mb-5 text-center font-quicksand text-xl font-bold text-white md:mb-10 md:text-4xl lg:mb-10 lg:text-4xl">
        Join Our Family
      </h1>

      {/* Main Content Container */}
      <div className="lg:gap-30 flex w-full flex-col items-center gap-10 md:flex-row md:px-40 lg:flex-row lg:px-40">
        {/* Images Section */}
        <motion.div
          className="flex gap-5 md:gap-10 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {imgs.map((src, index) => (
            <motion.img
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              src={src}
              alt={`img-${index}`}
              className="w-[150px] rounded-full md:w-[200px] lg:w-[350px]"
            />
          ))}
        </motion.div>

        {/* Text and Action Section */}
        <div className="flex w-full flex-col items-center gap-6 md:w-[40%] md:items-start lg:w-[40%] lg:items-start">
          <h1 className="text-center font-quicksand text-3xl font-bold text-white md:text-4xl md:text-5xl lg:text-5xl">
            Charity For The People You Care About
          </h1>
          <p className="text-center text-lg text-zinc-200 md:text-left lg:text-left">
            At Real Happiness of Life Foundation, we believe that together, we
            can rewrite stories of despair into tales of hope and joy.
            Volunteering is a powerful way to create change—not just in the
            lives of others, but in your own life too. It's your chance to make
            a difference where it matters the most.
          </p>

          <div className="flex flex-col items-center gap-5 md:flex-row md:self-start lg:self-start">
            <a className="hover:no-underline" href="get-involved">
              <motion.div
                className="relative flex items-center gap-6 overflow-hidden rounded-full"
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-800"
                  variants={{
                    initial: { x: "-100%" },
                    animate: {
                      x: "-100%",
                      transition: { duration: 0.4, ease: "easeInOut" },
                    },
                    hover: {
                      x: "0%",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  }}
                />
                <div className="relative flex items-center text-white lg:gap-4">
                  <ChevronsRight
                    className="rounded-s-full bg-gray-800 p-2 lg:rounded-full"
                    size={40}
                  />
                  <p className="rounded-e-full bg-gray-800 px-1 py-2 pr-3 font-semibold lg:rounded-e-none lg:bg-transparent lg:px-3 lg:py-0">
                    Become A Volunteer
                  </p>
                </div>
              </motion.div>
            </a>
            <Link to="/about" className="hover:no-underline">
              <div className="flex items-center">
                {volen.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`volunteer-${index}`}
                    className="-ml-3 w-[60px] rounded-full border-4 border-white first:ml-0"
                  />
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
