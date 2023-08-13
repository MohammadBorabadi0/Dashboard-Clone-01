// Components
import MobileSidebar from "../components/MobileSidebar";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

// Context
import { useStateContext } from "../context/StateProvider";

const Layout = ({ children }) => {
  const { isOpen } = useStateContext();

  return (
    <section className="flex md:gap-4 min-h-screen max-w-screen-2xl md:mx-auto overflow-x-hidden bg-red-50">
      <Sidebar />
      <MobileSidebar />
      <div
        className={`min-h-screen w-full my-5 overflow-x-hidden ${
          isOpen ? "sm:ml-[235px]" : "sm:ml-[110px]"
        }`}
      >
        <Nav />
        <main>{children}</main>
      </div>
    </section>
  );
};

export default Layout;
