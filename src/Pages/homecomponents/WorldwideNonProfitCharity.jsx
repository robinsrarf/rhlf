import { CircleDotDashed } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const items = [
  {
    image: "https://placehold.co/400x600/EEE/31343C",
    title: "Save Life",
    link: "https://example.com/item1",
  },
  {
    image: "https://placehold.co/400x600/EEE/31343C",
    title: "Misson Zero hunger",
    link: "https://example.com/item2",
  },
  {
    image: "https://placehold.co/400x600/EEE/31343C",
    title: "Misson Education Program",
    link: "https://example.com/item3",
  },
  {
    image: "https://placehold.co/400x600/EEE/31343C",
    title: "Home For Homeless",
    link: "https://example.com/item4",
  },
];

export default function WorldwideNonprofitCharity() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col p-5">
        <div className="my-3 flex w-full items-center gap-2 self-center pb-2 lg:ml-[620px]">
          <CircleDotDashed size={25} className="text-pink-500" />
          <p className="font-semibold text-black">
            World Wide Non Profit Charity
          </p>
        </div>
        <h1 className="font-quicksand mb-3 self-center text-center text-4xl font-semibold lg:w-[600px] lg:text-5xl">
          Give a Helping Hand For Needy People
        </h1>
        <div className="mx-auto flex w-full flex-wrap items-center justify-center lg:h-[70%] lg:w-[70%]">
          {items.map((value, index) => {
            return (
              <div key={index} className="mb-5 w-full p-2 lg:w-auto">
                <DonationCard
                  image={value.image}
                  title={value.title}
                  link={value.link}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function DonationCard({ image, title, link }) {
  return (
    <>
      <a href={link}>
        <motion.div
          className="flex flex-col gap-4 md:flex-row"
          initial="rest"
          onTap="hover"
          whileHover="hover"
          animate="rest"
        >
          <motion.div className="relative h-60 w-full overflow-hidden rounded-xl md:h-80 md:w-72">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="relative flex h-60 w-full flex-col items-center justify-center gap-2 rounded-xl bg-stone-200 md:h-80 md:w-72">
            <motion.div className="absolute z-50 flex w-full flex-col items-center gap-2">
              <motion.p
                className="text-center text-xl font-semibold"
                variants={{
                  rest: { color: "#000000" },
                  hover: { color: "#ffffff" },
                }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.p>
              <motion.button
                className="rounded-full bg-pink-500 p-2 font-semibold text-white"
                variants={{
                  rest: { color: "#e7e5e4" },
                  hover: { color: "#44403c" },
                }}
                transition={{ duration: 0.3 }}
              >
                Donate Now
              </motion.button>
            </motion.div>

            <motion.span
              className="absolute inset-0 z-10 rounded-xl bg-stone-700"
              style={{ originX: 1, originY: 1 }}
              variants={{
                rest: { scale: 0 },
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </a>
    </>
  );
}
