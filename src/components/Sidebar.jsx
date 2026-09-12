import { LayoutDashboard, Settings, SquareKanban } from "lucide-react";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <div className="bg-white px-4 py-6 h-screen w-80 border-r border-[#E0E0E0]" >
            <div className="flex items-center gap-2.5 mb-7">
                <div className="rounded-lg bg-[#0066cc] text-white size-8 flex items-center justify-center">
                    <img src="/favicon.svg" width={16} height={16} />
                </div>
                <h1 className="font-bold">Trackline</h1>
            </div>
            <p className="text-[#7A7A7A] mb-3">Workspace</p>
            <div className="flex flex-col gap-2">
                <Menu title="Dashboard" icon={<LayoutDashboard strokeWidth={1} />} />
                <Menu title="Board" icon={<SquareKanban strokeWidth={1} />} />
                <Menu title="Settings" icon={<Settings strokeWidth={1} />} />
            </div>
        </div >
    )
}

export default Sidebar;