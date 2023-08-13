import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// const initialState = {};

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [ref, setRef] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setRef(true);
      } else {
        setRef(false);
      }
    };
  }, []);

  return (
    <StateContext.Provider value={{ isOpen, setIsOpen, ref }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
