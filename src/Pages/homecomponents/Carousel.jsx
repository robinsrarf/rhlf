import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/images/carouselimages/img1.jpg";
import img2 from "/src/assets/images/carouselimages/img2.jpg";
import img3 from "/src/assets/images/carouselimages/img3.jpg";
import img4 from "/src/assets/images/carouselimages/img4.jpg";
import img5 from "/src/assets/images/carouselimages/img5.jpg";
const images = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-container m-auto w-[98%] p-0">
      <Slider {...settings} className="rounded-lg">
        {images.map((src) => {
          return (
            <div key={src} className="rounded-lg">
              <img src={src} alt={src} className="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
