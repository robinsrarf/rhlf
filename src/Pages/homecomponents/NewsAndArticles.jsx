import { ChevronRight } from "lucide-react";
import SectionHeader from "../../Components/SectionHeader";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgtexture from "../../assets/images/testimonals/PaperTexture.jpg";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/Blogs/img1.jpg";
import img2 from "../../assets/images/Blogs/img2.jpg";
import img3 from "../../assets/images/Blogs/img3.jpg";
const dummydata = [
  {
    date: 5,
    month: "Mar",
    title: "NGO Launches Education Initiative",
    id: 1,
    image: img1,
  },
  {
    date: 12,
    month: "Apr",
    title: "Environmental Awareness Drive",
    id: 2,
    image: img2,
  },
  {
    date: 22,
    month: "May",
    title: "Women Empowerment",
    id: 3,
    image: img3,
  },
];
export default function NewsAndArticles() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Keeps desktop view intact
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Smaller Tablets & Large Phones
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <section className="flex w-full flex-col items-center px-4 py-16 md:px-8">
      <SectionHeader title="Our Latest News" />

      <div className="w-full max-w-7xl">
        <h2 className="mb-6 w-full text-center font-quicksand text-4xl font-bold text-gray-800">
          Latest <span className="font-quicksand text-pink-400">News</span> &{" "}
          <span className="font-quicksand text-pink-400">Blogs</span>
        </h2>
        <Slider {...settings}>
          {dummydata.map((data, index) => (
            <NewsCard
              key={index}
              image={data.image}
              id={data.id}
              title={data.title}
              date={data.date}
              month={data.month}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

function NewsCard({ date, month, title, id, image }) {
  return (
    <Link to={`/blogs/${id}`} className="block hover:no-underline">
      <motion.div
        className="relative mx-3 flex h-auto min-h-[400px] overflow-hidden rounded-xl"
        initial="initial"
        animate="initial"
        whileHover="onHover"
      >
        <div className="absolute left-1 top-0 z-10 h-64 w-[98%] overflow-hidden rounded-xl bg-cover md:h-64 lg:left-1">
          <motion.div
            className="absolute inset-0 left-1 z-10 h-64 w-[98%] rounded-xl bg-cover bg-center md:h-64 lg:left-1"
            style={{ backgroundImage: `url(${image})` }}
            transition={{ duration: 0.3 }}
            variants={{ initial: { scale: 1 }, onHover: { scale: 1.1 } }}
          ></motion.div>
          <motion.span
            className="absolute top-0 z-20 h-1/2 w-full rounded-t-xl bg-stone-600 opacity-50"
            transition={{ duration: 0.3 }}
            variants={{
              initial: { scaleX: 0, originX: 1 },
              onHover: { scaleX: 1 },
            }}
          />{" "}
          <motion.span
            className="absolute bottom-0 z-20 h-1/2 w-full rounded-b-xl bg-stone-600 opacity-50"
            transition={{ duration: 0.3 }}
            variants={{
              initial: { scaleX: 0, originX: 0 },
              onHover: { scaleX: 1 },
            }}
          />
        </div>

        <div className="absolute top-5 z-20 ml-6 mt-1 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white text-sm font-bold text-black">
          <motion.div
            className="absolute inset-0 z-30 rounded-full bg-pink-500"
            variants={{
              initial: { scale: 0 },
              onHover: { scale: 1.1 },
            }}
          ></motion.div>

          <p className="absolute top-2 z-40 w-full text-center">{date}</p>
          <p className="absolute bottom-2 z-40 w-full text-center">{month}</p>
        </div>
        <div
          className="mt-auto w-full rounded-xl bg-cover px-5 pt-10"
          style={{ backgroundImage: `url(${bgtexture})` }}
        >
          <h3 className="mt-20 text-lg font-semibold text-gray-900">{title}</h3>
          <div className="mb-10 mt-4 flex items-center text-pink-500">
            <span className="font-medium">Read More</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
