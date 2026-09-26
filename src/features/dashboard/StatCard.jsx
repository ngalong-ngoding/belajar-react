import Card from "@/components/Card";

const StatCard = ({
  icon = null,
  title = "",
  count = 0,
  caption = "",
  bgIcon = "#0000000A",
  formatter = "",
}) => {
  return (
    <Card className="flex flex-col gap-3 text-[#7A7A7A]">
      <div className="flex items-center gap-2 5">
        <div
          style={{ backgroundColor: bgIcon }}
          className="w-fit p-2 rounded-[10px]"
        >
          {icon}
        </div>
        <span className="text-xs font-semibold">{title}</span>
      </div>
      <span className="text-black text-4xl font-bold">
        {count}
        <span className="text-base text-[#7A7A7A]">{formatter}</span>
      </span>
      <span className="text-xs">{caption}</span>
    </Card>
  );
};

export default StatCard;
