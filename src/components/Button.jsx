import cn from "../utils/cn";

const Button = ({ children = null, variant = "primary" }) => {
  const buttonVariant = {
    primary: "bg-[#0066CC] text-white hover:bg-[#0858a0] active:bg-[#0a3561]",
    secondary: "bg-amber-800 text-amber-500 border border-amber-500",
    tertiary: "text-amber-500",
  };

  return (
    <button
      className={cn("cursor-pointer rounded-lg px-4 py-2 w-fit duration-100", buttonVariant[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
