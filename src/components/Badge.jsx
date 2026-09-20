import cn from "@/utils/cn";

const Badge = ({ label, color = "blue", className = "" }) => {
  const colors = {
    blue: "text-[#0066CC] bg-[#d7e3ef]",
    purple: "text-[#5856d6] bg-[#e2e1f1]",
    teal: "text-[#0F8A8A] bg-[#D9E8E8]",
    green: "text-[#2D9D5F] bg-[#DCEAE2]",
  };

  return (
    <span
      className={cn(
        "py-2 px-2.5 rounded-full font-semibold leading-0",
        colors[color],
        className,
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
