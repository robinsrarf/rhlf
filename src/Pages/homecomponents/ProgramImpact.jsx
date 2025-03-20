import { useRef, useState, useEffect } from "react";
import program1 from "../../assets/images/Program/program1.png";
import program2 from "../../assets/images/Program/program2.png";
import program3 from "../../assets/images/Program/program3.png";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Cards = [
  {
    title:
      "Grace Food Bank is serving around 100-150 people everyday at a price of Rs.10, whereas the actual cost comes around Rs.30 per meal which includes rent and salaries.",

    keyValue: {
      "Meals distributed": "100k",
      "Meals per day": "150",
      "Children benefitted": "2000",
      "Rupees per meal": "10",
    },
    bgImg: program1,
  },
  {
    title:
      "The Mission Smile Program provides 100% free cleft repair surgeries and comprehensive care for children worldwide. We empower local medical professionals with the skills and resources to deliver ongoing cleft care.",

    keyValue: {
      "Cleft births annually": "35k",
      "For cleft surgery": "25k",
      "Free cleft care": "100%",
      "Minutes of life-changing surgery": "45",
    },
    bgImg: program2,
  },
  {
    title:
      "Disability Elimination Program, led by the Real Happiness Of Life Foundation (RHLF), is focused on early detection, treatment, and rehabilitation of children with birth defects and developmental delays.",

    keyValue: {
      "Children impacted daily": "40L",
      "Disability, Disease, Development": "4D's",
      "Deic centers for rehabilitation": "250",
    },
    bgImg: program3,
  },
];

function ProgramImpact() {
  return (
    <>
      <section className="flex w-full flex-col justify-center py-10">
        <h1 className="my-1 w-full text-center font-quicksand text-4xl font-bold text-gray-800">
          Program <span className="font-quicksand text-pink-400">Impacts</span>
        </h1>
        <p className="w-full px-2 py-3 text-center font-normal text-gray-700 lg:text-2xl">
          Our various programmes help us reach out to those in need and provide
          for their safety and well-being
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
          {Cards.map((card, index) => (
            <ProgramCard
              key={index}
              text={card.title}
              keyValue={card.keyValue}
              link={"/"}
              bgImg={card.bgImg}
            />
          ))}
        </div>
      </section>
    </>
  );
}
function ProgramCard({ text, keyValue, link, bgImg }) {
  const mobRef = useRef(null);
  const mobInView = useInView(mobRef);
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
      <motion.div
        className="flex h-[600px] w-[400px] flex-col rounded-xl bg-cover bg-center py-10 lg:h-[450px] lg:w-[350px] lg:px-5"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          rest: { width: "350px", paddingLeft: "40px", paddingRight: "40px" },
          hover: { width: "650px" },
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full text-white"
          variants={{ rest: { y: "70px" }, hover: { y: "0%" } }}
          transition={{ duration: 0.3 }}
          {...(mobInView && isMobile ? { whileInView: "hover" } : {})}
        >
          <p className="w-full text-lg" ref={mobRef}>
            {text}
          </p>
        </motion.div>
        <motion.div
          className="mt-auto grid grid-cols-2 gap-3 lg:gap-0"
          variants={{
            rest: { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          {...(mobInView && isMobile ? { whileInView: "hover" } : {})}
          transition={{ duration: 0.3 }}
        >
          {Object.keys(keyValue).map((key, index) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center lg:flex-row lg:gap-2 lg:py-4"
            >
              <span
                className={`${index ? "text-white" : "text-pink-500"} w-full text-3xl font-semibold lg:w-fit lg:text-6xl`}
              >
                {keyValue[key]}
              </span>
              <span className="w-full text-wrap font-semibold text-gray-300 lg:w-fit">
                {key}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex w-full py-6 lg:py-6"
          variants={{
            rest: { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          {...(mobInView && isMobile ? { whileInView: "hover" } : {})}
          transition={{ duration: 0.3 }}
        >
          <Link
            className="mr-auto rounded-full bg-pink-500 p-2 text-sm text-white transition duration-300 hover:bg-white hover:text-pink-500 hover:no-underline lg:p-3 lg:text-base"
            to={link}
          >
            Donate Now
          </Link>
          <Link
            className="flex items-center justify-center text-sm text-pink-500 hover:no-underline lg:text-base"
            to={link}
          >
            Read More <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
export default ProgramImpact;
