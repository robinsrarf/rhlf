import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/images/carouselimages/img1.jpg";
import img2 from "/src/assets/images/carouselimages/img2.jpg";
import img3 from "/src/assets/images/carouselimages/img3.jpg";

const images = [img1, img2, img3];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const CarouselImageClass = "rounded-lg";

  return (
    <div className="carousel-container w-[90%] m-auto p-0">
      <Slider {...settings} className=" rounded-lg">
        {images.map((src) => {
          return (
            <div className=" rounded-lg">
              <img src={src} alt={src} className={CarouselImageClass} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
