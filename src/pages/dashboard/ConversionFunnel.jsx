import Card from "@/components/Card";

const ConversionFunnel = () => {
  return (
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
  );
};

export default ConversionFunnel;
