import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Partners() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 9,
    speed: 400,
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Screens below 1024px
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768, // Screens below 768px (Tablets)
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480, // Screens below 480px (Mobile)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const importImage = (imageName) => {
    return new URL(`../../assets/images/Partners/${imageName}`, import.meta.url)
      .href;
  };

  const logos = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    "logo7.png",
    "logo8.png",
    "logo9.png",
    "logo10.png",
    "logo11.png",
    "logo12.png",
    "logo13.png",
    "logo14.png",
  ];

  return (
    <>
      <section className="my-4 w-full">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <img key={index} className="h-30" alt={index} src={importImage(logo)} />
          ))}
        </Slider>
      </section>
    </>
  );
}

{
  /* <div className="flex flex-col items-center justify-center">
<h2 className="font-[550] text-[22px] ">Our Partners</h2>
<div className="marquee-container">
  <div className="marquee mt-10">
    // {/* First set of logos */
}
// {logos.map((logo, index) => (
//   <img
//     key={index}
//     src={importImage(logo)}
//     alt={logo}
//     className="logo"
//   />
// ))}
// {/* Duplicate  */}
// {logos.map((logo, index) => (
//   <img
//     key={`duplicate-${index}`}
//     src={importImage(logo)}
//     alt={logo}
//     className="logo"
//   />
// ))}
// {logos.map((logo, index) => (
//   <img
//     key={`duplicate-${index}`}
//     src={importImage(logo)}
//     alt={logo}
//         className="logo"
//       />
//     ))}
//     {logos.map((logo, index) => (
//       <img
//         key={`duplicate-${index}`}
//         src={importImage(logo)}
//         alt={logo}
//         className="logo"
//       />
//     ))}
//     {logos.map((logo, index) => (
//       <img
//         key={`duplicate-${index}`}
//         src={importImage(logo)}
//         alt={logo}
//         className="logo"
//       />
//     ))}
//     {logos.map((logo, index) => (
//       <img
//         key={`duplicate-${index}`}
//         src={importImage(logo)}
//         alt={logo}
//         className="logo"
//       />
//     ))}
//   </div>
// </div>
// </div> */}
