import {
  Activity,
  Briefcase,
  ChartColumn,
  ChevronDown,
  MessageSquareMore,
  Search,
  Star,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const statCardList = [
    {
      icon: <Briefcase size={18} />,
      title: "Total applications",
      count: 14,
      caption: "11 sent · 3 saved",
      formatter: "",
    },
    {
      icon: <Activity size={18} className="text-[#0066CC]" />,
      title: "Active",
      count: 8,
      caption: "In play right now",
      bgIcon: "#e0ecf8",
      formatter: "",
    },
    {
      icon: <MessageSquareMore size={18} className="text-[#0066CC]" />,
      title: "Interviews",
      count: 2,
      caption: "1 onsite next week",
      bgIcon: "#e0ecf8",
      formatter: "",
    },
    {
      icon: <Star size={18} className="text-[#0066CC]" />,
      title: "Offers",
      count: 1,
      caption: "11 sent · 3 saved",
      bgIcon: "#e0ecf8",
      formatter: "",
    },
    {
      icon: <ChartColumn size={18} className="text-[#0066CC]" />,
      title: "Response rate",
      count: 73,
      caption: "11 sent · 3 saved",
      bgIcon: "#e0ecf8",
      formatter: "%",
    },
  ];

  return (
    <div className="flex">
      {/* Left side */}
      <Sidebar />
      {/* Right side */}
      <div className="w-full">
        {/* Topbar */}
        <div className="px-8 flex items-center justify-between w-full h-16 bg-white border-b border-[#E0E0E0]">
          <span>Dashboard</span>
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
        {/* Main content */}
        <div className="flex flex-col gap-y-6 p-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="primary" size="xl">
            Tertiary
          </Button>
          <button className="bg-amber-600 text-white rounded-lg px-4 py-2 border border-amber-500 w-fit">
            Primary
          </button>
          <button className="bg-amber-800 rounded-lg px-4 py-2 text-amber-500 border border-amber-500 w-fit">
            Secondary
          </button>
          <button className="rounded-lg px-4 py-2 text-amber-500 w-fit">
            Tertiary
          </button>
          <div className="flex items-center gap-4">
            {/* // { icon, title, count, caption, bgIcon, formatter }
              // const { icon, title, count, caption, bgIcon, formatter } = stat; */}
            {statCardList.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
          <Card>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Conversion funnel</p>
              <span className="text-xs text-[#7A7A7A]">Last 90 days</span>
            </div>
            <span className="inline-block text-xs text-[#7A7A7A] mb-4">
              Where the pipeline narrows.
            </span>
            <div>
              <span className="text-xs text-[#7A7A7A]">Wishlist</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
