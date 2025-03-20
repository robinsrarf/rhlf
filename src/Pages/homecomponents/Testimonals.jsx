import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import bgImage from "../../assets/images/testimonals/bg2.jpg";
import bgtestimonial from "../../assets/images/testimonals/testimonials.jpg";
import bgtexture from "../../assets/images/testimonals/PaperTexture.jpg";
import profile from "../../assets/images/person.png";
const testimonialData = [
  {
    author: "John Doe",
    testimonial:
      "This NGO has truly changed lives. Their commitment to education and healthcare is inspiring.",
    role: "Volunteer",
    rating: 5,
    image: "",
  },
  {
    author: "Jane Smith",
    testimonial:
      "The impact this organization has made in our community is incredible. I'm grateful to be a part of it.",
    role: "Donor",
    rating: 4,
    image: "",
  },
  {
    author: "Emily Johnson",
    testimonial:
      "I have seen first-hand how they support underprivileged children. Every donation counts!",
    role: "Beneficiary",
    rating: 5,
    image: "",
  },
  {
    author: "Michael Brown",
    testimonial:
      "A well-organized NGO that truly puts people first. Highly recommend getting involved!",
    role: "Partner Organization",
    rating: 4,
    image: "",
  },
  {
    author: "Sarah Wilson",
    testimonial:
      "Their dedication to social welfare is unmatched. It's been a pleasure collaborating with them.",
    role: "Corporate Sponsor",
    rating: 5,
    image: "",
  },
];

const Testimonals = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section
      className="flex h-[700px] w-full flex-col items-center justify-center bg-cover p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.7), rgba(219, 39, 119, 0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="my-10 w-full text-center font-quicksand text-2xl font-bold text-white lg:text-4xl">
        Testimonials
      </h2>
      <div className="mx-1 w-full lg:mx-auto lg:w-2/3">
        {/* Heading Box */}
        <div className="flex h-52 flex-col items-start justify-center rounded-t-lg border-2 border-white bg-transparent p-5 backdrop-blur-lg lg:p-10">
          <div className="flex flex-col items-center lg:flex-row lg:gap-20">
            <p className="w-full text-center font-quicksand text-3xl font-bold text-white lg:text-4xl">
              What They're Saying About Clean Heart
            </p>
            <img
              className="mt-2 w-56 rounded-full lg:w-80"
              src={bgtestimonial}
              alt="image"
            />
          </div>
        </div>

        {/* Testimonials Slider */}
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="flex h-72 flex-col justify-between rounded-b-lg bg-white bg-cover p-10 shadow-md lg:h-64"
      style={{ backgroundImage: `url(${bgtexture})` }}
    >
      <div className="flex items-center gap-5 lg:gap-4">
        <img
          className="w-14 lg:w-20"
          src={testimonial.image === "" ? profile : testimonial.image}
          alt="profile"
        />

        <div className="flex flex-col border-r-2 pr-2 lg:pr-11">
          <p className="font-semibold lg:text-xl">{testimonial.author}</p>
          <p className="text-sm font-semibold text-pink-600 lg:text-base">
            {testimonial.role}
          </p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>

      <p className="mt-1 text-xl font-bold italic text-gray-700 lg:mt-1 lg:text-2xl">
        {'"'}
        {testimonial.testimonial}
        {'"'}
      </p>
    </div>
  );
};

export default Testimonals;
