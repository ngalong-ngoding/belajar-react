
const Menu = ({ title = "", icon = null }) => {
    return (
        <button className="w-full px-2.5 py-2 duration-150 cursor-pointer hover:bg-[#0066CC14] rounded-md flex items-center gap-2.5 hover:text-[#0066CC]">
            {icon}
            {title}
        </button>
    )
}

export default Menu;