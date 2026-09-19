import { ChevronDown, Search } from "lucide-react";
import { useLocation } from "react-router";
import Avatar from "../Avatar";

const Topbar = () => {
  const location = useLocation();
  const activeMenu = location?.pathname?.split("/").filter(Boolean)[0];

  return (
    <div className="px-8 flex items-center justify-between w-full h-16 bg-white border-b border-[#E0E0E0]">
      <span className="capitalize">{activeMenu}</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#0000000A] border border-[#E0E0E0] rounded-full py-1 px-3 ">
          <Search className="text-[#7A7A7A] size-4 rotate-90" />
          <input placeholder="Search" className="outline-none" />
        </div>
        <span className="inline-block h-6 border-l border-[#E0E0E0]"></span>
        <button className="flex items-center gap-2">
          <Avatar name="Muhamad Fatah" />
          <span>Muhamad Fatah</span>
          <ChevronDown strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
