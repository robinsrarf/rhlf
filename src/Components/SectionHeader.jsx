import { CircleDotDashed } from "lucide-react";
export default function SectionHeader({ title }) {
  return (
    <>
      <div className="mr-auto hidden pl-28 lg:flex gap-4 items-center mt-5 md:mt-16 md:mb-5 hover:animate-pulse transition duration-300">
        <CircleDotDashed size={25} className="text-pink-600" />
        <p className="text-lg font-semibold">{title}</p>
      </div>

      <div className="mr-auto lg:hidden pl-5 pt-2 pb-3 flex gap-2 items-center mt-5 hover:animate-pulse transition duration-300">
        <CircleDotDashed size={20} className="text-pink-600" />
        <p className="font-semibold">{title}</p>
      </div>
    </>
  );
}
