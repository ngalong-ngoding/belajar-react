const takeChars = (str, n) => [...str.toUpperCase()].slice(0, n).join("");

const Avatar = ({ name }) => {
  const parts = String(name ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  let initial;
  if (parts.length === 0) {
    initial = "?";
  } else if (parts.length === 1) {
    initial = takeChars(parts[0], 2);
  } else {
    initial = takeChars(parts[0], 1) + takeChars(parts.at(-1), 1);
  }

  return (
    <span className="shrink-0 flex items-center justify-center size-10 bg-[#6B8CAE] text-white rounded-full">
      {initial}
    </span>
  );
};

export default Avatar;
