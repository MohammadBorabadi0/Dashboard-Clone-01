import { IoMdOptions, IoSearch } from "../../data/icons";

const Nav = () => {
  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:gap-0 justify-between items-center">
      <div className="flex items-center gap-1 border-b w-fit bg-transparent">
        <IoSearch />
        <input
          type="text"
          placeholder="Enter your search request..."
          className="text-sm px-1 py-1.5 outline-none"
        />
      </div>
      <div className="flex items-center gap-6 sm:gap-4">
        <IoMdOptions />
        <button className="bg-red-600 text-white rounded-lg p-2 text-sm">
          Go To Premium
        </button>
      </div>
    </section>
  );
};

export default Nav;
