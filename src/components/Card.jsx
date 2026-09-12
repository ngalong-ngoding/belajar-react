import clsx from "clsx";

const Card = ({ children = null, className = "" }) => {
  return (
    <div
      className={clsx(
        "w-full border border-[#E0E0E0] rounded-[18px] p-4.5 bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
