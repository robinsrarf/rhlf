import React from "react";
import photo1 from "../../assets/images/testimonals/photo1.png";
import photo2 from "../../assets/images/testimonals/photo2.png";
import man from "../../assets/images/testimonals/man1.png";
import woman from "../../assets/images/testimonals/women.png";

const testimonalsData = [
  {
    id: 1,
    photo: man,
    quote:
      "“ The best way to find yourself is to lose yourself in the service of others “",
    name: "Ananth Desai, Bangalore",
  },
  {
    id: 2,
    photo: woman,
    quote:
      "“ The best way to find yourself is to lose yourself in the service of others “",
    name: "Radha Kumar, Bangalore",
  },
];

const Testimonals = () => {
  return (
    <section className="w-full py-5">
      <div className="flex flex-col items-center gap-y-6 px-4 md:px-0">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-x-10 w-full">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-right gap-x-2">
            <div className="flex flex-col items-center md:items-end">
              <h2 className="font-semibold text-base">
                {testimonalsData[0].quote}
              </h2>
              <p className="mt-2 text-sm">{testimonalsData[0].name}</p>
            </div>
            <img
              src={testimonalsData[0].photo}
              alt="Testimonial"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
          </div>
          {/* Right Side */}
          <div>
            <img
              src={photo1}
              alt="Background"
              className="w-full h-36 md:w-full md:h-52 object-cover"
            />
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-x-10 w-full">
          {/* Left Side */}
          <div>
            <img
              src={photo2}
              alt="Background"
              className="w-full h-36 md:w-full md:h-52 object-cover"
            />
          </div>
          {/* Right Side */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-right gap-x-2">
            <div className="flex flex-col items-center md:items-end">
              <h2 className="font-semibold text-base">
                {testimonalsData[1].quote}
              </h2>
              <p className="mt-2 text-sm">{testimonalsData[1].name}</p>
            </div>
            <img
              src={testimonalsData[1].photo}
              alt="Testimonial"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
