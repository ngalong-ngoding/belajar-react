const Avatar = ({ name = "" }) => {
  const splitName = name?.split(" ");
  const initial = splitName[0].charAt(0) + splitName[1].charAt(0);

  return (
    <span className="shrink-0 flex items-center justify-center size-10 bg-[#6B8CAE] text-white rounded-full">
      {initial}
    </span>
  );
};

export default Avatar;
