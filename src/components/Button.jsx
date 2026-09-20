import cn from "@/utils/cn";

const Button = ({
  children = null,
  variant = "primary",
  onClick = () => {},
}) => {
  const buttonVariant = {
    primary: "bg-[#0066CC] text-white hover:bg-[#0858a0] active:bg-[#0a3561]",
    secondary:
      "border border-[#E0E0E0] hover:bg-[#F5F5F5] hover:border-[#CFCFCF] active:bg-[#EBEBEB]",
    tertiary: "text-amber-500",
  };

  return (
    <button
      className={cn(
        "cursor-pointer rounded-full px-4 py-3 w-fit duration-100",
        buttonVariant[variant],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
