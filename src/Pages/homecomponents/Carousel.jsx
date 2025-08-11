import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/images/carouselimages/img1.jpg";
import img2 from "/src/assets/images/carouselimages/img2.jpg";

const images = [img1, img2]; // Change this to test with multiple images

function PrevArrows(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={` ${className} !z-10 !flex !scale-[140%] !items-center !justify-center !rounded-full !bg-red-500 !p-2 transition-colors hover:!bg-blue-600`}
      style={{ ...style, left: "-40px" }} // Adjust position as needed
      onClick={onClick}
    ></div>
  );
}

function NextArrows(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} !z-10 !flex !scale-[140%] !items-center !justify-center !rounded-full !bg-red-500 !p-2 transition-colors hover:!bg-blue-600`}
      style={{ ...style, right: "-40px" }}
      onClick={onClick}
    ></div>
  );
}

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    arrows: true,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />,
  };

  return (
    <div className="carousel-container w-[100%] p-0 md:w-[98%] lg:w-[90vw] lg:py-1">
      {images.length > 1 ? ( // Use Slider only if more than one image
        <Slider {...settings} className="rounded-lg">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg">
              <img
                src={src}
                alt={`slide-${index}`}
                className="h-auto w-full rounded-lg object-center lg:h-[90vh]"
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
