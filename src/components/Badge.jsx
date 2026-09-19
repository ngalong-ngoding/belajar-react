import cn from "../utils/cn";

const Badge = ({ label, color = "blue" }) => {
  const colors = {
    blue: "text-[#0066CC] bg-[#d7e3ef]",
    purple: "text-[#5856d6] bg-[#e2e1f1]"
  };

  return <span className={cn("py-2 px-2.5 rounded-full font-semibold leading-0", colors[color])}>{label}</span>;
};

export default Badge;
