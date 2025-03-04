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
        <div className="container flex flex-col items-center justify-center gap-y-6">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-4xl font-bold text-black">
              Program <span className="text-custompink">Impacts</span>
            </h1>
            <p className="text-xl font-normal text-gray-700">
              Our various programmes help us reach out to those in need and
              provide for their safety and well-being
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-x-4">
              {Cards.map((card, index) => (
                <CardContent key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <div className="container flex flex-col items-center justify-center gap-y-6">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-4xl font-bold text-black">
              Program <span className="text-custompink">Impacts</span>
            </h1>
            <p className="text-xl font-normal text-gray-700">
              Our various programmes help us reach out to those in need and
              provide for their safety and well-being
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
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
      { threshold: 0.3 },
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
    ([key]) => key !== "bgImg" && key !== "title",
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
        `<span class="text-pink-500 font-bold">${word}</span>`,
      );
    });

    return styledTitle;
  };

  return (
    <>
      <div
        className="card relative hidden h-[450px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl border bg-cover bg-center p-12 pt-36 shadow-lg transition-all duration-300 ease-in-out hover:h-[450px] hover:w-[650px] hover:items-start hover:justify-start hover:pt-7 lg:flex"
        style={{
          backgroundImage: `url(${card.bgImg})`,
        }}
      >
        {/* Title with styled parts */}
        <div
          className="card-title h-1/4 text-lg text-white transition-all duration-300 ease-in-out"
          dangerouslySetInnerHTML={{ __html: styleTitle(card.title) }}
        />

        {/* Details */}
        <div className="details mt-10 flex h-3/4 w-full flex-col gap-y-3 text-white opacity-0 transition-all duration-300 ease-in-out hover:opacity-100">
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
          <div className="flex items-start justify-between">
            <button className="rounded-3xl bg-pink-500 p-4 text-base text-white">
              Donate Now
            </button>
            <div className="flex items-center gap-1 text-pink-400">
              <p className="cursor-pointer text-base">Read more</p>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        ref={cardRef}
        className="card relative h-auto w-full overflow-hidden rounded-2xl border bg-cover bg-center p-12 pt-36 shadow-lg transition-all duration-500 ease-in-out lg:hidden"
        style={{ backgroundImage: `url(${card.bgImg})` }}
      >
        <div className="card-title text-lg text-white">{card.title}</div>
        <div
          className={`details mt-5 flex flex-col gap-y-3 text-white opacity-0 transition-opacity duration-700 ease-in-out ${
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
          <div className="mt-5 flex items-center justify-between">
            <button className="rounded-3xl bg-pink-500 p-3 text-base text-white">
              Donate Now
            </button>
            <div className="flex items-center gap-1 text-pink-400">
              <p className="cursor-pointer text-base">Read more</p>
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
