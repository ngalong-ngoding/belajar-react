import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <div className="flex overflow-hidden h-dvh">
      {/* Left side */}
      <Sidebar />
      {/* Right side */}
      <div className="w-full overflow-y-auto">
        {/* Topbar */}
        <Topbar />
        {/* Main content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
