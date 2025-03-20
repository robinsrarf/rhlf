import { CircleDotDashed } from "lucide-react";
import SaveLife from "../../assets/images/WorldwideNonProfitCharity/SaveLife.jpg";
import EducationProgram from "../../assets/images/WorldwideNonProfitCharity/EducationProgram.jpg";
import ZeroHunger from "../../assets/images/WorldwideNonProfitCharity/ZeroHunger.jpg";
import HomeForHomeless from "../../assets/images/WorldwideNonProfitCharity/HomeForHomeless.jpg";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
const items = [
  {
    image: SaveLife,
    title: "Save Life",
    link: "https://example.com/item1",
  },
  {
    image: ZeroHunger,
    title: "Misson Zero hunger",
    link: "https://example.com/item2",
  },
  {
    image: EducationProgram,
    title: "Misson Education Program",
    link: "https://example.com/item3",
  },
  {
    image: HomeForHomeless,
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
        <h1 className="my-4 self-center text-center font-quicksand text-4xl font-semibold lg:w-[600px] lg:whitespace-nowrap">
          Give a Helping
          <span className="font-quicksand text-pink-500"> Hand </span> For{" "}
          <span className="font-quicksand text-pink-500"> Needy People</span>
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
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (Tailwind's "md" breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <a href={link}>
        <motion.div
          className="flex flex-col gap-4 md:flex-row"
          initial="rest"
          // whileInView="hover"
          whileHover="hover"
          animate="rest"
          {...(imgInView && isMobile ? { whileInView: "hover" } : {})}
        >
          <motion.div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-80 lg:w-72">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              ref={imgRef}
              style={{ backgroundImage: `url(${image})` }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 h-10 w-[600px] -rotate-45 bg-gradient-to-t from-white via-white/50 to-transparent opacity-50"
                variants={{
                  rest: { x: "-70%", y: "200%", rotate: -45 },
                  hover: { x: "100%", y: "700%" },
                }}
                transition={{ duration: 0.6, ease: "easeIn" }}
              />
            </motion.div>
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
