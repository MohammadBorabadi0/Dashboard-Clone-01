// Icons
import { useStateContext } from "../context/StateProvider";
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";

const Nav = () => {
  const { isOpen, ref } = useStateContext();

  return (
    <nav
      className={`flex ${isOpen ? "left-2 sm:left-[234px]" : "sm:left-[110px]"} ${
        ref && "fixed top-0 right-0 bg-white shadow-lg rounded-sm mr-2 p-2"
      } z-10 bg-red-50 px-2 items-center justify-between overflow-hidden`}
    >
      <h2 className="flex items-center gap-2 text-sm sm:text-lg lg:text-2xl font-extrabold">
        Hi, Sara!
        <img src="/img/hand.png" alt="hand" className="w-6 xl:w-8" />
      </h2>
      <div className="flex items-center gap-3">
        <IoNotificationsOutline className="cursor-pointer text-lg sm:text-2xl" />
        <AiOutlineMessage className="cursor-pointer text-lg sm:text-2xl" />
      </div>
    </nav>
  );
};

export default Nav;
