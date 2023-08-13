import { Circle } from "rc-progress";

const CircleProgress = ({ title, description, qty, percent, strokeColor }) => {
  return (
    <div className="grid grid-cols-2 shadow-lg items-center w-full md:w-[98%] h-64 bg-white rounded-lg">
      <div className="flex flex-col col-span-1 justify-between h-full p-5">
        <h4 className="text-xl font-extrabold">{title}</h4>
        <p className="text-slate-500 text-sm">{description}</p>
        <span className="text-xl font-semibold">{qty}</span>
      </div>
      <div className="flex justify-center items-center h-full relative bg-blue-100">
        <Circle
          style={{ width: "75%" }}
          trailColor="transparent"
          strokeColor={strokeColor}
          strokeWidth={8}
          percent={percent}
        />
      </div>
      <span className="mt-[30%] right-0 top-0 absolute text-xl font-extrabold">
        {percent}%
      </span>
    </div>
  );
};

export default CircleProgress;
