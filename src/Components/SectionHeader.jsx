import { CircleDotDashed } from "lucide-react";
export default function SectionHeader({ title }) {
  return (
    <>
      <div className="mr-auto mt-5 hidden items-center gap-4 pl-28 transition duration-300 hover:animate-pulse md:mb-5 md:mt-16 lg:flex">
        <CircleDotDashed size={25} className="text-pink-600" />
        <p className="text-lg font-semibold">{title}</p>
      </div>

      <div className="mr-auto mt-5 flex items-center gap-2 pb-3 pl-5 pt-2 transition duration-300 hover:animate-pulse lg:hidden">
        <CircleDotDashed size={20} className="text-pink-600" />
        <p className="font-semibold">{title}</p>
      </div>
    </>
  );
}
