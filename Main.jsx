import { useStateContext } from "./src/context/StateProvider";

import Nav from "./src/components/Nav";
import Section1 from "./src/components/Section1";
import Section2 from "./src/components/Section2";
import Section4 from "./src/components/Section4";

const Main = () => {
  const { isOpen } = useStateContext();

  return (
    <>
      <main
        className={`min-h-screen w-full my-5 overflow-x-hidden ${
          isOpen ? "sm:ml-[235px]" : "sm:ml-[110px]"
        }`}
      >
        <Nav />
        <main>
          <Section1 />
          <Section2 />
          <Section4 />
        </main>
      </main>
    </>
  );
};

export default Main;
