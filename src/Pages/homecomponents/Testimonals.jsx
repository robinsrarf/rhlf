import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircleDotDashed, Star } from "lucide-react";
import bgImage from "../../assets/images/testimonals/bg2.jpg";
import bgtestimonial from "../../assets/images/testimonals/testimonials.jpg";
import bgtexture from "../../assets/images/testimonals/PaperTexture.jpg";
const testimonialData = [
  {
    author: "John Doe",
    testimonial:
      "This NGO has truly changed lives. Their commitment to education and healthcare is inspiring.",
    role: "Volunteer",
    rating: 5,
  },
  {
    author: "Jane Smith",
    testimonial:
      "The impact this organization has made in our community is incredible. I'm grateful to be a part of it.",
    role: "Donor",
    rating: 4,
  },
  {
    author: "Emily Johnson",
    testimonial:
      "I have seen first-hand how they support underprivileged children. Every donation counts!",
    role: "Beneficiary",
    rating: 5,
  },
  {
    author: "Michael Brown",
    testimonial:
      "A well-organized NGO that truly puts people first. Highly recommend getting involved!",
    role: "Partner Organization",
    rating: 4,
  },
  {
    author: "Sarah Wilson",
    testimonial:
      "Their dedication to social welfare is unmatched. It's been a pleasure collaborating with them.",
    role: "Corporate Sponsor",
    rating: 5,
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
      className="w-full p-6 bg-cover h-[700px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.7), rgba(219, 39, 119, 0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full lg:ml-[620px] my-3 flex items-center gap-2 pb-2">
        <CircleDotDashed size={25} className="text-white" />
        <p className="text-white">TESTIMONIALS</p>
      </div>
      <div className="lg:w-2/3 w-full lg:mx-auto mx-1">
        {/* Heading Box */}
        <div className="flex flex-col justify-center h-52 items-start border-2 border-white rounded-t-lg lg:p-10 p-5 bg-transparent backdrop-blur-lg">
          <div className="flex flex-col lg:flex-row lg:gap-20 items-center">
            <p className=" w-full text-white lg:text-4xl text-3xl font-bold text-center">
              What They're Saying About Clean Heart
            </p>
            <img
              className=" w-56 mt-2 lg:w-80 rounded-full"
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
      className="p-10 lg:h-64 h-72 rounded-b-lg shadow-md bg-white flex flex-col justify-between bg-cover"
      style={{ backgroundImage: `url(${bgtexture})` }}
    >
      <div className="flex lg:gap-11 gap-5 items-center">
        <div className=" lg:pr-11 pr-5 border-r-2">
          <p className="text-xl  font-semibold">{testimonial.author}</p>
          <p className="font-semibold text-pink-600">{testimonial.role}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>

      <p className="lg:mt-1 mt-1 font-bold text-gray-700 text-xl lg:text-2xl italic">
        "{testimonial.testimonial}"
      </p>
    </div>
  );
};

export default Testimonals;

// import React from "react";
// import photo1 from "../../assets/images/testimonals/photo1.png";
// import photo2 from "../../assets/images/testimonals/photo2.png";
// import man from "../../assets/images/testimonals/man1.png";
// import woman from "../../assets/images/testimonals/women.png";

// const testimonalsData = [
//   {
//     id: 1,
//     photo: man,
//     quote:
//       "“ The best way to find yourself is to lose yourself in the service of others “",
//     name: "Ananth Desai, Bangalore",
//   },
//   {
//     id: 2,
//     photo: woman,
//     quote:
//       "“ The best way to find yourself is to lose yourself in the service of others “",
//     name: "Radha Kumar, Bangalore",
//   },
// ];

// const Testimonals = () => {
//   return (
//     <section className="w-full py-5">
//       <div className="flex flex-col items-center gap-y-6 px-4 md:px-0">
//         {/* Upper Section */}
//         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-x-10 w-full lg:px-10">
//           {/* Left Side */}
//           <div className="flex flex-col md:flex-row items-center text-center md:text-right gap-x-2">
//             <div className="flex flex-col items-center md:items-end">
//               <h2 className="font-semibold text-base">
//                 {testimonalsData[0].quote}
//               </h2>
//               <p className="mt-2 text-sm">{testimonalsData[0].name}</p>
//             </div>
//             <img
//               src={testimonalsData[0].photo}
//               alt="Testimonial"
//               className="w-12 h-12 md:w-16 md:h-16  rounded-full"
//             />
//           </div>
//           {/* Right Side */}
//           <div>
//             <img
//               src={photo1}
//               alt="Background"
//               className="w-full h-36 md:w-full md:h-52 object-cover lg:rounded-3xl rounded-2xl"
//             />
//           </div>
//         </div>

//         {/* Lower Section */}
//         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-x-10 w-full lg:px-10">
//           {/* Left Side */}
//           <div>
//             <img
//               src={photo2}
//               alt="Background"
//               className="w-full h-36 md:w-full md:h-52 object-cover lg:rounded-3xl rounded-2xl"
//             />
//           </div>
//           {/* Right Side */}
//           <div className="flex flex-col md:flex-row items-center text-center md:text-right gap-x-2">
//             <div className="flex flex-col items-center md:items-end">
//               <h2 className="font-semibold text-base">
//                 {testimonalsData[1].quote}
//               </h2>
//               <p className="mt-2 text-sm">{testimonalsData[1].name}</p>
//             </div>
//             <img
//               src={testimonalsData[1].photo}
//               alt="Testimonial"
//               className="w-12 h-12 md:w-16 md:h-16 rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonals;
