// Packages
import { NavLink } from "react-router-dom";

// Icons
import {
  BiCart,
  FiSettings,
  IoFastFoodOutline,
  IoAnalyticsSharp,
  RxDashboard,
} from "../data/icons";

const MobileSidebar = () => {
  return (
    <aside className="flex items-center justify-around text-xl sm:hidden fixed bottom-1 left-0 right-0 z-10 bg-white p-4 mx-3 rounded-full shadow-sm shadow-black">
      {sidebarData.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={({ isActive }) =>
            isActive ? activeStyles : inActiveStyles
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </aside>
  );
};

export default MobileSidebar;

// Styles
const activeStyles =
  "flex justify-center items-center rounded-full cursor-pointer bg-red-500 text-white w-8 h-8 transition-colors duration-150";
const inActiveStyles =
  "flex justify-center items-center rounded-full cursor-pointer hover:bg-red-500 hover:text-white w-8 h-8 transition-colors duration-150";

// Sidebar Data
const sidebarData = [
  { name: "Dashboard", icon: <RxDashboard />, link: "/" },
  { name: "Customers", icon: <IoFastFoodOutline />, link: "/recipes" },
  { name: "Analytics", icon: <IoAnalyticsSharp />, link: "/analytics" },
  { name: "CartItems", icon: <BiCart />, link: "/cartitems" },
  { name: "Settings", icon: <FiSettings />, link: "/settings" },
];
