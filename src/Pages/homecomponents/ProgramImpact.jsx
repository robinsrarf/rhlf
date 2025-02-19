import React from "react";
import { useRef, useState, useEffect } from "react";
import program1 from "../../assets/images/Program/program1.png";
import program2 from "../../assets/images/Program/program2.png";
import program3 from "../../assets/images/Program/program3.png";
import { section } from "framer-motion/client";
import { ArrowRight } from "lucide-react";

const Cards = [
  {
    title:
      "Grace Food Bank is serving around 100-150 people everyday at a price of Rs.10, whereas the actual cost comes around Rs.30 per meal which includes rent and salaries.",
    "Meals distributed": "100k",
    "Meals per day": "150",
    "Children benefitted": "2000",
    "Rupees per meal": "10",
    bgImg: program1,
  },
  {
    title:
      "The Mission Smile Program provides 100% free cleft repair surgeries and comprehensive care for children worldwide. We empower local medical professionals with the skills and resources to deliver ongoing cleft care.",
    "Cleft births annually": "35k",
    "For cleft surgery": "25k",
    "Free cleft care": "100%",
    "Minutes of life-changing surgery": "45",
    bgImg: program2,
  },
  {
    title:
      "Disability Elimination Program, led by the Real Happiness Of Life Foundation (RHLF), is focused on early detection, treatment, and rehabilitation of children with birth defects and developmental delays.",
    "Children impacted daily": "40L",
    "Disability,Disease,Development": "4D's",
    "Deic centers for rehabilitation": "250",
    bgImg: program3,
  },
];

const ProgramImpact = () => {
  return (
    <>
      <section className="hidden lg:block">
        <div className="container flex flex-col gap-y-6 justify-center items-center">
          <div className="flex-col gap-y-3 flex items-center justify-center ">
            <h1 className="text-black text-4xl font-bold">
              Program <span className="text-custompink">Impacts</span>
            </h1>
            <p className="text-xl text-gray-700 font-normal">
              Our various programmes help us reach out to those in need and
              provide for their safety and well-being
            </p>
            <div className="flex flex-row items-center justify-center gap-x-4 mt-10">
              {Cards.map((card, index) => (
                <CardContent key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <div className="container flex flex-col gap-y-6 justify-center items-center">
          <div className="flex-col gap-y-3 flex items-center justify-center ">
            <h1 className="text-black text-4xl font-bold">
              Program <span className="text-custompink">Impacts</span>
            </h1>
            <p className="text-xl text-gray-700 font-normal">
              Our various programmes help us reach out to those in need and
              provide for their safety and well-being
            </p>
            <div className="flex flex-col items-center justify-center gap-y-6 mt-10">
              {Cards.map((card, index) => (
                <CardContent key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CardContent = ({ card }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const details = Object.entries(card).filter(
    ([key]) => key !== "bgImg" && key !== "title"
  );

  // Function to split title and style the main part (e.g., 'Grace Food Bank')
  const styleTitle = (title) => {
    // Define the words you want to make bold and pink
    const pinkBoldWords = [
      "Grace Food Bank",
      "Mission Smile Program",
      "Disability Elimination Program",
    ];

    let styledTitle = title;

    // Apply bold and pink color to the matching words
    pinkBoldWords.forEach((word) => {
      const regex = new RegExp(word, "g");
      styledTitle = styledTitle.replace(
        regex,
        `<span class="text-pink-500 font-bold">${word}</span>`
      );
    });

    return styledTitle;
  };

  return (
    <>
      <div
        className="hidden lg:flex card relative border p-12 pt-36 hover:pt-7 rounded-2xl shadow-lg w-[350px] h-[450px] bg-cover bg-center transition-all duration-300 ease-in-out overflow-hidden hover:w-[650px] hover:h-[450px] justify-center items-center flex-col hover:justify-start hover:items-start"
        style={{
          backgroundImage: `url(${card.bgImg})`,
        }}
      >
        {/* Title with styled parts */}
        <div
          className="card-title text-white text-lg  transition-all duration-300 ease-in-out h-1/4 "
          dangerouslySetInnerHTML={{ __html: styleTitle(card.title) }}
        />

        {/* Details */}
        <div className="details flex flex-col gap-y-3 text-white transition-all duration-300 ease-in-out h-3/4 mt-10 opacity-0 hover:opacity-100 w-full">
          <div className="grid grid-cols-2">
            {/* Dynamically render the details */}
            {details.map(([key, value], index) => {
              const isFirst = index === 0; // Check if it's the first detail

              return (
                <div
                  key={key}
                  className="flex items-center justify-start gap-x-2"
                >
                  <p
                    className={`text-6xl font-semibold ${
                      isFirst ? "text-pink-500" : "text-white"
                    }`}
                  >
                    {value}
                  </p>
                  <p className="text-sm text-gray-200">
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-start ">
            <button className="p-4 bg-pink-500 text-white text-base rounded-3xl">
              Donate Now
            </button>
            <div className="text-pink-400 flex items-center gap-1">
              <p className=" text-base cursor-pointer">Read more</p>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        ref={cardRef}
        className="lg:hidden card relative border p-12 pt-36 rounded-2xl shadow-lg w-full h-auto bg-cover bg-center overflow-hidden transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${card.bgImg})` }}
      >
        <div className="card-title text-white text-lg">{card.title}</div>
        <div
          className={`details flex flex-col gap-y-3 text-white transition-opacity duration-700 ease-in-out mt-5 opacity-0 ${
            isVisible ? "opacity-100" : ""
          }`}
        >
          <div className="grid grid-cols-2 gap-y-4">
            {details.map(([key, value], index) => (
              <div key={key} className="flex flex-col items-start">
                <p className={`text-4xl font-semibold text-pink-500`}>
                  {value}
                </p>
                <p className="text-sm text-gray-200">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between  items-center mt-5">
            <button className="p-3 bg-pink-500 text-white text-base rounded-3xl">
              Donate Now
            </button>
            <div className="text-pink-400 flex items-center gap-1">
              <p className=" text-base cursor-pointer">Read more</p>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramImpact;

/*
import React, { useEffect, useRef, useState } from "react";
import program1 from "../../assets/images/Program/program1.png";
import program2 from "../../assets/images/Program/program2.png";
import program3 from "../../assets/images/Program/program3.png";

const Cards = [
  {
    title:
      "Grace Food Bank is serving around 100-150 people everyday at a price of Rs.10, whereas the actual cost comes around Rs.30 per meal which includes rent and salaries.",
    "Meals distributed": "100k",
    "Meals per day": "150",
    "Children benefitted": "2000",
    "Rupees per meal": "10",
    bgImg: program1,
  },
  {
    title:
      "The Mission Smile Program provides 100% free cleft repair surgeries and comprehensive care for children worldwide. We empower local medical professionals with the skills and resources to deliver ongoing cleft care.",
    "Cleft births annually": "35k",
    "For cleft surgery": "25k",
    "Free cleft care": "100%",
    "Minutes of life-changing surgery": "45",
    bgImg: program2,
  },
  {
    title:
      "Disability Elimination Program, led by the Real Happiness Of Life Foundation (RHLF), is focused on early detection, treatment, and rehabilitation of children with birth defects and developmental delays.",
    "Children impacted daily": "40L",
    "Disability,Disease,Development": "4D’s",
    "Deic centers for rehabilitation": "250",
    bgImg: program3,
  },
];

const ProgramImpact = () => {
  return (
    <div className="container flex flex-col gap-y-6 justify-center items-center">
      <div className="flex-col gap-y-3 flex items-center justify-center ">
        <h1 className="text-black text-4xl font-bold">
          Program <span className="text-custompink">Impacts</span>
        </h1>
        <p className="text-xl text-gray-700 font-normal">
          Our various programmes help us reach out to those in need and provide
          for their safety and well-being
        </p>
        <div className="flex flex-col items-center justify-center gap-y-6 mt-10">
          {Cards.map((card, index) => (
            <CardContent key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardContent = ({ card }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const details = Object.entries(card).filter(
    ([key]) => key !== "bgImg" && key !== "title"
  );

  return (
    <div
      ref={cardRef}
      className="card relative border p-12 pt-36 rounded-2xl shadow-lg w-[350px] h-auto bg-cover bg-center overflow-hidden transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${card.bgImg})` }}
    >
      <div className="card-title text-white text-lg">
        {card.title}
      </div>
      <div
        className={`details flex flex-col gap-y-3 text-white transition-opacity duration-700 ease-in-out mt-5 opacity-0 ${
          isVisible ? "opacity-100" : ""
        }`}
      >
        <div className="grid grid-cols-2 gap-y-4">
          {details.map(([key, value], index) => (
            <div key={key} className="flex flex-col items-start">
              <p className={`text-4xl font-semibold text-pink-500`}>{value}</p>
              <p className="text-sm text-gray-200">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-start mt-5">
          <button className="p-4 bg-pink-500 text-white text-base rounded-3xl">
            Donate Now
          </button>
          <p className="text-pink-400 text-base mt-5 cursor-pointer">
            Read more →
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramImpact;

*/
