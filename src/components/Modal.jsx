import cn from "@/utils/cn";

const Modal = ({ children = null, opened = false, className = "" }) => {
  return (
    opened && (
      <div className="fixed bg-black/30 h-dvh w-full top-0 left-0 flex items-center justify-center">
        <div className={cn("bg-white rounded-xl w-4/12", className)}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
