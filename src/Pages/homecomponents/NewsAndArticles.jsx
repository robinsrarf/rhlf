import { ChevronRight } from "lucide-react";
import SectionHeader from "../../Components/SectionHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgtexture from "../../assets/images/testimonals/PaperTexture.jpg";
const dummydata = [
  {
    date: 5,
    month: "Mar",
    title: "NGO Launches Education Initiative",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 12,
    month: "Apr",
    title: "Health Camp for Underprivileged Communities",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 22,
    month: "May",
    title: "Environmental Awareness Drive",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 8,
    month: "Jun",
    title: "Women Empowerment Workshop",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 15,
    month: "Jul",
    title: "Fundraising Campaign for Rural Development",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 30,
    month: "Aug",
    title: "Disaster Relief Program Launched",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 10,
    month: "Sep",
    title: "Skill Development Training for Youth",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 25,
    month: "Oct",
    title: "Annual Report on NGO Achievements",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 5,
    month: "Nov",
    title: "Food Distribution Drive Before Winter",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    date: 20,
    month: "Dec",
    title: "Volunteer Appreciation Event",
    link: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
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
    <section className="flex w-full flex-col items-center bg-gray-100 px-4 py-16 md:px-8">
      <SectionHeader title="Our Latest News" />

      <div className="w-full max-w-7xl">
        <h2 className="mb-6 ml-4 text-2xl font-bold text-gray-800 md:text-4xl">
          Latest News & Articles
        </h2>
        <Slider {...settings}>
          {dummydata.map((data, index) => (
            <NewsCard
              key={index}
              image={data.image}
              link={data.link}
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

function NewsCard({ date, month, title, link, image }) {
  return (
    <a href={link} className="block">
      <div className="relative mx-3 flex h-auto min-h-[400px] overflow-hidden rounded-xl">
        <img
          src={image}
          alt="News"
          className="w-4/3 absolute top-0 z-10 h-64 rounded-xl object-cover md:h-64 lg:left-2.5"
        />
        <div className="absolute top-5 z-20 ml-6 mt-1 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-400 text-sm font-bold text-black">
          <p>{date}</p>
          <p>{month}</p>
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
      </div>
    </a>
  );
}
