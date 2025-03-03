import React from "react";
import assure1 from "../../assets/images/Assureyou/Assurance1.png";
import assure2 from "../../assets/images/Assureyou/Assurance2.png";
import assure3 from "../../assets/images/Assureyou/Assurance3.png";
import assure4 from "../../assets/images/Assureyou/Assurance4.png";
import {
  ShieldCheck,
  ReceiptIndianRupee,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
export default function Assureyou() {
  const assurance = [
    {
      icon: ShieldCheck,
      title: "All Our Efforts Are Made Possible Only Because Of Your Efforts.",
    },
    {
      icon: ReceiptIndianRupee,
      title:
        "All Donations Are Tax Deductible Under Section 80G Of Income Tax Act",
    },
    {
      icon: Lock,
      title: "Your Donation Transactions Are Completely Safe and Secure",
    },
    {
      icon: Eye,
      title: "100% transparency with photo proof and sponsor recognition.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 py-5">
      <h1 className="text-3xl font-semibold text-black">
        We <span className="text-pink-500">assure</span> you that
      </h1>
      <div className="mt-10 flex flex-col gap-x-5 lg:max-w-[80%] lg:flex-row">
        {assurance.map((assure) => {
          return (
            <div className="flex flex-col items-center justify-center gap-y-3">
              {React.createElement(assure.icon, {
                size: 30,
                className: "w-30 h-30",
              })}
              <h2 className="text-base text-gray-700">{assure.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex cursor-pointer items-center gap-1 text-pink-400 lg:pl-[1000px]">
        <p className="text-base">View Details</p>
        <ArrowRight size={15} />
      </div>
    </div>
  );
}
