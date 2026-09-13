import { ChevronDown, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="px-8 flex items-center justify-between w-full h-16 bg-white border-b border-[#E0E0E0]">
      <span>DashboardPage</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#0000000A] border border-[#E0E0E0] rounded-full py-1 px-3 ">
          <Search className="text-[#7A7A7A] size-4 rotate-90" />
          <input placeholder="Search" className="outline-none" />
        </div>
        <span className="inline-block h-6 border-l border-[#E0E0E0]"></span>
        <button className="flex items-center gap-2">
          <span className="flex items-center justify-center size-10 bg-[#6B8CAE] text-white rounded-full">
            MF
          </span>
          <span>Muhamad Fatah</span>
          <ChevronDown strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
