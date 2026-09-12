import cn from "../utils/cn";

const Button = ({ children = null, variant = "primary" }) => {
  const buttonVariant = {
    primary: "bg-amber-600 text-white",
    secondary: "bg-amber-800 text-amber-500 border border-amber-500",
    tertiary: "text-amber-500",
  };

  return (
    <button
      className={cn("rounded-lg px-4 py-2 w-fit", buttonVariant[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
