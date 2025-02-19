import { CircleDotDashed, Star } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CommentsSlide(Author, role, rating, comment) {

  const rate = []
  for (let i =0; i <rating; i++) 
  return (
    <>
      <div className="flex felx-col">
        <div>
          <div>
            <h1>{Author}</h1>
            <p>{role}</p>
          </div>
          <div>
              {for(let i = 0; i < rating){}}
          </div>
        </div>

        <div>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <section>
        <div>
          <div className="flex gap-2 text-white">
            <CircleDotDashed />
            <p>TESTIMONIALS</p>
          </div>
          <div>
            <div>
              <h1>What They're Talking About Clean Heart</h1>
            </div>
            <div>
              {/**Carousel */}

              <Slider {...settings}></Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
