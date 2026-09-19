import { LayoutDashboard, Phone, Settings, SquareKanban } from "lucide-react";
import Menu from "./Menu";

const Sidebar = () => {
  const sidebarList = [
    { title: "Dashboard", to: "/", icon: LayoutDashboard },
    { title: "Board", to: "/board", icon: SquareKanban },
    { title: "Contacts", to: "/contacts", icon: Phone },
    { title: "Settings", to: "/settings", icon: Settings },
  ];

  return (
    <div className="bg-white px-4 py-6 h-full w-80 border-r border-[#E0E0E0]">
      <div className="flex items-center gap-2.5 mb-7">
        <div className="rounded-lg bg-[#0066cc] text-white size-8 flex items-center justify-center">
          <img src="/favicon.svg" width={16} height={16} />
        </div>
        <h1 className="font-bold">Trackline</h1>
      </div>
      <p className="text-[#7A7A7A] mb-3">Workspace</p>
      <div className="flex flex-col gap-2">
        {sidebarList.map(({ title, to, icon: Icon }) => (
          <Menu key={to} title={title} to={to} icon={<Icon strokeWidth={1} />} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
