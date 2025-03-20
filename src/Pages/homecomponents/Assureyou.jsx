import React from "react";
import { ShieldCheck, ReceiptIndianRupee, Lock, Eye } from "lucide-react";
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
    <section className="my-1 flex h-full w-full flex-col items-center justify-center gap-y-5 bg-stone-200 py-6 lg:my-2 lg:py-20">
      <h1 className="my-1 w-full text-center font-quicksand text-4xl font-bold text-gray-800">
        We <span className="font-quicksand text-pink-500">assure</span> you that
      </h1>
      <div className="mt-5 flex flex-col gap-3 lg:mt-10 lg:w-fit lg:flex-row lg:items-center lg:gap-32">
        {assurance.map((assure, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3"
            >
              {React.createElement(assure.icon, {
                size: 35,
                className: "w-30 h-30",
              })}
              <h2 className="w-56 text-center text-base text-gray-700">
                {assure.title}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
