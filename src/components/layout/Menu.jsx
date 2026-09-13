import { NavLink } from "react-router";
// import cn from "../../../utils/cn";
import cn from "./../../utils/cn";

const Menu = ({ title = "", icon = null, to = "/" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "w-full px-2.5 py-2 duration-150 cursor-pointer hover:bg-[#0066CC14] rounded-md flex items-center gap-2.5 hover:text-[#0066CC]",
          isActive ? "bg-[#0066CC14] text-[#0066CC]" : "",
        )
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default Menu;
