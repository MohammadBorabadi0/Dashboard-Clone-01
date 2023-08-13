import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { useEffect, useState } from "react";

const ProgressComponent = ({
  title,
  qty,
  description,
  colorSlice,
  percent,
}) => {
  const [update, setUpdate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        id: 0,
        percent: 60,
        fontColor: "#000",
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const newObject = { ...update };

  return (
    <div className="flex justify-between items-center sm:h-56 rounded-lg shadow-md pl-4 pr-2 bg-purple-200">
      <div className="flex flex-col justify-between font-semibold h-full py-8">
        <h4 className="font-extrabold text-xl">{title}</h4>
        <p className="text-sm md:text-base text-slate-500">{description}</p>
        <span className="text-2xl">{qty}</span>
      </div>
      <CircularProgressBar
        {...newObject}
        percent={percent}
        colorSlice={colorSlice}
        fontSize="1.2rem"
        fontWeight={700}
        size=
        styles={{display:'flex', justifyContent:'center',alignItems:'center'}}
      />
    </div>
  );
};

export default ProgressComponent;
