import {
  Activity,
  Briefcase,
  ChartColumn,
  MessageSquareMore,
  Star,
} from "lucide-react";
import StatCard from "./StatCard";
import ConversionFunnel from "./ConversionFunnel";

const DashboardPage = () => {
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
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-4">
        {/* // { icon, title, count, caption, bgIcon, formatter }
              // const { icon, title, count, caption, bgIcon, formatter } = stat; */}
        {statCardList.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      <ConversionFunnel />
    </div>
  );
};

export default DashboardPage;
