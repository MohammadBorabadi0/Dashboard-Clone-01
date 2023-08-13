import { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const CircularProgress = ({ title, description, qty, value, pathColor }) => {
  const [val, setVal] = useState(0);

  setTimeout(() => setVal(value), 1000);

  return (
    <div className="flex flex-1 h-52 justify-between items-center px-4 py-2 shadow-md rounded-xl bg-white">
      <div className="text-sm flex flex-col justify-between h-full py-4 font-semibold">
        <h4 className="font-bold text-xl lg:text-3xl">{title}</h4>
        <p className="text-slate-500">{description}</p>
        <span className="text-xl">{qty}</span>
      </div>
      <div
        style={{ width: 100, height: 150 }}
        className="flex justify-center items-center"
      >
        <CircularProgressbarWithChildren
          value={val}
          styles={buildStyles({
            pathColor,
          })}
        >
          <div style={{ marginTop: -5 }}>
            <strong className="text-2xl font-semibold">{val}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularProgress;
