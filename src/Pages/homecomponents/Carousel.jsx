import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/images/carouselimages/img1.jpg";

const images = [img1]; // Change this to test with multiple images

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    arrows: false,
  };

  return (
    <div className="carousel-container m-auto w-[98%] p-0">
      {images.length > 1 ? ( // Use Slider only if more than one image
        <Slider {...settings} className="rounded-lg">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg">
              <img
                src={src}
                alt={`slide-${index}`}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        // Just display the single image without the carousel
        <div className="rounded-lg">
          <img
            src={images[0]}
            alt="single-slide"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
