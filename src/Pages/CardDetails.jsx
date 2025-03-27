import { useParams } from "react-router-dom";
import LeftSec from "./CardDetails/LeftSec";
import RightSec from "./CardDetails/RightSec";

// Define the data for emergency cards (you can also fetch this data from an API if needed)
const emergencyData = [
  {
    id: 1,
    title: "This Man With Elephant Foot Support, Help Him Get Surgery",
    author: "By Krishna Prasad",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    description:
      "This man suffers from Elephantiasis, and he urgently needs surgery. Your donation will help him get the surgery he needs.",
  },
  {
    id: 2,
    title: "Urgent Help Needed for a Child with Heart Disease",
    author: "By Anjali Verma",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3", // replace with actual image path
    totalRaised: "₹500,000",
    totalRequired: "₹1,000,000",
    backers: 220,
    progress: "50%",
    description:
      "A young child is suffering from a severe heart condition. The treatment and surgery are expensive, and every bit helps.",
  },
  {
    id: 3,
    title: "Help This Family Recover from a Fire Disaster",
    author: "By Rohit Sharma",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3", // replace with actual image path
    totalRaised: "₹300,000",
    totalRequired: "₹800,000",
    backers: 150,
    progress: "37.5%",
    description:
      "A family lost everything in a devastating fire. Your support can help them rebuild their lives and recover from this tragedy.",
  },
  {
    id: 4,
    title: "Flood Relief Fund",
    author: "By Disaster Relief Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
];

const CardDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const emergency = emergencyData.find((item) => item.id === parseInt(id));

  if (!emergency) {
    return <p>Emergency not found</p>; // Handle the case where no matching card is found
  }

  return (
    <div className="mx-auto grid max-h-[4300px] max-w-screen-lg grid-rows-2 p-4 md:grid-cols-3 lg:max-h-[3800px]">
      {/* Left side */}
      <div className="col-span-2 flex-col gap-8 lg:flex">
        {/* left side with sections */}
        <LeftSec emergency={emergency} />
      </div>
      <div className="hidden md:flex">
        {/* Right side */}
        <RightSec emergency={emergency} />
      </div>
    </div>
  );
};

export default CardDetails;
