// Packages
import { NavLink } from "react-router-dom";
// Icons
import {
  BiCart,
  FiSettings,
  IoFastFoodOutline,
  IoAnalyticsSharp,
  RxDashboard,
  FiChevronRight,
  FiChevronLeft,
} from "../data/icons";

// Context
import { useStateContext } from "../context/StateProvider";

const Sidebar = () => {
  const { isOpen, setIsOpen, ref } = useStateContext();

  // Start Styles
  const styles = `${isOpen ? "w-52" : "w-20"} rounded-3xl ${
    ref
      ? "bg-red-600 top-0 bg-white shadow-sm my-0 rounded-none rounded-b-3xl"
      : "my-4"
  } hidden sm:flex flex-col bg-white sm:mx-2 fixed h-[95%] shadow-2xl transition-all duration-150`;
  // End Styles

  const windowScreen = window.outerWidth;

  return (
    <aside className={windowScreen > 640 ? styles : "hidden"}>
      {isOpen && (
        <div className="hidden sm:flex flex-col gap-2 justify-center items-center mt-10">
          <img
            src="/img/persons/girl.jpg"
            className="w-24 h-24 rounded-full object-cover border-4 border-r-4 border-r-red-600 p-1.5"
          />
          <h4 className="text-xl font-semibold font-secondary">Sara Rider</h4>
        </div>
      )}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="hidden sm:block absolute right-[-13px] cursor-pointer top-10 px-2 py-1.5 bg-gray-100 shadow-md text-black rounded-full"
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </span>

      {/* Start Sidebar Items  */}
      <ul
        className={`flex flex-col items-center gap-4 lg:gap-6 mt-24 ${
          isOpen ? "lg:mt-8" : "lg:mt-24"
        }`}
      >
        {sidebarData.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              isActive ? activeStyles : inActiveStyles
            }
          >
            <div className={`flex ${isOpen && "ml-8 w-40"}`}>
              <span className="text-2xl">{item.icon}</span>
              <span
                className={`${isOpen ? "sm:block ml-3" : "sm:hidden"}`}
              >
                {item.name}
              </span>
            </div>
          </NavLink>
        ))}
      </ul>
      {/* {End Sidebar Items } */}
    </aside>
  );
};

export default Sidebar;

const activeStyles =
  "flex justify-center items-center font-semibold cursor-pointer text-red-600 border-l-4 border-red-600  w-full py-2 transition-all duration-100";
const inActiveStyles =
  "flex justify-center items-center font-semibold cursor-pointer text-gray-400 w-full py-2 hover:text-red-600 hover:border-l-4 border-red-600 transition-all duration-100";

// Sidebar Data
const sidebarData = [
  { name: "Dashboard", icon: <RxDashboard />, link: "/" },
  { name: "Recipes", icon: <IoFastFoodOutline />, link: "/recipes" },
  { name: "Analytics", icon: <IoAnalyticsSharp />, link: "/analytics" },
  { name: "CartItems", icon: <BiCart />, link: "/cartitems" },
  { name: "Settings", icon: <FiSettings />, link: "/settings" },
];
