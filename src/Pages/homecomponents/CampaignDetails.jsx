import { Link } from "react-router-dom";
import "../../CSS/CampaignCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import campaignimg1 from "../../assets/images/campaignimg1.png";
import campaignimg2 from "../../assets/images/campaignimg2.png";
import campaignimg3 from "../../assets/images/campaignimg3.png";
import SectionHeader from "../../Components/SectionHeader";

const campaignData = [
  {
    id: 1,
    image: campaignimg1,
    title: "Help a young child fight blood cancer",
    description:
      "Eight-year-old Aaditya needs urgent treatment that his daily wage laborer parents can't afford. Your donation can help save his life.",
  },
  {
    id: 2,
    image: campaignimg2,
    title: "Help a mother fight breast cancer",
    description:
      "Lakshmi is a domestic help and single mother of three young children, fighting breast cancer. Help her defeat this disease by contributing.",
  },
  {
    id: 3,
    image: campaignimg3,
    title: "Contribute to Cancer Institute",
    description:
      "Help Cancer Institute save lives and put smiles on people's faces by making a contribution today!",
  },
];

export default function CampaignDetails() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    arrows: false,
    dots: true,
  };
  return (
    <>
      <SectionHeader title="Campaign Details" />
      <section className="w-full px-4 sm:px-8 md:px-12">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-2xl font-light sm:text-3xl md:text-4xl">
            <span className="font-medium text-gray-700">
              Donate to one of our{" "}
            </span>
            <span className="font-bold text-pink-400">campaigns</span>
          </h1>
          <p className="mt-3 text-sm text-[#5a5a5a] sm:text-base md:text-lg">
            By donating, you take a step towards creating a better world. Every
            rupee counts!
          </p>

          {campaignData.length > 0 ? (
            <div>
              <Slider
                {...settings}
                className="w-screen px-3 lg:w-[800px] lg:px-0"
              >
                {campaignData.map((campaign) => (
                  <CampaignCard key={campaign.id} {...campaign} />
                ))}
              </Slider>
            </div>
          ) : (
            <p className="mt-4 text-gray-500">No campaigns available.</p>
          )}
        </div>
      </section>
    </>
  );
}

function CampaignCard({ image, title, description, id }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-lg border bg-white p-4 text-center lg:flex-row">
      <img
        src={image}
        alt={title}
        className="h-60 w-80 rounded-lg object-cover lg:h-60 lg:w-full"
      />
      <div className="mx-2 flex flex-col items-center gap-2 lg:items-start">
        <p className="rounded-xl bg-blue-500 px-2 py-1 text-sm text-white">
          Featured
        </p>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-start text-sm text-gray-600">{description}</p>
        <Link
          to={`/donate/${id}`}
          className="mt-3 inline-block rounded-xl bg-pink-500 px-4 py-2 text-white transition hover:bg-pink-600 hover:no-underline lg:self-start"
          aria-label={`Donate to ${title}`}
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
}
